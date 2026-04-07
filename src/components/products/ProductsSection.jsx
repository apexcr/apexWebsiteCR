import { useState } from "react";
import { products } from "../../data/products";
import { ProductCard } from "./ProductCard";

export function ProductsSection() {
  const [cartAdded, setCartAdded] = useState({});
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (productId) => {
    const product = products.find((p) => p.id === productId);

    if (!product) return;

    setCartAdded((prev) => ({ ...prev, [productId]: true }));
    setNotification(`${product.name} agregado al carrito`);

    setTimeout(() => {
      setCartAdded((prev) => ({ ...prev, [productId]: false }));
      setNotification(null);
    }, 2000);
  };

  return (
    <section className="relative bg-section-bg px-6 py-24 lg:px-16">
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      {notification ? (
        <div className="bg-surface-800 fixed top-24 right-6 z-50 rounded-xl border border-cyan-500/50 px-6 py-3 text-sm font-bold tracking-wider text-cyan-400 uppercase shadow-[0_0_20px_rgba(0,212,255,0.3)]">
          ✓ {notification}
        </div>
      ) : null}

      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-brand-primary h-1 w-8 rounded-full" />
              <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase">
                Mas Vendido
              </span>
            </div>
            <h2 className="font-oswald text-4xl font-black tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
              Tendencias En Peptidos
            </h2>
          </div>
        </div>

        <div className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto pb-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              cartAdded={cartAdded[product.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
