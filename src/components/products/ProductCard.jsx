import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatMoney, getDiscountedPrice } from "@/data/products";

export function ProductCard({ product, onAddToCart, cartAdded }) {
  const discountedPrice = getDiscountedPrice(product);
  const hasDiscount = Boolean(product.discount);

  return (
    <article className="group bg-surface-900 flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 transition-all duration-300 hover:border-gray-700 hover:shadow-[0_12px_24px_rgba(0,0,0,0.25)]">
      <div className="bg-surface-700 relative aspect-square overflow-hidden border-b border-gray-800">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-103"
        />
        {product.isTopSeller ? (
          <Badge
            variant="sectionLabel"
            className="absolute top-3 left-3 border-cyan-400/40 bg-cyan-500/10 text-cyan-300"
          >
            TOP SELLER
          </Badge>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-bold tracking-[0.18em] text-gray-500 uppercase">
          {product.category}
        </p>

        <h3 className="text-lg font-black tracking-wide text-white uppercase">
          {product.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">
          {product.description}
        </p>

        <div className="mt-1 flex items-center justify-between">
          <span className="font-mono text-sm font-bold text-yellow-500">
            {product.stars.toFixed(1)} ★
          </span>
          {hasDiscount ? (
            <span className="font-mono text-xs font-bold tracking-wide text-cyan-400 uppercase">
              -{product.discount}%
            </span>
          ) : null}
        </div>

        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            {hasDiscount ? (
              <p className="font-mono text-xs text-gray-500 line-through">
                {formatMoney(product.price)}
              </p>
            ) : null}
            <p className="font-mono text-xl font-black text-white">
              {formatMoney(discountedPrice)}
            </p>
          </div>

          <Button
            type="button"
            variant="productPlusDark"
            className={cartAdded ? "scale-95 px-4" : "px-4"}
            onClick={() => onAddToCart(product.id)}
          >
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
