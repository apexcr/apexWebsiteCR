import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";
import { CartIcon } from "../icons/CartIcon";

export function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="bg-app-bg/90 sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-900/80 px-6 py-6 backdrop-blur-md lg:px-16">
      <h1 className="text-md uppercase">Apex Costa Rica</h1>
      <nav className="hidden items-center md:flex">
        <ul className="flex space-x-10 text-[13px] tracking-[0.15em] text-gray-400">
          <li>
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="transition-colors"
              activeProps={{ className: "text-brand-primary" }}
              inactiveProps={{ className: "text-gray-400 hover:text-white" }}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="transition-colors"
              activeProps={{ className: "text-brand-primary" }}
              inactiveProps={{ className: "text-gray-400 hover:text-cyan-400" }}
            >
              Productos
            </Link>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-gray-400 transition-colors hover:text-cyan-400"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="mobileIcon"
          size="icon-lg"
          className="relative transition-colors"
          onClick={() => setIsCartOpen(true)}
        >
          <CartIcon />
          {cartCount > 0 ? (
            <span className="bg-brand-primary absolute -top-1 -right-1 min-w-5 rounded-full px-1.5 py-0.5 text-center text-[10px] leading-none font-bold text-black">
              {cartCount}
            </span>
          ) : null}
        </Button>

        <Button
          type="button"
          variant="mobileIcon"
          size="icon-lg"
          className="transition-colors md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
}
