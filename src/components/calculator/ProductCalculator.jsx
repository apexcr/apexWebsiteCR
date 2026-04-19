import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function formatNumber(value, digits = 4) {
  if (!Number.isFinite(value)) return "-";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0,
  }).format(value);
}

function parsePositiveNumber(value, label) {
  const input = value?.toString().trim();
  if (input === "") {
    return { error: `${label} es requerido.` };
  }

  const number = Number(input.replace(",", "."));
  if (Number.isNaN(number)) {
    return { error: `${label} no es un número válido.` };
  }

  if (number < 0) {
    return { error: `${label} no puede ser negativo.` };
  }

  return { value: number };
}

export function ProductCalculator() {
  const [formValues, setFormValues] = useState({
    peptideMg: "1",
    waterMl: "2",
    desiredDose: "250",
    desiredUnit: "mcg",
  });

  const setValue = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const peptideMg = parsePositiveNumber(formValues.peptideMg, "Cantidad de péptido (mg)");
  const waterMl = parsePositiveNumber(formValues.waterMl, "Volumen de agua bacteriostática (mL)");
  const desiredDoseFilled = formValues.desiredDose?.toString().trim() !== "";
  const desiredDoseParsed = desiredDoseFilled
    ? parsePositiveNumber(formValues.desiredDose, `Dosis deseada (${formValues.desiredUnit})`)
    : { value: null, error: null };
  const desiredMcgValue = desiredDoseParsed.value !== null
    ? (formValues.desiredUnit === 'mg' ? desiredDoseParsed.value * 1000 : desiredDoseParsed.value)
    : null;

  const solutionResult = useMemo(() => {
    if (peptideMg.error) return { error: peptideMg.error };
    if (waterMl.error) return { error: waterMl.error };
    if (waterMl.value === 0) return { error: "El volumen no puede ser cero." };

    const totalMcg = peptideMg.value * 1000;
    const concentration = totalMcg / waterMl.value;
    if (concentration === 0) return { error: "La concentración no puede ser cero." };

    const requiredMl = desiredMcgValue !== null ? desiredMcgValue / concentration : null;
    const syringeUnits = requiredMl !== null ? requiredMl * 100 : null;

    return {
      totalMcg,
      concentration,
      requiredMl,
      syringeUnits,
      error: desiredDoseParsed.error || null,
    };
  }, [peptideMg.error, peptideMg.value, waterMl.error, waterMl.value, desiredDoseParsed.error, desiredMcgValue]);

  const handleReset = () => {
    setFormValues({ peptideMg: "", waterMl: "", desiredDose: "", desiredUnit: "mcg" });
  };

  return (
    <div className="rounded-[2rem] border border-gray-800 bg-[#05060d]/80 p-6 shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mb-8 flex flex-col gap-4 rounded-[1.75rem] border border-gray-800 bg-white/5 p-6">
        <div className="flex items-center gap-3">
          <Badge variant="hero">Calculadora</Badge>
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Peptide Dosage Calculator
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            Mide agua, concentración y unidades de jeringa.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Ingresa los mg de péptido, el volumen de agua y la dosis deseada en mcg. La calculadora mostrará la concentración en mcg/mL y cuánto debes extraer en una jeringa de 1 mL.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6 rounded-[1.75rem] border border-gray-800 bg-white/5 p-6 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-gray-300" htmlFor="peptideMg">
                Cantidad de péptido (mg)
              </label>
              <input
                id="peptideMg"
                type="text"
                inputMode="decimal"
                value={formValues.peptideMg}
                onChange={(event) => setValue("peptideMg", event.target.value)}
                className="mt-2 w-full rounded-3xl border border-gray-800 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                placeholder="Ej. 1"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-300" htmlFor="waterMl">
                Volumen de agua bacteriostática (mL)
              </label>
              <input
                id="waterMl"
                type="text"
                inputMode="decimal"
                value={formValues.waterMl}
                onChange={(event) => setValue("waterMl", event.target.value)}
                className="mt-2 w-full rounded-3xl border border-gray-800 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                placeholder="Ej. 2"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-300" htmlFor="desiredDose">
              Dosis deseada ({formValues.desiredUnit})
            </label>
            <input
              id="desiredDose"
              type="text"
              inputMode="decimal"
              value={formValues.desiredDose}
              onChange={(event) => setValue("desiredDose", event.target.value)}
              className="mt-2 w-full rounded-3xl border border-gray-800 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              placeholder={formValues.desiredUnit === 'mcg' ? "Ej. 250" : "Ej. 0.25"}
            />
            <select
              value={formValues.desiredUnit}
              onChange={(event) => setValue("desiredUnit", event.target.value)}
              className="mt-2 w-full rounded-3xl border border-gray-800 bg-black/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            >
              <option value="mcg">mcg</option>
              <option value="mg">mg</option>
            </select>
          </div>

          <div className="rounded-[1.5rem] border border-gray-800 bg-black/60 p-5 text-sm text-gray-300">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">Cómo usar</p>
            <ol className="mt-4 space-y-3 list-decimal pl-5 text-gray-300">
              <li>Ingresa el total de péptido en vial en mg.</li>
              <li>Ingresa el volumen de agua en mL.</li>
              <li>Ingresa tu dosis deseada en mcg o mg, seleccionando la unidad.</li>
              <li>La calculadora te dará las unidades en UI y unidades de jeringa.</li>
            </ol>
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-gray-800 bg-black/60 p-6 text-gray-200 shadow-inner shadow-cyan-500/5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Resultado</p>
              <h3 className="mt-2 text-xl font-black text-white">Dosificación</h3>
            </div>
            <Button type="button" variant="heroSecondary" size="sm" onClick={handleReset}>
              Reiniciar
            </Button>
          </div>

          {peptideMg.error || waterMl.error ? (
            <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
              {peptideMg.error || waterMl.error}
            </div>
          ) : solutionResult.error ? (
            <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
              {solutionResult.error}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Unidades Internacionales (UI)</p>
                <p className="mt-3 text-2xl font-black text-white">
                  {solutionResult.syringeUnits !== null ? formatNumber(solutionResult.syringeUnits, 2) : "-"} UI
                </p>
                <p className="mt-2 text-sm text-gray-300">
                  {solutionResult.syringeUnits !== null
                    ? `Para ${formatNumber(desiredDoseParsed.value, 0)} ${formValues.desiredUnit} necesitas ${formatNumber(solutionResult.syringeUnits, 2)} UI de solución.`
                    : "Ingresa la dosis deseada en mcg o mg para ver las unidades requeridas."}
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 p-4">
                <div className="text-sm uppercase tracking-[0.25em] text-gray-400">Medidor visual</div>
                <div className="mt-3 rounded-full bg-gray-800 h-4 overflow-hidden">
                  <div
                    className="h-4 bg-cyan-400 transition-all"
                    style={{ width: `${Math.min(100, Math.max(0, solutionResult.syringeUnits || 0))}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-300">
                  {solutionResult.syringeUnits !== null
                    ? solutionResult.syringeUnits <= 100
                      ? `${formatNumber(solutionResult.syringeUnits, 2)} de 100 UI en jeringa de 1 mL.`
                      : `${formatNumber(solutionResult.syringeUnits, 2)} UI (más de 1 mL).`
                    : "Ingresa la dosis deseada para ver el medidor visual."}
                </p>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
