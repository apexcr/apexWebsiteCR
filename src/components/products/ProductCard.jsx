import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatMoney, getDiscountedPrice } from "@/data/products";

export function ProductCard({ product, onAddToCart, cartAdded }) {
  const discountedPrice = getDiscountedPrice(product);
  const hasDiscount = Boolean(product.discount);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-surface-900 transition-all duration-500 hover:-translate-y-1 hover:border-[#379AFF]/70 hover:shadow-[0_0_40px_rgba(55,154,255,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-brand-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative aspect-square overflow-hidden border-b border-gray-800/50 bg-linear-to-b from-surface-700 to-surface-600">
        {product.isTopSeller ? (
          <Badge
            variant="sectionLabel"
            className="absolute top-3 left-3 z-20 border-[#379AFF]/40 bg-[#379AFF]/10 text-[#379AFF]"
          >
            TOP SELLER
          </Badge>
        ) : null}

        <img
          src={product.image}
          alt={product.title}
          className="relative z-10 h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#379AFF] opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs font-bold tracking-[0.18em] text-gray-500 uppercase">
          {product.category}
        </p>

        <h3 className="text-lg font-black tracking-wide text-white uppercase transition-colors duration-300 group-hover:text-[#379AFF]">
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
            <span className="font-mono text-xs font-bold tracking-wide text-[#379AFF] uppercase">
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
            className={`relative z-20 ${cartAdded ? "scale-95 px-4" : "px-4"}`}
            onClick={() => onAddToCart(product.id)}
          >
            Agregar
          </Button>
        </div>
      </div>
    </article>
  );
}