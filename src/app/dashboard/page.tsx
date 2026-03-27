import { desc } from 'drizzle-orm'

import { db } from '@/db'
import { productsTable } from '@/db/schema'

export default async function DashboardHomePage() {
  const products = await db
    .select({
      id: productsTable.id,
      sku: productsTable.sku,
      title: productsTable.title,
      status: productsTable.status,
      updatedAt: productsTable.updatedAt,
    })
    .from(productsTable)
    .orderBy(desc(productsTable.updatedAt))
    .limit(10)

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-zinc-600">
          Connected to SQLite with Drizzle. Showing {products.length} latest
          rows.
        </p>
      </header>

      <section className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 text-zinc-700">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td className="px-4 py-4 text-zinc-500" colSpan={5}>
                  No products in the database yet.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr className="border-t border-zinc-100" key={product.id}>
                  <td className="px-4 py-3">{product.id}</td>
                  <td className="px-4 py-3">{product.sku}</td>
                  <td className="px-4 py-3">{product.title}</td>
                  <td className="px-4 py-3">{product.status}</td>
                  <td className="px-4 py-3">{product.updatedAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </main>
  )
}
