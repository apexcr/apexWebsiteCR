import { Link } from "@tanstack/react-router";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

function getCheckoutFinalData() {
  try {
    const raw = sessionStorage.getItem("checkoutFinalData");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function CheckoutFinal() {
  const { clearCart } = useCart();
  const data = getCheckoutFinalData();

  useEffect(() => {
    // Vaciar el carrito cuando se complete la compra
    clearCart();
  }, [clearCart]);

  return (
    <div className="bg-app-bg min-h-screen px-6 py-12 lg:px-16">
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <header className="rounded-xl border border-gray-800 bg-surface-900 p-6">
          <h1 className="text-2xl font-black text-white uppercase sm:text-3xl">
            Gracias por su compra {data?.customer?.fullName || ""}, pronto los contactaremos por whatsapp
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Orden generada correctamente.
          </p>
        </header>

        <Link
          to="/products"
          className="inline-flex text-sm font-bold tracking-wide text-cyan-400 uppercase transition-colors hover:text-cyan-300"
        >
          Volver a productos
        </Link>
      </div>
    </div>
  );
}
