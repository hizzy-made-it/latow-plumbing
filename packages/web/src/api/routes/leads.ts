import { z } from "zod";
import { desc, eq, sql } from "drizzle-orm";
import { ORPCError } from "@orpc/server";
import { base } from "../__core/app";
import { db } from "../database";
import { leads as leadsTable } from "../database/schema";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
if (!ADMIN_PASSWORD) {
  throw new Error("ADMIN_PASSWORD environment variable is required");
}

const STATUSES = ["new", "contacted", "scheduled", "won", "lost"] as const;

function requireAdmin(password: string) {
  if (password !== ADMIN_PASSWORD) {
    throw new ORPCError("UNAUTHORIZED", { message: "Incorrect password" });
  }
}

/** Public — submit a callback request from any form on the site. */
const submit = base
  .input(
    z.object({
      name: z.string().trim().min(2, "Please enter your name").max(120),
      phone: z.string().trim().min(7, "Please enter a valid phone number").max(40),
      email: z.string().trim().email("Please enter a valid email").max(200).optional().or(z.literal("")),
      service: z.string().trim().max(120).optional(),
      message: z.string().trim().max(4000).optional(),
      source: z.string().trim().max(200).optional(),
      /** honeypot — bots fill it, humans never see it */
      company: z.string().max(200).optional(),
    }),
  )
  .handler(async ({ input }) => {
    // Silently accept and discard obvious bot submissions.
    if (input.company && input.company.length > 0) {
      return { ok: true as const };
    }

    await db.insert(leadsTable).values({
      name: input.name,
      phone: input.phone,
      email: input.email || null,
      service: input.service || null,
      message: input.message || null,
      source: input.source || null,
      status: "new",
    });

    return { ok: true as const };
  });

/** Admin — list all leads, newest first. */
const list = base
  .input(z.object({ password: z.string() }))
  .handler(async ({ input }) => {
    requireAdmin(input.password);
    const rows = await db.select().from(leadsTable).orderBy(desc(leadsTable.createdAt));
    return rows.map((r) => ({
      ...r,
      createdAt: r.createdAt.toISOString(),
      updatedAt: r.updatedAt.toISOString(),
    }));
  });

/** Admin — pipeline counts for the dashboard header. */
const stats = base
  .input(z.object({ password: z.string() }))
  .handler(async ({ input }) => {
    requireAdmin(input.password);
    const rows = await db
      .select({ status: leadsTable.status, count: sql<number>`count(*)` })
      .from(leadsTable)
      .groupBy(leadsTable.status);

    const byStatus = Object.fromEntries(STATUSES.map((s) => [s, 0])) as Record<
      (typeof STATUSES)[number],
      number
    >;
    let total = 0;
    for (const r of rows) {
      if (r.status in byStatus) byStatus[r.status as (typeof STATUSES)[number]] = Number(r.count);
      total += Number(r.count);
    }
    return { total, byStatus };
  });

/** Admin — move a lead through the pipeline / save notes. */
const update = base
  .input(
    z.object({
      password: z.string(),
      id: z.number(),
      status: z.enum(STATUSES).optional(),
      notes: z.string().max(4000).optional(),
    }),
  )
  .handler(async ({ input }) => {
    requireAdmin(input.password);
    await db
      .update(leadsTable)
      .set({
        ...(input.status ? { status: input.status } : {}),
        ...(input.notes !== undefined ? { notes: input.notes } : {}),
        updatedAt: new Date(),
      })
      .where(eq(leadsTable.id, input.id));
    return { ok: true as const };
  });

/** Admin — verify the password without pulling data. */
const verify = base
  .input(z.object({ password: z.string() }))
  .handler(async ({ input }) => {
    requireAdmin(input.password);
    return { ok: true as const };
  });

const remove = base
  .input(z.object({ password: z.string(), id: z.number() }))
  .handler(async ({ input }) => {
    requireAdmin(input.password);
    await db.delete(leadsTable).where(eq(leadsTable.id, input.id));
    return { ok: true as const };
  });

/** Feature router — mounted as `leads` in the app router. */
export const leads = { submit, list, stats, update, verify, remove };
