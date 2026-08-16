import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * Callback / quote requests submitted from the site.
 * Kept deliberately small — every extra required field costs conversions.
 */
export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  service: text("service"),
  message: text("message"),
  /** page path the form was submitted from */
  source: text("source"),
  /** new | contacted | scheduled | won | lost */
  status: text("status").notNull().default("new"),
  notes: text("notes"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
