export function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="bg-app-bg/90 sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-900/80 px-6 py-6 backdrop-blur-md lg:px-16">
      <h1 className="text-md uppercase">Apex Costa Rica</h1>
      <nav className="hidden items-center md:flex">
        <ul className="flex space-x-10 text-[13px] tracking-[0.15em] text-gray-400">
          <li>
            <a
              href="/"
              className="text-brand-primary transition-colors hover:text-white"
            >
              Inicio
            </a>
          </li>
          <li>
            <a href="/" className="transition-colors hover:text-cyan-400">
              Productos
            </a>
          </li>
          <li>
            <a href="/" className="transition-colors hover:text-cyan-400">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="text-white transition-colors hover:text-cyan-400 md:hidden"
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
      </button>
    </header>
  );
}
