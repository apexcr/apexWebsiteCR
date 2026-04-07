export function VialDisplay({ capClass, borderTopClass, name, dose }) {
  return (
    <div className="relative z-10 flex h-62.5 w-32.5 flex-col items-center transition-transform duration-700 ease-out group-hover:scale-110">
      <div
        className={`relative z-30 flex h-5 w-12.5 flex-col justify-start rounded-t-md border-t border-white/30 shadow-inner ${capClass}`}
      >
        <div className="h-1 w-full bg-white/30" />
      </div>
      <div className="z-20 flex h-3 w-14.5 flex-col justify-center border-y border-gray-600 bg-linear-to-r from-gray-500 via-gray-300 to-gray-500 shadow-sm">
        <div className="h-px w-full bg-white/50" />
      </div>
      <div className="z-10 h-4 w-10.5 border-x border-white/20 bg-white/10 backdrop-blur-sm" />
      <div className="relative z-0 flex h-50 w-25 flex-col items-center justify-center overflow-hidden rounded-lg rounded-t-2xl border border-white/10 bg-linear-to-br from-surface-500 to-surface-600 shadow-xl">
        <div className="absolute top-2 bottom-2 left-1 w-1.5 rounded-full bg-white/10 blur-[1px]" />
        <div
          className={`z-10 flex h-32.5 w-22 flex-col items-center justify-center rounded-sm bg-vial-label p-2 text-center text-black shadow-inner ${borderTopClass}`}
        >
          <div className="text-sm font-black tracking-tighter">
            APEX<span className="text-brand-primary">X</span>
          </div>
          <div className="my-1 h-px w-full bg-black/80" />
          <div
            className={`mt-1 leading-none font-bold tracking-tight ${name.length > 6 ? "mt-2 text-xl" : "text-3xl"}`}
          >
            {name}
          </div>
          <div className="font-mono mt-2 rounded bg-gray-300 px-2 py-0.5 text-[9px] font-black">
            {dose}
          </div>
        </div>
        <div className="absolute bottom-2 h-4.5 w-20 rounded-[100%] bg-white/80 blur-[1.5px]" />
      </div>
    </div>
  );
}
