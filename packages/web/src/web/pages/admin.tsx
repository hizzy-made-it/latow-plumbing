import { useEffect, useMemo, useState } from "react";
import {
  Download,
  Loader2,
  Lock,
  LogOut,
  Mail,
  Phone,
  RefreshCw,
  Trash2,
} from "lucide-react";
import { Logo } from "../components/logo";
import {
  useDeleteLead,
  useLeadStats,
  useLeads,
  useUpdateLead,
  useVerifyPassword,
} from "../queries/leads";
import { cn } from "../lib/utils";
import { useSeo } from "../hooks/use-seo";

const STATUSES = ["new", "contacted", "scheduled", "won", "lost"] as const;
type Status = (typeof STATUSES)[number];

const statusStyle: Record<Status, string> = {
  new: "bg-copper-500 text-ink border-copper-500",
  contacted: "bg-water-600/20 text-water-300 border-water-600/50",
  scheduled: "bg-water-400/20 text-water-300 border-water-400/60",
  won: "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
  lost: "bg-navy-700 text-bone/40 border-navy-600",
};

const KEY = "latow-admin-pw";

export default function Admin() {
  useSeo({
    title: "Lead Inbox | Latow Brothers Plumbing",
    description: "Internal lead management dashboard.",
  });

  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | Status>("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const verify = useVerifyPassword();
  const leads = useLeads(password, authed);
  const stats = useLeadStats(password, authed);
  const update = useUpdateLead();
  const del = useDeleteLead();

  // restore session
  useEffect(() => {
    const saved = sessionStorage.getItem(KEY);
    if (!saved) return;
    verify
      .mutateAsync({ password: saved })
      .then(() => {
        setPassword(saved);
        setAuthed(true);
      })
      .catch(() => sessionStorage.removeItem(KEY));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    try {
      await verify.mutateAsync({ password: input });
      sessionStorage.setItem(KEY, input);
      setPassword(input);
      setAuthed(true);
    } catch {
      /* error surfaced from mutation state */
    }
  }

  function logout() {
    sessionStorage.removeItem(KEY);
    setAuthed(false);
    setPassword("");
    setInput("");
  }

  const rows = useMemo(() => {
    const all = leads.data ?? [];
    return filter === "all" ? all : all.filter((l) => l.status === filter);
  }, [leads.data, filter]);

  function exportCsv() {
    const all = leads.data ?? [];
    const head = [
      "id",
      "created",
      "name",
      "phone",
      "email",
      "service",
      "status",
      "source",
      "message",
      "notes",
    ];
    const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = [
      head.join(","),
      ...all.map((l) =>
        [
          l.id,
          l.createdAt,
          l.name,
          l.phone,
          l.email,
          l.service,
          l.status,
          l.source,
          l.message,
          l.notes,
        ]
          .map(esc)
          .join(","),
      ),
    ].join("\n");

    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `latow-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  /* ── login gate ────────────────────────────────────────── */
  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy-900 noise px-6">
        <form
          onSubmit={login}
          className="relative z-[2] w-full max-w-sm rounded-[4px] border border-navy-700 bg-navy-800/70 p-9"
        >
          <Logo />
          <div className="mt-8 flex items-center gap-2.5 text-copper-500">
            <Lock className="h-4 w-4" />
            <span className="t-eyebrow">Lead inbox</span>
          </div>
          <h1 className="mt-4 font-display text-2xl font-bold text-bone">Staff login</h1>
          <p className="mt-2 text-[0.88rem] text-bone/50">
            Enter the office password to view incoming callback requests.
          </p>

          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            autoFocus
            className="mt-7 w-full rounded-[3px] border border-navy-700 bg-navy-900 px-4 py-3.5 text-[0.95rem] text-bone placeholder:text-bone/30 focus:border-water-400 focus:outline-none"
          />

          {verify.isError && (
            <p className="mt-3 text-[0.85rem] text-copper-300">
              That password isn't right. Try again.
            </p>
          )}

          <button
            type="submit"
            disabled={verify.isPending || input.length === 0}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[3px] bg-copper-500 px-6 py-3.5 font-sans text-[0.82rem] font-extrabold uppercase tracking-[0.06em] text-ink transition-colors hover:bg-copper-300 disabled:opacity-50"
          >
            {verify.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign in"}
          </button>
        </form>
      </div>
    );
  }

  /* ── dashboard ─────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-navy-900">
      <header className="sticky top-0 z-20 border-b border-navy-700 bg-navy-900/95 backdrop-blur-xl">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-5">
            <Logo compact />
            <span className="hidden text-[0.72rem] font-bold uppercase tracking-[0.16em] text-copper-500 sm:block">
              Lead Inbox
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                leads.refetch();
                stats.refetch();
              }}
              className="inline-flex items-center gap-2 rounded-[3px] border border-navy-700 px-3.5 py-2.5 text-[0.78rem] font-semibold text-bone/70 transition-colors hover:text-bone"
            >
              <RefreshCw className={cn("h-3.5 w-3.5", leads.isFetching && "animate-spin")} />
              Refresh
            </button>
            <button
              type="button"
              onClick={exportCsv}
              className="inline-flex items-center gap-2 rounded-[3px] border border-navy-700 px-3.5 py-2.5 text-[0.78rem] font-semibold text-bone/70 transition-colors hover:text-bone"
            >
              <Download className="h-3.5 w-3.5" />
              CSV
            </button>
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-[3px] border border-navy-700 px-3.5 py-2.5 text-[0.78rem] font-semibold text-bone/70 transition-colors hover:text-copper-300"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="container-page py-10">
        {/* stat tiles */}
        <div className="grid gap-px overflow-hidden rounded-[4px] border border-navy-700 bg-navy-700 sm:grid-cols-3 lg:grid-cols-6">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "bg-navy-800 p-5 text-left transition-colors hover:bg-navy-700/60",
              filter === "all" && "bg-navy-700/70",
            )}
          >
            <p className="font-display text-3xl font-extrabold text-bone">
              {stats.data?.total ?? "—"}
            </p>
            <p className="mt-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-bone/45">
              All leads
            </p>
          </button>
          {STATUSES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={cn(
                "bg-navy-800 p-5 text-left transition-colors hover:bg-navy-700/60",
                filter === s && "bg-navy-700/70",
              )}
            >
              <p
                className={cn(
                  "font-display text-3xl font-extrabold",
                  s === "new" ? "text-copper-500" : "text-bone",
                )}
              >
                {stats.data?.byStatus[s] ?? "—"}
              </p>
              <p className="mt-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-bone/45">
                {s}
              </p>
            </button>
          ))}
        </div>

        {/* list */}
        <div className="mt-8">
          {leads.isLoading && (
            <div className="flex items-center gap-3 py-16 text-bone/50">
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading leads…
            </div>
          )}

          {leads.isError && (
            <p className="rounded-[3px] border border-copper-500/40 bg-copper-500/10 px-5 py-4 text-[0.9rem] text-copper-300">
              Couldn't load leads. Try refreshing or signing in again.
            </p>
          )}

          {!leads.isLoading && rows.length === 0 && (
            <div className="rounded-[4px] border border-navy-700 bg-navy-800/50 px-8 py-16 text-center">
              <p className="font-display text-xl font-bold text-bone">
                No {filter === "all" ? "" : filter} leads yet.
              </p>
              <p className="mt-2 text-[0.9rem] text-bone/45">
                Requests submitted from any form on the site land here immediately.
              </p>
            </div>
          )}

          <div className="space-y-3">
            {rows.map((l) => {
              const open = openId === l.id;
              return (
                <article
                  key={l.id}
                  className="overflow-hidden rounded-[4px] border border-navy-700 bg-navy-800/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : l.id)}
                    className="flex w-full flex-wrap items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-navy-800"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-display text-[1.2rem] font-bold text-bone">
                          {l.name}
                        </span>
                        <span
                          className={cn(
                            "rounded-[3px] border px-2.5 py-1 text-[0.66rem] font-bold uppercase tracking-[0.12em]",
                            statusStyle[l.status as Status] ?? statusStyle.new,
                          )}
                        >
                          {l.status}
                        </span>
                        {l.service && (
                          <span className="text-[0.78rem] text-water-400">{l.service}</span>
                        )}
                      </div>
                      <p className="mt-1.5 truncate text-[0.85rem] text-bone/45">
                        {new Date(l.createdAt).toLocaleString()} · {l.phone}
                        {l.source ? ` · from ${l.source}` : ""}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <a
                        href={`tel:${l.phone.replace(/[^\d+]/g, "")}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-[3px] bg-copper-500 px-3.5 py-2.5 text-[0.76rem] font-extrabold text-ink"
                      >
                        <Phone className="h-3.5 w-3.5" strokeWidth={2.6} />
                        Call
                      </a>
                      {l.email && (
                        <a
                          href={`mailto:${l.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center rounded-[3px] border border-navy-700 p-2.5 text-bone/60 hover:text-water-300"
                          aria-label={`Email ${l.name}`}
                        >
                          <Mail className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </button>

                  {open && (
                    <div className="border-t border-navy-700 p-5">
                      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                        <div>
                          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-bone/40">
                            Message
                          </p>
                          <p className="mt-2 whitespace-pre-wrap text-[0.93rem] leading-relaxed text-bone/70">
                            {l.message || "— none —"}
                          </p>

                          <dl className="mt-6 grid grid-cols-2 gap-4 text-[0.85rem]">
                            <div>
                              <dt className="text-bone/40">Phone</dt>
                              <dd className="font-semibold text-bone">{l.phone}</dd>
                            </div>
                            <div>
                              <dt className="text-bone/40">Email</dt>
                              <dd className="break-all font-semibold text-bone">
                                {l.email || "—"}
                              </dd>
                            </div>
                          </dl>
                        </div>

                        <div>
                          <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-bone/40">
                            Pipeline
                          </p>
                          <div className="mt-2.5 flex flex-wrap gap-2">
                            {STATUSES.map((s) => (
                              <button
                                key={s}
                                type="button"
                                disabled={update.isPending}
                                onClick={() =>
                                  update.mutate({ password, id: l.id, status: s })
                                }
                                className={cn(
                                  "rounded-[3px] border px-3 py-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] transition-colors disabled:opacity-50",
                                  l.status === s
                                    ? statusStyle[s]
                                    : "border-navy-700 text-bone/50 hover:text-bone",
                                )}
                              >
                                {s}
                              </button>
                            ))}
                          </div>

                          <label
                            htmlFor={`notes-${l.id}`}
                            className="mt-6 block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-bone/40"
                          >
                            Office notes
                          </label>
                          <textarea
                            id={`notes-${l.id}`}
                            defaultValue={l.notes ?? ""}
                            rows={3}
                            onBlur={(e) =>
                              e.target.value !== (l.notes ?? "") &&
                              update.mutate({ password, id: l.id, notes: e.target.value })
                            }
                            placeholder="Called back 8/15 — scheduling Thursday AM…"
                            className="mt-2 w-full rounded-[3px] border border-navy-700 bg-navy-900 px-3.5 py-3 text-[0.9rem] text-bone placeholder:text-bone/30 focus:border-water-400 focus:outline-none"
                          />
                          <p className="mt-1.5 text-[0.72rem] text-bone/35">
                            Saves when you click outside the box.
                          </p>

                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Delete the lead from ${l.name}? This can't be undone.`))
                                del.mutate({ password, id: l.id });
                            }}
                            className="mt-5 inline-flex items-center gap-2 text-[0.76rem] font-bold uppercase tracking-[0.1em] text-bone/35 transition-colors hover:text-copper-300"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            Delete lead
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
