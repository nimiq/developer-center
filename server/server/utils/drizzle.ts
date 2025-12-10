import { drizzle } from 'drizzle-orm/d1'
import * as tables from '../db/schema'

export { and, eq, inArray, or, sql } from 'drizzle-orm'
export { tables }

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema: tables })
}
