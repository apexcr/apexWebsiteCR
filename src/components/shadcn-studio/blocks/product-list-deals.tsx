import { HeartIcon } from 'lucide-react'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { cn } from '@/lib/utils'
import type { ProductItem } from './product-list'

const ProductListDeals = ({
  products,
  title = 'Promociones del día',
  countdown = '1D : 12H : 15M : 04S',
  viewAllHref = '#',
  className,
}: {
  products: ProductItem[]
  title?: string
  countdown?: string
  viewAllHref?: string
  className?: string
}) => {
  return (
    <section className={cn('bg-black py-10 sm:py-14 lg:py-20', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <Badge className="rounded-md border-none bg-rose-500 px-4 py-1.5 text-base text-white hover:bg-rose-500">
              {countdown}
            </Badge>
          </div>

          <a
            href={viewAllHref}
            className="text-base font-semibold text-zinc-200 underline underline-offset-4 hover:text-white"
          >
            Ver todas las promociones
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => {
            // const total = product.sold + product.available
            // const soldPercent = total > 0 ? (product.sold / total) * 100 : 0
            console.log(product)

            return (
              <article key={product.handle} className="space-y-4">
                <Card className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-none">
                  <CardContent className="p-0">
                    <div className="relative flex aspect-4/5 items-end justify-center rounded-xl px-6 pt-4 bg-zinc-700">
                      <Badge className="absolute left-4 top-4 rounded-md border-none bg-rose-500 px-2.5 py-1 text-sm text-white hover:bg-rose-500">
                        -20%
                      </Badge>

                      <Button
                        type="button"
                        variant="secondary"
                        size="icon"
                        className="absolute right-4 top-4 size-8 rounded-full bg-black/75 text-white hover:bg-black"
                        aria-label={`Add ${product.title} to wishlist`}
                      >
                        <HeartIcon className="size-4" />
                      </Button>

                      <Image
                        src={product.image}
                        alt={product.imgAlt}
                        fill
                        unoptimized
                        sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 90vw"
                        className="object-contain object-bottom"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* <div className="space-y-2">
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-700">
                    <div
                      className="h-full rounded-full bg-zinc-100 transition-[width] duration-300"
                      style={{ width: `${soldPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm font-medium uppercase tracking-wide text-zinc-300">
                    <span>SOLD : {product.sold}</span>
                    <span>AVAILABLE : {product.available}</span>
                  </div>
                </div> */}

                <div className="space-y-1.5">
                  <h3 className="text-xl font-medium text-white">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-semibold text-white">
                      ${product.salePrice}
                    </span>
                    <span className="text-xl font-semibold text-zinc-500 line-through">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductListDeals
