import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { getTopSellerProducts, products } from "../../data/products";
import { Badge } from "../ui/badge";
import { HomeProductCard } from "./HomeProductCard";

export function ProductsSection() {
  const [cartAdded, setCartAdded] = useState({});
  const { addToCart, setIsCartOpen } = useCart();
  const productList = getTopSellerProducts();

  const handleAddToCart = (productId) => {
    const product = products.find((p) => p.id === productId);

    if (!product) return;

    setCartAdded((prev) => ({ ...prev, [productId]: true }));
    addToCart(product);
    setIsCartOpen(true);

    setTimeout(() => {
      setCartAdded((prev) => ({ ...prev, [productId]: false }));
    }, 2000);
  };

  return (
    <section className="relative bg-section-bg px-6 py-24 lg:px-16">
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-gray-800 to-transparent" />

      <div className="mx-auto w-full max-w-350">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Badge variant="sectionLabel">Más Vendidos</Badge>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
              Tendencias En Péptidos
            </h2>
          </div>
        </div>

        <div className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto pb-10">
          {productList.map((product) => (
            <HomeProductCard
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
