export function AnnouncementBar() {
  return (
    <div className="w-full border-b border-[#379AFF]/30 bg-gradient-to-r from-black via-[#0a0f1a] to-black px-4 py-4 text-center text-sm md:text-base font-bold tracking-[0.28em] text-white uppercase shadow-[0_0_25px_rgba(55,154,255,0.15)]">
      Código{" "}
      <span className="text-[#379AFF] drop-shadow-[0_0_10px_rgba(55,154,255,0.6)]">
        "APEX"
      </span>{" "}
      para un{" "}
      <span className="text-[#379AFF]">15% de descuento</span>{" "}
      al pagar
    </div>
  );
}