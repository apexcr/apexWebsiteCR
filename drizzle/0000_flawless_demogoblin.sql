CREATE TABLE `products_table` (
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
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL,
	`publishedAt` text,
	`options` text DEFAULT '[]' NOT NULL,
	`seo` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `products_table_sku_unique` ON `products_table` (`sku`);--> statement-breakpoint
CREATE UNIQUE INDEX `products_table_handle_unique` ON `products_table` (`handle`);