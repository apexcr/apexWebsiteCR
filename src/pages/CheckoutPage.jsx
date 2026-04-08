import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value ?? 0);
}

export default function CheckoutPage() {
  const { cartItems, cartSubtotal, removeFromCart, updateItemQuantity } =
    useCart();

  const shipping = cartItems.length > 0 ? 12 : 0;
  const tax = cartSubtotal * 0.13;
  const total = cartSubtotal + shipping + tax;

  const handleCheckout = () => {
    alert("Checkout action pendiente de implementar");
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
                      <div>
                        <p className="text-xs tracking-[0.16em] text-gray-500 uppercase">
                          {item.category}
                        </p>
                        <h3 className="text-sm font-black tracking-wide text-white uppercase">
                          {item.name}
                        </h3>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
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
                        {formatCurrency(item.unitPrice * item.quantity)}
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
                  {formatCurrency(cartSubtotal)}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Envío</span>
                <span className="font-mono text-white">
                  {formatCurrency(shipping)}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Impuestos</span>
                <span className="font-mono text-white">
                  {formatCurrency(tax)}
                </span>
              </div>
            </div>

            <div className="mt-5 mb-6 flex items-center justify-between">
              <span className="text-sm font-bold tracking-wide text-gray-300 uppercase">
                Total
              </span>
              <span className="font-mono text-2xl font-black text-white">
                {formatCurrency(total)}
              </span>
            </div>

            <Button
              type="button"
              variant="heroPrimary"
              size="heroPrimary"
              className="w-full justify-center"
              disabled={cartItems.length === 0}
              onClick={handleCheckout}
            >
              Pagar ahora
            </Button>

            <p className="mt-4 text-center text-xs tracking-wide text-gray-500">
              Pago seguro y cifrado. La acción final se implementará luego.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
