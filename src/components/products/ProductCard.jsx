import { formatMoney, getDiscountedPrice } from "../../data/products";
import { CartIcon } from "../icons/CartIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { StarIcon } from "../icons/StarIcon";
import { Button } from "../ui/button";

export function ProductCard({ product, onAddToCart, cartAdded }) {
  const isFirstProduct = product.id === 1;
  const discountedPrice = getDiscountedPrice(product);
  const hasDiscount = Boolean(product.discount);

  return (
    <div className="bg-surface-900 group relative flex min-w-[320px] flex-1 snap-start cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-800 p-6 shadow-2xl transition-all duration-500 hover:border-gray-600 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] md:min-w-95">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative mb-8 flex h-85 items-center justify-center overflow-hidden rounded-xl border border-gray-800/50 bg-linear-to-b from-surface-700 to-surface-600">
        <Button
          type="button"
          variant="productCart"
          size="fab"
          className="absolute top-4 right-4 z-20"
          onClick={() => onAddToCart(product.id)}
        >
          <CartIcon />
        </Button>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-8"
        />

        <div className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
      </div>

      <div className="relative z-10 flex grow flex-col">
        <div className="mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
          {product.category}
        </div>
        <h3 className="mb-2 text-2xl font-black tracking-wide text-white uppercase transition-colors group-hover:text-cyan-400">
          {product.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-gray-400">
          {product.description}
        </p>

        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono bg-surface-700 flex items-center gap-1.5 rounded border border-gray-800 px-3 py-1 text-sm font-bold text-yellow-500">
            <StarIcon />
            {product.stars.toFixed(1)}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-gray-800 pt-6">
          <div className="flex flex-col">
            {hasDiscount ? (
              <span className="mb-1 text-xs text-gray-500 line-through">
                {formatMoney(product.price)}
              </span>
            ) : null}
            <div className="text-3xl font-black text-white">
              {formatMoney(discountedPrice)}
            </div>
          </div>
          <Button
            type="button"
            variant={isFirstProduct ? "productPlusLight" : "productPlusDark"}
            size="fab"
            className={cartAdded ? "scale-90" : undefined}
            onClick={() => onAddToCart(product.id)}
          >
            <PlusIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
