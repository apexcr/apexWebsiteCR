import { Badge } from "@/components/ui/badge";
import { ProductCalculator } from "@/components/calculator/ProductCalculator";

export default function ProductCalculatorPage() {
  return (
    <div className="bg-app-bg min-h-screen px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-360 space-y-10">
        <header className="space-y-4">
          <Badge variant="sectionLabel">Herramienta operativa</Badge>
          <div>
            <h1 className="text-4xl font-black tracking-tight text-white uppercase sm:text-5xl">
              Calculadora de Dosificación de Péptidos
            </h1>
            <p className="max-w-2xl text-sm text-gray-400 sm:text-xl">
              Calcula exactamente cuánto líquido necesitas extraer en una jeringa de 1 mL para obtener la dosis correcta en mcg.
            </p>
          </div>
        </header>

        <ProductCalculator />
      </div>
    </div>
  );
}
