import { useNavigate, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { ProductDetailContent } from "@/components/products/ProductDetailContent";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams({ strict: false });
  const product = getProductById(params.id);
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const [cartAdded, setCartAdded] = useState(false);

  const handleAddToCart = (productId) => {
    if (!product || product.id !== productId) return;

    setCartAdded(true);
    addToCart(product);
    setIsCartOpen(true);

    setTimeout(() => {
      setCartAdded(false);
    }, 1500);
  };

  if (!product) {
    return (
      <div className="bg-app-bg min-h-screen px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-surface-900 p-8 text-center">
          <h1 className="text-3xl font-black text-white uppercase">
            Product Not Found
          </h1>
          <p className="mt-3 text-gray-400">
            No product was found for this id.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-app-bg min-h-screen px-6 py-10 lg:px-16 lg:py-16">
      <div className="mx-auto w-full max-w-360">
        <ProductDetailContent
          product={product}
          onAddToCart={handleAddToCart}
          onBackToProducts={() => navigate({ to: "/products" })}
          cartAdded={cartAdded}
        />
      </div>
    </div>
  );
}
