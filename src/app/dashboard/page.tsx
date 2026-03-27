export default function DashboardHomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-zinc-600">
          Database features are disabled for this deployment.
        </p>
      </header>

      <section className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
        <div className="px-4 py-4 text-zinc-500">
          The dashboard data table is temporarily unavailable while DB
          integration is turned off.
        </div>
      </section>
    </main>
  )
}
