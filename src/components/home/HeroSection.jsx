export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden border-b border-gray-800 bg-black px-6 py-12 lg:px-16">
      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="z-20 flex flex-col items-start space-y-5 lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-transparent px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
              Nuevo • TB-500 Premium
            </span>
          </div>

          <h1 className="font-oswald text-5xl font-black leading-[0.85] tracking-tighter text-white uppercase sm:text-6xl lg:text-[6rem] xl:text-[7rem]">
            <span className="block">DESBLOQUEA</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,212,255,0.5)]">
              EL PODER
            </span>
          </h1>

          <p className="max-w-md text-lg font-medium tracking-wide text-gray-400 sm:text-xl">
            <span className="font-black text-cyan-400">PEPTIDOS DE ELITE</span>{" "}
            para atletas serios.
          </p>

          <div className="flex gap-4 pt-2">
            <button
              type="button"
              className="font-oswald group flex items-center gap-3 border border-cyan-400/50 bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 font-black text-lg tracking-[0.15em] text-white uppercase shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all duration-300 hover:from-cyan-400 hover:to-blue-500"
            >
              COMPRAR AHORA
            </button>
            <button
              type="button"
              className="font-oswald border-2 border-gray-700 bg-transparent px-8 py-4 font-bold text-lg tracking-wider text-gray-400 uppercase transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400"
            >
              VER LAB
            </button>
          </div>
        </div>

        <div className="relative z-10 mt-8 flex items-center justify-center lg:col-span-6 lg:mt-0">
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[80px]" />
          <div className="group relative">
            <img
              src="https://asset.playground-ai.com/033ed312-6554-4200-8c78-f2faaf99b098.jpg"
              alt="TB-500 10mg Vial"
              className="h-auto w-[320px] object-contain transition-transform duration-500 group-hover:scale-105 [filter:drop-shadow(0_20px_40px_rgba(0,0,0,0.8))_drop-shadow(0_0_30px_rgba(0,212,255,0.2))]"
            />
            <div className="absolute -bottom-4 left-1/2 h-[30px] w-[200px] -translate-x-1/2 rounded-[100%] bg-black/40 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
