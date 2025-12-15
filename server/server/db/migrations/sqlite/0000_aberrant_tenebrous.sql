CREATE TABLE `communities` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`summary` text,
	`key_entities` text,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `entities` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`type` text NOT NULL,
	`description` text,
	`content_hash` text,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE INDEX `idx_entities_name` ON `entities` (`name`);--> statement-breakpoint
CREATE INDEX `idx_entities_type` ON `entities` (`type`);--> statement-breakpoint
CREATE TABLE `entity_communities` (
	`entity_id` text NOT NULL,
	`community_id` text NOT NULL,
	PRIMARY KEY(`entity_id`, `community_id`),
	FOREIGN KEY (`entity_id`) REFERENCES `entities`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`community_id`) REFERENCES `communities`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_ec_community` ON `entity_communities` (`community_id`);--> statement-breakpoint
CREATE TABLE `entity_mentions` (
	`entity_id` text NOT NULL,
	`section_id` text NOT NULL,
	`section_path` text,
	`content_hash` text,
	PRIMARY KEY(`entity_id`, `section_id`),
	FOREIGN KEY (`entity_id`) REFERENCES `entities`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_mentions_section` ON `entity_mentions` (`section_id`);--> statement-breakpoint
CREATE TABLE `relationships` (
	`id` text PRIMARY KEY NOT NULL,
	`source_entity_id` text NOT NULL,
	`target_entity_id` text NOT NULL,
	`type` text NOT NULL,
	`description` text,
	`weight` real DEFAULT 1,
	`created_at` integer,
	FOREIGN KEY (`source_entity_id`) REFERENCES `entities`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`target_entity_id`) REFERENCES `entities`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_rel_source` ON `relationships` (`source_entity_id`);--> statement-breakpoint
CREATE INDEX `idx_rel_target` ON `relationships` (`target_entity_id`);--> statement-breakpoint
CREATE INDEX `idx_rel_type` ON `relationships` (`type`);