export function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90">
      <button
        type="button"
        className="absolute top-6 right-6 text-white hover:text-cyan-400"
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
      </button>
      <ul className="flex flex-col items-center space-y-8 text-2xl font-bold uppercase tracking-widest text-gray-300">
        <li>
          <a
            href="/"
            className="transition-colors hover:text-cyan-400"
            onClick={onClose}
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="/"
            className="transition-colors hover:text-cyan-400"
            onClick={onClose}
          >
            Productos
          </a>
        </li>
        <li>
          <a
            href="/"
            className="transition-colors hover:text-cyan-400"
            onClick={onClose}
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}
