import { sql } from 'drizzle-orm'
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const productsTable = sqliteTable('products_table', {
  id: int().primaryKey({ autoIncrement: true }),
  sku: text().notNull().unique(),
  title: text().notNull(),
  handle: text().notNull().unique(),
  description: text().notNull(),
  descriptionHtml: text().notNull(),
  vendor: text().notNull(),
  productType: text().notNull(),
  status: text().notNull(),
  tags: text({ mode: 'json' }).$type<string[]>().notNull().default([]),
  totalInventory: int().notNull().default(0),
  createdAt: text().notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text().notNull().default(sql`CURRENT_TIMESTAMP`),
  publishedAt: text(),
  options: text({ mode: 'json' })
    .$type<Array<{ name: string; values: string[] }>>()
    .notNull()
    .default([]),
  seo: text({ mode: 'json' }).$type<{
    title?: string
    description?: string
  } | null>(),
})

export const productImagesTable = sqliteTable('product_images_table', {
  id: int().primaryKey({ autoIncrement: true }),
  productId: int()
    .notNull()
    .references(() => productsTable.id, { onDelete: 'cascade' }),
  url: text().notNull(),
  alt: text(),
  width: int(),
  height: int(),
  mimeType: text(),
  position: int().notNull().default(0),
  isPrimary: int().notNull().default(0),
  createdAt: text().notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text().notNull().default(sql`CURRENT_TIMESTAMP`),
})
