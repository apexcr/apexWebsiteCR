import { Link } from "@tanstack/react-router";

function getCheckoutFinalData() {
  try {
    const raw = sessionStorage.getItem("checkoutFinalData");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function CheckoutFinal() {
  const data = getCheckoutFinalData();

  return (
    <div className="bg-app-bg min-h-screen px-6 py-12 lg:px-16">
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <header className="rounded-xl border border-gray-800 bg-surface-900 p-6">
          <h1 className="text-2xl font-black text-white uppercase sm:text-3xl">
            Gracias por su compra, pronto los contactaremos por whatsapp
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Orden generada correctamente.
          </p>
        </header>

        {data ? (
          <div className="space-y-6">
            <section className="rounded-xl border border-gray-800 bg-surface-900 p-6">
              <h2 className="mb-4 text-lg font-black text-white uppercase">
                Datos Personales
              </h2>
              <pre className="overflow-x-auto text-sm text-gray-300">
                {JSON.stringify(data.customer, null, 2)}
              </pre>
            </section>

            <section className="rounded-xl border border-gray-800 bg-surface-900 p-6">
              <h2 className="mb-4 text-lg font-black text-white uppercase">
                Dirección
              </h2>
              <pre className="overflow-x-auto text-sm text-gray-300">
                {JSON.stringify(data.address, null, 2)}
              </pre>
            </section>

            <section className="rounded-xl border border-gray-800 bg-surface-900 p-6">
              <h2 className="mb-4 text-lg font-black text-white uppercase">
                Productos
              </h2>
              <pre className="overflow-x-auto text-sm text-gray-300">
                {JSON.stringify(data.products, null, 2)}
              </pre>
            </section>

            <section className="rounded-xl border border-gray-800 bg-surface-900 p-6">
              <h2 className="mb-4 text-lg font-black text-white uppercase">
                Resumen
              </h2>
              <pre className="overflow-x-auto text-sm text-gray-300">
                {JSON.stringify(data.summary, null, 2)}
              </pre>
            </section>
          </div>
        ) : (
          <section className="rounded-xl border border-gray-800 bg-surface-900 p-6">
            <p className="text-sm text-gray-400">
              No hay datos de orden disponibles.
            </p>
          </section>
        )}

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
