import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90">
      <Button
        type="button"
        variant="mobileIcon"
        size="icon-lg"
        className="absolute top-6 right-6"
        onClick={onClose}
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
      <ul className="flex flex-col items-center space-y-8 text-2xl font-bold uppercase tracking-widest text-gray-300">
        <li>
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="transition-colors"
            activeProps={{ className: "text-brand-primary" }}
            inactiveProps={{ className: "text-gray-300 hover:text-cyan-400" }}
            onClick={onClose}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="transition-colors"
            activeProps={{ className: "text-brand-primary" }}
            inactiveProps={{ className: "text-gray-300 hover:text-cyan-400" }}
            onClick={onClose}
          >
            Productos
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="text-gray-300 transition-colors hover:text-cyan-400"
            onClick={() => {
              window.location.hash = "contacto";
              onClose();
            }}
          >
            Contacto
          </button>
        </li>
      </ul>
    </div>
  );
}
