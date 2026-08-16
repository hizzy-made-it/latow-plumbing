import { useState } from "react";
import { useLocation } from "wouter";
import { Check, Loader2, Phone } from "lucide-react";
import { company } from "../lib/company";
import { services } from "../lib/services";
import { useSubmitLead } from "../queries/leads";
import { cn } from "../lib/utils";

const field =
  "w-full rounded-[3px] border border-navy-700 bg-navy-900/70 px-4 py-3.5 font-sans text-[0.95rem] text-bone placeholder:text-bone/35 transition-colors focus:border-water-400 focus:outline-none focus:ring-1 focus:ring-water-400/60";

const fieldLight =
  "w-full rounded-[3px] border border-bone-200 bg-white px-4 py-3.5 font-sans text-[0.95rem] text-ink placeholder:text-slate-600/50 transition-colors focus:border-water-600 focus:outline-none focus:ring-1 focus:ring-water-600/40";

const labelCls = "mb-2 block font-sans text-[0.72rem] font-bold uppercase tracking-[0.14em]";

export function CallbackForm({
  defaultService,
  tone = "dark",
  compact = false,
}: {
  defaultService?: string;
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const [location] = useLocation();
  const submit = useSubmitLead();
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService ?? "",
    message: "",
    company: "",
  });

  const dark = tone === "dark";
  const input = dark ? field : fieldLight;

  function set(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (form.name.trim().length < 2) return setError("Please enter your name.");
    if (form.phone.replace(/\D/g, "").length < 7)
      return setError("Please enter a phone number we can reach you at.");

    try {
      await submit.mutateAsync({ ...form, source: location });
      setDone(true);
    } catch {
      setError(
        `Something went wrong sending that. Please call us directly at ${company.phone}.`,
      );
    }
  }

  if (done) {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-4 rounded-[4px] border p-8",
          dark ? "border-water-400/40 bg-navy-800/70" : "border-water-600/30 bg-water-050",
        )}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-copper-500 text-ink">
          <Check className="h-6 w-6" strokeWidth={3} />
        </span>
        <div>
          <h3
            className={cn(
              "font-display text-2xl font-bold",
              dark ? "text-bone" : "text-ink",
            )}
          >
            Got it — we'll call you back.
          </h3>
          <p className={cn("mt-2 text-[0.95rem]", dark ? "text-bone/60" : "text-slate-600")}>
            Your request is in our queue. During office hours (Mon–Fri, 8:00 am – 4:00 pm) we
            typically call back the same business day. If it can't wait, call us now.
          </p>
        </div>
        <a
          href={company.phoneHref}
          className="inline-flex items-center gap-2.5 rounded-[3px] bg-copper-500 px-6 py-3.5 font-sans text-[0.82rem] font-extrabold text-ink transition-all hover:-translate-y-0.5 hover:bg-copper-300"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          {company.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* honeypot — hidden from humans and screen readers */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="lf-company">Company</label>
        <input
          id="lf-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => set("company", e.target.value)}
        />
      </div>

      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label
            htmlFor="lf-name"
            className={cn(labelCls, dark ? "text-water-400" : "text-water-700")}
          >
            Name *
          </label>
          <input
            id="lf-name"
            className={input}
            placeholder="Jane Doe"
            autoComplete="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="lf-phone"
            className={cn(labelCls, dark ? "text-water-400" : "text-water-700")}
          >
            Phone *
          </label>
          <input
            id="lf-phone"
            type="tel"
            className={input}
            placeholder="(386) 555-0134"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            required
          />
        </div>
      </div>

      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label
            htmlFor="lf-email"
            className={cn(labelCls, dark ? "text-water-400" : "text-water-700")}
          >
            Email <span className="opacity-50">(optional)</span>
          </label>
          <input
            id="lf-email"
            type="email"
            className={input}
            placeholder="you@email.com"
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="lf-service"
            className={cn(labelCls, dark ? "text-water-400" : "text-water-700")}
          >
            What do you need?
          </label>
          <select
            id="lf-service"
            className={cn(input, "appearance-none")}
            value={form.service}
            onChange={(e) => set("service", e.target.value)}
          >
            <option value="">Not sure / something else</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="lf-message"
          className={cn(labelCls, dark ? "text-water-400" : "text-water-700")}
        >
          Tell us what's going on
        </label>
        <textarea
          id="lf-message"
          rows={compact ? 3 : 4}
          className={cn(input, "resize-y")}
          placeholder="Water heater is leaking in the garage, about 12 years old…"
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      {error && (
        <p className="rounded-[3px] border border-copper-500/50 bg-copper-500/10 px-4 py-3 text-[0.88rem] text-copper-300">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submit.isPending}
          className="inline-flex items-center justify-center gap-2.5 rounded-[3px] bg-copper-500 px-7 py-4 font-sans text-[0.85rem] font-extrabold uppercase tracking-[0.04em] text-ink transition-all hover:-translate-y-0.5 hover:bg-copper-300 disabled:pointer-events-none disabled:opacity-60"
        >
          {submit.isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Request a callback"
          )}
        </button>
        <p className={cn("text-[0.8rem]", dark ? "text-bone/45" : "text-slate-600")}>
          Or call{" "}
          <a
            href={company.phoneHref}
            className={cn("font-bold", dark ? "text-water-300" : "text-copper-700")}
          >
            {company.phone}
          </a>{" "}
          — Mon–Fri, 8am–4pm.
        </p>
      </div>
    </form>
  );
}
