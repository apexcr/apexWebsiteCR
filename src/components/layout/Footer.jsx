function FooterLink({ children }) {
  return (
    <li>
      <a
        href="/"
        className="group flex items-center gap-3 transition-colors hover:text-cyan-400"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gray-700 transition-colors group-hover:bg-cyan-400" />
        {children}
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-app-black mt-auto border-t border-gray-900 px-6 pt-28 pb-12 lg:px-16">
      <div className="mx-auto mb-20 grid w-full max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-8 lg:col-span-4">
          <div className="flex items-center text-3xl font-black tracking-[0.1em] text-white uppercase italic">
            APEX <span className="text-brand-primary mx-1">X</span> PEPTIDOS
          </div>
          <p className="max-w-sm text-sm leading-loose font-medium text-gray-400">
            Proporcionando peptidos de investigacion de la mas alta pureza para
            la comunidad de culturismo y ciencias del deporte.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="mb-8 text-xl font-black tracking-[0.15em] text-white uppercase">
            Enlaces Rapidos
          </h4>
          <ul className="space-y-5 text-sm font-medium text-gray-400">
            <FooterLink>Inicio</FooterLink>
            <FooterLink>Comprar Productos</FooterLink>
            <FooterLink>Calculadora de Peptidos</FooterLink>
            <FooterLink>Resultados de Laboratorio</FooterLink>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-8 text-xl font-black tracking-[0.15em] text-white uppercase">
            Soporte
          </h4>
          <ul className="space-y-5 text-sm font-medium text-gray-400">
            <FooterLink>Preguntas Frecuentes</FooterLink>
            <FooterLink>Envio y Devoluciones</FooterLink>
            <FooterLink>Terminos de Servicio</FooterLink>
            <FooterLink>Privacidad</FooterLink>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center border-t border-gray-900 pt-10">
        <div className="bg-surface-800 mb-8 max-w-4xl rounded-xl border border-red-900/30 p-6">
          <p className="text-center text-xs leading-relaxed font-bold tracking-[0.1em] text-gray-400 uppercase">
            <span className="mr-2 text-red-500">AVISO IMPORTANTE:</span> TODOS
            LOS PRODUCTOS SON EXCLUSIVAMENTE PARA FINES DE INVESTIGACION DE
            LABORATORIO.
          </p>
        </div>
        <div className="text-center text-[11px] font-bold tracking-wider text-gray-600 uppercase">
          © 2024 Apex Peptidos. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
