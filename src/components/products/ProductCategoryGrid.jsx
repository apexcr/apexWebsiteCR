import { Badge } from "@/components/ui/badge";
import { ShopifyProductCard } from "./ShopifyProductCard";

export function ProductCategoryGrid({
  category,
  products,
  onAddToCart,
  cartAdded,
}) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <Badge variant="sectionLabel">{category}</Badge>
        <span className="font-mono text-xs tracking-[0.15em] text-gray-500 uppercase">
          {products.length} productos
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ShopifyProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            cartAdded={cartAdded[product.id]}
          />
        ))}
      </div>
    </section>
  );
}
