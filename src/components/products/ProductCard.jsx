import { CartIcon } from "../icons/CartIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { StarIcon } from "../icons/StarIcon";
import { VialDisplay } from "./VialDisplay";

export function ProductCard({ product, onAddToCart, cartAdded }) {
  const isFirstProduct = product.id === 1;

  return (
    <div className="bg-surface-900 group relative flex min-w-[320px] flex-1 snap-start cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-800 p-6 shadow-2xl transition-all duration-500 hover:border-gray-600 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)] md:min-w-[380px]">
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${product.overlayGlowClass}`}
      />

      <div className="relative mb-8 flex h-[340px] items-center justify-center overflow-hidden rounded-xl border border-gray-800/50 bg-gradient-to-b from-surface-700 to-surface-600">
        <button
          type="button"
          className="absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md"
          onClick={() => onAddToCart(product.id)}
        >
          <CartIcon />
        </button>

        <VialDisplay
          capClass={product.capClass}
          borderTopClass={product.borderTopClass}
          name={product.vialName}
          dose={product.vialDose}
        />

        <div
          className={`pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[40px] transition-opacity duration-500 group-hover:opacity-30 ${product.glowClass}`}
        />
      </div>

      <div className="relative z-10 flex flex-grow flex-col">
        <div className="mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase">
          {product.category}
        </div>
        <h3
          className={`font-oswald mb-3 text-2xl font-black tracking-wide text-white uppercase transition-colors ${product.hoverNameColor}`}
        >
          {product.name}
        </h3>

        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono bg-surface-700 flex items-center gap-1.5 rounded border border-gray-800 px-3 py-1 text-sm font-bold text-yellow-500">
            <StarIcon />
            {product.rating.toFixed(1)}
          </span>
          <span className="text-sm font-medium text-gray-400">
            ({product.reviews.toLocaleString()} Resenas)
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-gray-800 pt-6">
          <div className="flex flex-col">
            {product.originalPrice ? (
              <span className="mb-1 text-xs text-gray-500 line-through">
                {product.originalPrice}
              </span>
            ) : null}
            <div className="font-oswald text-3xl font-black text-white">
              {product.price}
            </div>
          </div>
          <button
            type="button"
            className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all ${isFirstProduct ? "bg-white text-black" : "bg-surface-700 border border-gray-700 text-white"} ${cartAdded ? "scale-90" : ""}`}
            onClick={() => onAddToCart(product.id)}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
