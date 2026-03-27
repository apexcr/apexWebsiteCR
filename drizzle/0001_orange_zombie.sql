CREATE TABLE `product_images_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`productId` integer NOT NULL,
	`url` text NOT NULL,
	`alt` text,
	`width` integer,
	`height` integer,
	`mimeType` text,
	`position` integer DEFAULT 0 NOT NULL,
	`isPrimary` integer DEFAULT 0 NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`productId`) REFERENCES `products_table`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_products_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`sku` text NOT NULL,
	`title` text NOT NULL,
	`handle` text NOT NULL,
	`description` text NOT NULL,
	`descriptionHtml` text NOT NULL,
	`vendor` text NOT NULL,
	`productType` text NOT NULL,
	`status` text NOT NULL,
	`tags` text DEFAULT '[]' NOT NULL,
	`totalInventory` integer DEFAULT 0 NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`publishedAt` text,
	`options` text DEFAULT '[]' NOT NULL,
	`seo` text
);
--> statement-breakpoint
INSERT INTO `__new_products_table`("id", "sku", "title", "handle", "description", "descriptionHtml", "vendor", "productType", "status", "tags", "totalInventory", "createdAt", "updatedAt", "publishedAt", "options", "seo") SELECT "id", "sku", "title", "handle", "description", "descriptionHtml", "vendor", "productType", "status", "tags", "totalInventory", "createdAt", "updatedAt", "publishedAt", "options", "seo" FROM `products_table`;--> statement-breakpoint
DROP TABLE `products_table`;--> statement-breakpoint
ALTER TABLE `__new_products_table` RENAME TO `products_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `products_table_sku_unique` ON `products_table` (`sku`);--> statement-breakpoint
CREATE UNIQUE INDEX `products_table_handle_unique` ON `products_table` (`handle`);