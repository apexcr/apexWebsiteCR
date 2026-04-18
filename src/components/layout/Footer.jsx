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
            <li className="hover:text-[#379AFF] transition">Inicio</li>
            <li className="hover:text-[#379AFF] transition">Comprar Productos</li>
            <li className="hover:text-[#379AFF] transition">Calculadora de Péptidos</li>
            <li className="hover:text-[#379AFF] transition">Resultados de Laboratorio</li>
          </ul>
        </div>

        {/* SOPORTE */}
        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">
            Soporte
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-[#379AFF] transition">Preguntas Frecuentes</li>
            <li className="hover:text-[#379AFF] transition">Envío y Devoluciones</li>
            <li className="hover:text-[#379AFF] transition">Términos de Servicio</li>
            <li className="hover:text-[#379AFF] transition">Privacidad</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-900 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Apex CR Oficial. Todos los derechos reservados.
      </div>
    </footer>
  );
}