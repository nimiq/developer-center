-- Initialize database for Nuxt Content
-- This migration ensures D1 database is created
CREATE TABLE IF NOT EXISTS _meta (
  key TEXT PRIMARY KEY,
  value TEXT
);
