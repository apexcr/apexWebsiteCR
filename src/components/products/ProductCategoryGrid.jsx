import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./ProductCard";

export function ProductCategoryGrid({
  category,
  products,
  onAddToCart,
  cartAdded,
}) {
  return (
    <section className="space-y-6">
      <div className="">
        <Badge variant="sectionLabel" className="mb-2">
          {products.length} producto{products.length > 1 ? "s" : ""}
        </Badge>
        <h3 className="text-4xl text-white font-sans!">{category}</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
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
