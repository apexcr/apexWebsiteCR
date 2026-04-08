import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatMoney, getDiscountedPrice } from "@/data/products";
import { ArrowLeftIcon } from "lucide-react";

export function ProductDetailContent({
  product,
  onAddToCart,
  onBackToProducts,
  cartAdded,
}) {
  const discountedPrice = getDiscountedPrice(product);
  const hasDiscount = Boolean(product.discount);

  return (
    <div>
      <div className="mb-8">
        <Button
          type="button"
          variant="ghost"
          size="lg"
          className="justify-start cursor-pointer"
          onClick={onBackToProducts}
        >
          <ArrowLeftIcon />
          Todos los Productos
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <section className="bg-surface-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <div className="bg-surface-700 relative overflow-hidden rounded-xl border border-gray-800">
            <img
              src={product.image}
              alt={product.title}
              className="h-auto w-full object-contain p-8 sm:p-10"
            />
          </div>
        </section>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="bg-surface-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
            <div className="mb-2 flex flex-wrap gap-2">
              <Badge variant="default">{product.category}</Badge>
              {product.isTopSeller ? (
                <Badge variant="sectionLabel">Top Seller</Badge>
              ) : null}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white uppercase mb-4">
              {product.title}
            </h1>
            <p className="text-base leading-relaxed text-gray-300 mb-10">
              {product.description}
            </p>

            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-gray-800 bg-black/30 p-3">
                <dt className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  Categoria
                </dt>
                <dd className="mt-1 font-mono font-bold text-white">
                  {product.category}
                </dd>
              </div>
              <div className="rounded-lg border border-gray-800 bg-black/30 p-3">
                <dt className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  Presentacion
                </dt>
                <dd className="mt-1 font-mono font-bold text-white">
                  {product.presentation}
                </dd>
              </div>
              <div className="rounded-lg border border-gray-800 bg-black/30 p-3">
                <dt className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  Volumen
                </dt>
                <dd className="mt-1 font-mono font-bold text-white">
                  {product.volume}
                </dd>
              </div>
              <div className="rounded-lg border border-gray-800 bg-black/30 p-3">
                <dt className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  Calificacion
                </dt>
                <dd className="mt-1 font-mono font-bold text-white">
                  {product.stars.toFixed(1)} / 5
                </dd>
              </div>
            </dl>

            <div className="mt-6 rounded-xl border border-gray-800 bg-black/30 p-4">
              <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                Precio
              </p>
              {hasDiscount ? (
                <p className="font-mono mt-2 text-sm text-gray-500 line-through">
                  {formatMoney(product.price)}
                </p>
              ) : null}
              <div className="mt-1 flex items-center gap-3">
                <p className="font-mono text-3xl font-black text-white">
                  {formatMoney(discountedPrice)}
                </p>
                {hasDiscount ? (
                  <Badge variant="sectionLabel">-{product.discount}%</Badge>
                ) : null}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                variant="heroPrimary"
                size="heroPrimary"
                className={
                  cartAdded
                    ? "w-full justify-center scale-95"
                    : "w-full justify-center"
                }
                onClick={() => onAddToCart(product.id)}
              >
                Agregar al carrito
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
