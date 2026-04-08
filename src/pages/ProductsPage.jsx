import { useMemo, useState } from "react";
import { ProductCategoryGrid } from "@/components/products/ProductCategoryGrid";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { groupProductsByCategory, products } from "@/data/products";

export default function ProductsPage() {
  const [cartAdded, setCartAdded] = useState({});
  const { addToCart, setIsCartOpen } = useCart();

  const productGroups = useMemo(
    () => Object.entries(groupProductsByCategory(products)),
    [],
  );

  const handleAddToCart = (productId) => {
    const product = products.find((item) => item.id === productId);

    if (!product) return;

    setCartAdded((prev) => ({ ...prev, [productId]: true }));
    addToCart(product);
    setIsCartOpen(true);

    setTimeout(() => {
      setCartAdded((prev) => ({ ...prev, [productId]: false }));
    }, 1800);
  };

  return (
    <div className="bg-app-bg min-h-screen px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-360 space-y-24">
        <header>
          <Badge className="mb-2">Peptidos y suplementos</Badge>
          <h1 className="text-4xl font-black tracking-tight text-white uppercase sm:text-5xl mb-8">
            Productos
          </h1>
          <p className="max-w-2xl text-sm text-gray-400 sm:text-xl">
            Seleccion premium de peptidos con enfoque en recuperacion,
            rendimiento y bienestar. Explora por categoria y agrega al carrito
            en un click.
          </p>
        </header>

        <div className="space-y-12">
          {productGroups.map(([category, groupedProducts]) => (
            <ProductCategoryGrid
              key={category}
              category={category}
              products={groupedProducts}
              onAddToCart={handleAddToCart}
              cartAdded={cartAdded}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
