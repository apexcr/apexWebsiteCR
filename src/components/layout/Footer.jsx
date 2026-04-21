import { Mail, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid md:grid-cols-3 gap-12">

        {/* LOGO + DESCRIPCIÓN */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/images/products/apex-peptides-icon-white.svg"
              alt="Apex Logo"
              className="h-10 object-contain"
            />
            <span className="text-white font-bold tracking-widest text-sm uppercase">
              APEX CR OFICIAL
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Proporcionando péptidos de investigación de la más alta pureza para
            la comunidad de culturismo y ciencias del deporte.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">
            Enlaces rápidos
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-[#379AFF] transition">
              <Link to="/">Inicio</Link>
            </li>
            <li className="hover:text-[#379AFF] transition">
              <Link to="/products">Comprar Productos</Link>
            </li>
            <li className="hover:text-[#379AFF] transition">
              <Link to="/calculator">Calculadora de Péptidos</Link>
            </li>
            <li className="hover:text-[#379AFF] transition">
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* CONTACTO RÁPIDO */}
        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">
            Contacto
          </h3>
          <div className="space-y-4 text-sm text-gray-400">
            <a
              href="mailto:apex.peptides.cr@gmail.com"
              className="flex items-center gap-3 hover:text-[#379AFF] transition"
            >
              <Mail className="h-4 w-4 text-cyan-400" />
              <span>apex.peptides.cr@gmail.com</span>
            </a>
            <a
              href="https://wa.me/50660624449"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[#379AFF] transition"
            >
              <MessageCircle className="h-4 w-4 text-green-400" />
              <span>+506 6062 4449</span>
            </a>
            <a
              href="https://www.instagram.com/apex.peptides.cr/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-pink-400 transition"
            >
              <svg className="h-4 w-4 text-pink-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.243 2.43.415.59.232 1.01.51 1.456.957.446.446.725.866.957 1.456.172.46.359 1.26.415 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.243 1.97-.415 2.43-.232.59-.51 1.01-.957 1.456-.446.446-.866.725-1.456.957-.46.172-1.26.359-2.43.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.243-2.43-.415-.59-.232-1.01-.51-1.456-.957-.446-.446-.725-.866-.957-1.456-.172-.46-.359-1.26-.415-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.243-1.97.415-2.43.232-.59.51-1.01.957-1.456.446-.446.866-.725 1.456-.957.46-.172 1.26-.359 2.43-.415C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.147 0-3.52.012-4.757.069-.967.046-1.493.208-1.84.345-.464.187-.796.41-1.146.76-.35.35-.573.682-.76 1.146-.137.347-.299.873-.345 1.84-.057 1.237-.069 1.61-.069 4.757s.012 3.52.069 4.757c.046.967.208 1.493.345 1.84.187.464.41.796.76 1.146.35.35.682.573 1.146.76.347.137.873.299 1.84.345 1.237.057 1.61.069 4.757.069s3.52-.012 4.757-.069c.967-.046 1.493-.208 1.84-.345.464-.187.796-.41 1.146-.76.35-.35.573-.682.76-1.146.137-.347.299-.873.345-1.84.057-1.237.069-1.61.069-4.757s-.012-3.52-.069-4.757c-.046-.967-.208-1.493-.345-1.84-.187-.464-.41-.796-.76-1.146-.35-.35-.682-.573-1.146-.76-.347-.137-.873-.299-1.84-.345-1.237-.057-1.61-.069-4.757-.069z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@apexcostarica"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.715 2.002a6.98 6.98 0 00-1.6.188c-.21.052-.418.11-.618.176v5.59c.46.118.91.297 1.322.535.311.186.594.404.847.648.27.26.502.556.689.88.14.25.248.515.321.79h1.916c-.108-.59-.331-1.165-.663-1.692a6.884 6.884 0 00-2.714-2.35V2.002z" />
                <path d="M15.173 8.148c-.393-.21-.82-.356-1.268-.424v2.317c.29.065.576.169.85.311a3.743 3.743 0 011.268 1.024c.261.34.467.72.61 1.129.174.517.25 1.056.222 1.592a4.007 4.007 0 01-1.656 3.147 4.017 4.017 0 01-3.712.334 4.008 4.008 0 01-2.182-2.863c-.115-.653-.052-1.318.18-1.918.231-.6.62-1.126 1.138-1.523a4.005 4.005 0 012.874-.857v-1.42c-1.195-.064-2.357.297-3.22 1.004a5.007 5.007 0 00-1.294 1.494c-.338.575-.51 1.217-.51 1.867 0 .392.046.782.138 1.158a7.012 7.012 0 001.582 2.962 6.987 6.987 0 004.556 2.92 6.978 6.978 0 005.186-1.007 6.998 6.998 0 002.74-5.61v-1.848c-.147.067-.302.123-.46.167a5.007 5.007 0 01-1.739.182v3.168a2.007 2.007 0 01-2.268-1.96c0-.256.042-.51.125-.752a3.022 3.022 0 00-1.102-1.45 2.99 2.99 0 00-1.603-.547v-.011c-.093-.003-.186-.005-.279-.005h-.01z" />
              </svg>
              <span>TikTok</span>
            </a>
            <Link
              to="/contact"
              className="inline-block text-sm text-cyan-400 hover:text-cyan-300 transition"
            >
              Ver página de contacto
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-900 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Apex CR Oficial. Todos los derechos reservados.
      </div>
    </footer>
  );
}