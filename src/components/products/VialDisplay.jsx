export function VialDisplay({ capClass, borderTopClass, name, dose }) {
  return (
    <div className="relative z-10 flex h-[250px] w-[130px] flex-col items-center transition-transform duration-700 ease-out group-hover:scale-110">
      <div
        className={`relative z-30 flex h-[20px] w-[50px] flex-col justify-start rounded-t-md border-t border-white/30 shadow-inner ${capClass}`}
      >
        <div className="h-1 w-full bg-white/30" />
      </div>
      <div className="z-20 flex h-[12px] w-[58px] flex-col justify-center border-y border-gray-600 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 shadow-sm">
        <div className="h-[1px] w-full bg-white/50" />
      </div>
      <div className="z-10 h-[16px] w-[42px] border-x border-white/20 bg-white/10 backdrop-blur-sm" />
      <div className="relative z-0 flex h-[200px] w-[100px] flex-col items-center justify-center overflow-hidden rounded-lg rounded-t-2xl border border-white/10 bg-gradient-to-br from-surface-500 to-surface-600 shadow-xl">
        <div className="absolute top-2 bottom-2 left-1 w-1.5 rounded-full bg-white/10 blur-[1px]" />
        <div
          className={`z-10 flex h-[130px] w-[88px] flex-col items-center justify-center rounded-sm bg-vial-label p-2 text-center text-black shadow-inner ${borderTopClass}`}
        >
          <div className="font-oswald text-sm font-black tracking-tighter">
            APEX<span className="text-brand-primary">X</span>
          </div>
          <div className="my-1 h-[1px] w-full bg-black/80" />
          <div
            className={`font-oswald mt-1 leading-none font-bold tracking-tight ${name.length > 6 ? "mt-2 text-xl" : "text-3xl"}`}
          >
            {name}
          </div>
          <div className="font-mono mt-2 rounded bg-gray-300 px-2 py-0.5 text-[9px] font-black">
            {dose}
          </div>
        </div>
        <div className="absolute bottom-2 h-[18px] w-[80px] rounded-[100%] bg-white/80 blur-[1.5px]" />
      </div>
    </div>
  );
}
