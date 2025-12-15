import { index, integer, primaryKey, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

// Entities extracted from documentation
export const entities = sqliteTable('entities', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(),
  description: text('description'),
  contentHash: text('content_hash'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
}, t => [
  index('idx_entities_name').on(t.name),
  index('idx_entities_type').on(t.type),
])

// Relationships between entities
export const relationships = sqliteTable('relationships', {
  id: text('id').primaryKey(),
  sourceEntityId: text('source_entity_id').notNull().references(() => entities.id, { onDelete: 'cascade' }),
  targetEntityId: text('target_entity_id').notNull().references(() => entities.id, { onDelete: 'cascade' }),
  type: text('type').notNull(),
  description: text('description'),
  weight: real('weight').default(1.0),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
}, t => [
  index('idx_rel_source').on(t.sourceEntityId),
  index('idx_rel_target').on(t.targetEntityId),
  index('idx_rel_type').on(t.type),
])

// Entity mentions in sections (provenance tracking)
export const entityMentions = sqliteTable('entity_mentions', {
  entityId: text('entity_id').notNull().references(() => entities.id, { onDelete: 'cascade' }),
  sectionId: text('section_id').notNull(),
  sectionPath: text('section_path'),
  contentHash: text('content_hash'),
}, t => [
  primaryKey({ columns: [t.entityId, t.sectionId] }),
  index('idx_mentions_section').on(t.sectionId),
])

// Communities for hierarchical grouping
export const communities = sqliteTable('communities', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  summary: text('summary'),
  keyEntities: text('key_entities'), // JSON array of entity IDs
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
})

// Entity to community mapping
export const entityCommunities = sqliteTable('entity_communities', {
  entityId: text('entity_id').notNull().references(() => entities.id, { onDelete: 'cascade' }),
  communityId: text('community_id').notNull().references(() => communities.id, { onDelete: 'cascade' }),
}, t => [
  primaryKey({ columns: [t.entityId, t.communityId] }),
  index('idx_ec_community').on(t.communityId),
])

// Inferred types for use across the app
export type Entity = typeof entities.$inferSelect
export type NewEntity = typeof entities.$inferInsert
export type Relationship = typeof relationships.$inferSelect
export type NewRelationship = typeof relationships.$inferInsert
export type EntityMention = typeof entityMentions.$inferSelect
export type NewEntityMention = typeof entityMentions.$inferInsert
export type Community = typeof communities.$inferSelect
export type NewCommunity = typeof communities.$inferInsert
export type EntityCommunity = typeof entityCommunities.$inferSelect
export type NewEntityCommunity = typeof entityCommunities.$inferInsert
