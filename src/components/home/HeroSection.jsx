import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import {
  formatMoney,
  getDiscountedPrice,
  getHeroProduct,
} from "@/data/products";
import { useNavigate } from "@tanstack/react-router";

export function HeroSection() {
  const heroProduct = getHeroProduct();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();

  if (!heroProduct) {
    return null;
  }

  const heroPrice = getDiscountedPrice(heroProduct);

  const handleBuyNow = () => {
    addToCart(heroProduct);
    setIsCartOpen(true);
  };

  return (
    <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden border-b border-gray-800 bg-black px-6 py-12 lg:px-16">
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="z-20 flex flex-col items-start space-y-5 lg:col-span-6">
          <Badge variant="hero">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            NUEVO {heroProduct.title}
          </Badge>

          <h1 className="text-5xl font-black leading-[0.85] text-white uppercase sm:text-6xl lg:text-[6rem] xl:text-[7rem]">
            <span className="block">DESBLOQUEA</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,212,255,0.5)]">
              EL PODER
            </span>
          </h1>

          <p className="max-w-md text-lg font-medium tracking-wide text-gray-400 sm:text-xl">
            <span className="font-black text-cyan-400">
              {heroProduct.title}
            </span>{" "}
            {heroProduct.description}
          </p>

          <p className="font-mono text-sm font-bold tracking-[0.18em] text-gray-300 uppercase">
            {heroProduct.discount ? (
              <>
                {formatMoney(heroPrice)} · {heroProduct.discount}% OFF
              </>
            ) : (
              formatMoney(heroProduct.price)
            )}
          </p>

          <div className="flex gap-4 pt-2">
            <Button
              type="button"
              variant="heroPrimary"
              size="heroPrimary"
              className="duration-300"
              onClick={handleBuyNow}
            >
              COMPRAR AHORA
            </Button>
            <Button
              type="button"
              variant="heroSecondary"
              size="heroSecondary"
              className="duration-300"
              onClick={() => navigate({ to: "/products" })}
            >
              VER Catálogo
            </Button>
          </div>
        </div>

        <div className="relative z-10 mt-8 flex items-center justify-center lg:col-span-6 lg:mt-0">
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[80px]" />
          <div className="group relative">
            <img
              src={heroProduct.image}
              alt={heroProduct.title}
              className="h-auto w-[320px] object-contain transition-transform duration-500 group-hover:scale-105 [filter:drop-shadow(0_20px_40px_rgba(0,0,0,0.8))_drop-shadow(0_0_30px_rgba(0,212,255,0.2))]"
            />
            <div className="absolute -bottom-4 left-1/2 h-[30px] w-[200px] -translate-x-1/2 rounded-[100%] bg-black/40 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
