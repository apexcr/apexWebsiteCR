import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/data/products";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

const promoCodes = ["apexoficial", "davidr", "bruna", "der", "mariano"];
const discountPercentage = 15;

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, cartSubtotal, removeFromCart, updateItemQuantity } =
    useCart();
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromoCode, setAppliedPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [productsForOrder, setProductsForOrder] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    cedula: "",
    provincia: "",
    canton: "",
    distrito: "",
    otrasSenas: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const shipping = 3000;
  const discountAmount = appliedPromoCode
    ? cartSubtotal * (discountPercentage / 100)
    : 0;
  const discountedSubtotal = cartSubtotal - discountAmount;
  const total = discountedSubtotal + shipping;

  const applyPromoCode = () => {
    const normalizedCode = promoInput.trim().toLowerCase();

    if (!normalizedCode) {
      setPromoError("Ingresa un código promocional");
      setAppliedPromoCode("");
      return;
    }

    if (!promoCodes.includes(normalizedCode)) {
      setPromoError("Código no válido");
      setAppliedPromoCode("");
      return;
    }

    setAppliedPromoCode(normalizedCode);
    setPromoError("");
  };

  const handleCheckout = () => {
    handleOpenCheckoutModal(cartItems);
  };

  const handleOpenCheckoutModal = (products) => {
    setProductsForOrder(products);
    setFormErrors({});
    setIsCheckoutModalOpen(true);
  };

  const setFormValue = (field, value) => {
    setCheckoutForm((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateCheckoutForm = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!checkoutForm.fullName.trim()) errors.fullName = "Requerido";
    if (!checkoutForm.phone.trim()) {
      errors.phone = "Requerido";
    } else if (checkoutForm.phone.length < 8) {
      errors.phone = "Celular debe tener al menos 8 dígitos";
    }
    if (!checkoutForm.email.trim()) {
      errors.email = "Requerido";
    } else if (!emailPattern.test(checkoutForm.email.trim())) {
      errors.email = "Correo no válido";
    }
    if (!checkoutForm.cedula.trim()) errors.cedula = "Requerido";
    if (!checkoutForm.provincia.trim()) errors.provincia = "Requerido";
    if (!checkoutForm.canton.trim()) errors.canton = "Requerido";
    if (!checkoutForm.distrito.trim()) errors.distrito = "Requerido";
    if (!checkoutForm.otrasSenas.trim()) errors.otrasSenas = "Requerido";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleGenerateOrder = () => {
    if (!validateCheckoutForm()) return;

    const orderData = {
      customer: {
        fullName: checkoutForm.fullName.trim(),
        phone: checkoutForm.phone.trim(),
        email: checkoutForm.email.trim(),
        cedula: checkoutForm.cedula.trim(),
      },
      address: {
        provincia: checkoutForm.provincia.trim(),
        canton: checkoutForm.canton.trim(),
        distrito: checkoutForm.distrito.trim(),
        otrasSenas: checkoutForm.otrasSenas.trim(),
      },
      products: productsForOrder,
      summary: {
        subtotal: cartSubtotal,
        shipping,
        discountPercentage: appliedPromoCode ? discountPercentage : 0,
        discountAmount,
        total,
        appliedPromoCode,
      },
    };

    sessionStorage.setItem("checkoutFinalData", JSON.stringify(orderData));
    setIsCheckoutModalOpen(false);
    navigate({ to: "/checkout/final" });
  };

  return (
    <div className="bg-app-bg min-h-screen px-6 py-10 lg:px-16 lg:py-14">
      <div className="mx-auto w-full max-w-350">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-6">
          <div>
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase">
              Checkout
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white uppercase">
              Finalizar compra
            </h1>
          </div>
          <Link
            to="/products"
            className="text-sm font-bold tracking-wider text-cyan-400 uppercase transition-colors hover:text-cyan-300"
          >
            Continuar comprando
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
          <section className="rounded-2xl border border-gray-800 bg-surface-900 p-5 sm:p-7">
            <h2 className="mb-6 text-lg font-black tracking-wide text-white uppercase">
              Tu pedido
            </h2>

            {cartItems.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-700 bg-surface-800 p-8 text-center">
                <p className="mb-4 text-sm tracking-wide text-gray-400 uppercase">
                  Tu carrito está vacío
                </p>
                <Link
                  to="/products"
                  className="text-sm font-bold tracking-wider text-cyan-400 uppercase transition-colors hover:text-cyan-300"
                >
                  Ir a productos
                </Link>
              </div>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-gray-800 bg-surface-800 p-4"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex">
                        <p className="text-sm font-black tracking-wide text-white uppercase">
                          {item.name}{" "}
                          <span className="ml-4 text-sm text-gray-400 font-mono">
                            {item.presentation}
                          </span>
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="default"
                        size="sm"
                        className="text-xs font-bold tracking-wide text-gray-400 uppercase hover:text-white"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </Button>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center rounded-lg border border-gray-700 bg-black/30">
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-9 w-9 rounded-none text-lg text-gray-300 hover:bg-white/10 hover:text-white"
                          onClick={() =>
                            updateItemQuantity(
                              item.id,
                              Math.max(0, item.quantity - 1),
                            )
                          }
                        >
                          -
                        </Button>
                        <span className="min-w-10 text-center text-sm font-bold text-white">
                          {item.quantity}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-9 w-9 rounded-none text-lg text-gray-300 hover:bg-white/10 hover:text-white"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                      </div>

                      <p className="font-mono text-sm font-bold text-white">
                        {formatMoney(item.unitPrice * item.quantity)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <aside className="h-fit rounded-2xl border border-gray-800 bg-surface-900 p-5 sm:p-7 lg:sticky lg:top-28">
            <h2 className="mb-6 text-lg font-black tracking-wide text-white uppercase">
              Resumen
            </h2>

            <div className="space-y-3 border-b border-gray-800 pb-5 text-sm">
              <div className="flex items-center justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="font-mono text-white">
                  {formatMoney(cartSubtotal)}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Envío</span>
                <span className="font-mono text-white">
                  {formatMoney(shipping)}
                </span>
              </div>
              {appliedPromoCode ? (
                <div className="flex items-center justify-between text-green-400">
                  <span>Descuento ({discountPercentage}%)</span>
                  <span className="font-mono">
                    -{formatMoney(discountAmount)}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="mt-5 border-b border-gray-800 pb-5">
              <Button
                type="button"
                variant="default"
                size="sm"
                className="w-full justify-center text-xs font-bold tracking-wide uppercase"
                onClick={() => setIsPromoOpen((prev) => !prev)}
              >
                Insertar código de descuento
              </Button>

              {isPromoOpen ? (
                <div className="mt-3 space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(event) => setPromoInput(event.target.value)}
                      placeholder="Ingresa tu código"
                      className="w-full rounded-md border border-gray-700 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-cyan-400"
                    />
                    <Button
                      type="button"
                      variant="heroPrimary"
                      size="sm"
                      className="px-4"
                      onClick={applyPromoCode}
                    >
                      Aplicar
                    </Button>
                  </div>
                  {appliedPromoCode ? (
                    <p className="text-xs font-bold tracking-wide text-green-400 uppercase">
                      Código aplicado: {appliedPromoCode}
                    </p>
                  ) : null}
                  {promoError ? (
                    <p className="text-xs font-bold tracking-wide text-red-400 uppercase">
                      {promoError}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="mt-5 mb-6 flex items-center justify-between">
              <span className="text-sm font-bold tracking-wide text-gray-300 uppercase">
                Total
              </span>
              <span className="font-mono text-2xl font-black text-white">
                {formatMoney(total)}
              </span>
            </div>

            <Button
              type="button"
              variant="heroPrimary"
              size="heroPrimary"
              className="w-full justify-center"
              disabled={cartItems.length === 0}
              onClick={() => handleCheckout(cartItems)}
            >
              Pagar ahora
            </Button>
          </aside>
        </div>
      </div>

      <Dialog open={isCheckoutModalOpen} onOpenChange={setIsCheckoutModalOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto p-0">
          <DialogHeader>
            <DialogTitle>Datos para generar orden</DialogTitle>
            <DialogDescription>
              Completa la información para continuar con tu pedido.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 px-6 py-5">
            <fieldset className="space-y-4 rounded-lg border border-gray-800 p-4">
              <legend className="px-1 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                Datos personales
              </legend>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5 sm:col-span-2">
                  <label
                    htmlFor="checkout-fullName"
                    className="text-xs font-bold tracking-wide text-gray-300 uppercase"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="checkout-fullName"
                    type="text"
                    value={checkoutForm.fullName}
                    onChange={(event) =>
                      setFormValue("fullName", event.target.value)
                    }
                    className="w-full rounded-md border border-gray-700 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyan-400"
                  />
                  {formErrors.fullName ? (
                    <p className="text-xs text-red-400">
                      {formErrors.fullName}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="checkout-phone"
                    className="text-xs font-bold tracking-wide text-gray-300 uppercase"
                  >
                    Celular
                  </label>
                  <input
                    id="checkout-phone"
                    type="text"
                    inputMode="numeric"
                    value={checkoutForm.phone}
                    onChange={(event) =>
                      setFormValue(
                        "phone",
                        event.target.value.replace(/\D/g, ""),
                      )
                    }
                    className="w-full rounded-md border border-gray-700 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyan-400"
                  />
                  {formErrors.phone ? (
                    <p className="text-xs text-red-400">{formErrors.phone}</p>
                  ) : null}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="checkout-cedula"
                    className="text-xs font-bold tracking-wide text-gray-300 uppercase"
                  >
                    Cédula
                  </label>
                  <input
                    id="checkout-cedula"
                    type="text"
                    inputMode="numeric"
                    value={checkoutForm.cedula}
                    onChange={(event) =>
                      setFormValue(
                        "cedula",
                        event.target.value.replace(/\D/g, ""),
                      )
                    }
                    className="w-full rounded-md border border-gray-700 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyan-400"
                  />
                  {formErrors.cedula ? (
                    <p className="text-xs text-red-400">{formErrors.cedula}</p>
                  ) : null}
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label
                    htmlFor="checkout-email"
                    className="text-xs font-bold tracking-wide text-gray-300 uppercase"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="checkout-email"
                    type="email"
                    value={checkoutForm.email}
                    onChange={(event) =>
                      setFormValue("email", event.target.value)
                    }
                    className="w-full rounded-md border border-gray-700 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyan-400"
                  />
                  {formErrors.email ? (
                    <p className="text-xs text-red-400">{formErrors.email}</p>
                  ) : null}
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-4 rounded-lg border border-gray-800 p-4">
              <legend className="px-1 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                Dirección
              </legend>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="checkout-provincia"
                    className="text-xs font-bold tracking-wide text-gray-300 uppercase"
                  >
                    Provincia
                  </label>
                  <input
                    id="checkout-provincia"
                    type="text"
                    value={checkoutForm.provincia}
                    onChange={(event) =>
                      setFormValue("provincia", event.target.value)
                    }
                    className="w-full rounded-md border border-gray-700 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyan-400"
                  />
                  {formErrors.provincia ? (
                    <p className="text-xs text-red-400">
                      {formErrors.provincia}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="checkout-canton"
                    className="text-xs font-bold tracking-wide text-gray-300 uppercase"
                  >
                    Cantón
                  </label>
                  <input
                    id="checkout-canton"
                    type="text"
                    value={checkoutForm.canton}
                    onChange={(event) =>
                      setFormValue("canton", event.target.value)
                    }
                    className="w-full rounded-md border border-gray-700 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyan-400"
                  />
                  {formErrors.canton ? (
                    <p className="text-xs text-red-400">{formErrors.canton}</p>
                  ) : null}
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label
                    htmlFor="checkout-distrito"
                    className="text-xs font-bold tracking-wide text-gray-300 uppercase"
                  >
                    Distrito
                  </label>
                  <input
                    id="checkout-distrito"
                    type="text"
                    value={checkoutForm.distrito}
                    onChange={(event) =>
                      setFormValue("distrito", event.target.value)
                    }
                    className="w-full rounded-md border border-gray-700 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyan-400"
                  />
                  {formErrors.distrito ? (
                    <p className="text-xs text-red-400">
                      {formErrors.distrito}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label
                    htmlFor="checkout-otrasSenas"
                    className="text-xs font-bold tracking-wide text-gray-300 uppercase"
                  >
                    Otras señas
                  </label>
                  <textarea
                    id="checkout-otrasSenas"
                    value={checkoutForm.otrasSenas}
                    onChange={(event) =>
                      setFormValue("otrasSenas", event.target.value)
                    }
                    rows={3}
                    className="w-full resize-none rounded-md border border-gray-700 bg-black/30 px-3 py-2 text-sm text-white outline-none transition-colors focus:border-cyan-400"
                  />
                  {formErrors.otrasSenas ? (
                    <p className="text-xs text-red-400">
                      {formErrors.otrasSenas}
                    </p>
                  ) : null}
                </div>
              </div>
            </fieldset>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="heroPrimary"
              onClick={handleGenerateOrder}
            >
              Generar Orden
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
