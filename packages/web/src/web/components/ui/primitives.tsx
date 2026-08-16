import type { ReactNode } from "react";
import { Link } from "wouter";
import { cn } from "../../lib/utils";

/* ── Eyebrow label ─────────────────────────────────────────── */
export function Eyebrow({
  children,
  className,
  tone = "copper",
}: {
  children: ReactNode;
  className?: string;
  tone?: "copper" | "water";
}) {
  return (
    <p
      className={cn(
        "t-eyebrow flex items-center gap-3",
        tone === "copper" ? "text-copper-500" : "text-water-400",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-8 shrink-0",
          tone === "copper" ? "bg-copper-500/60" : "bg-water-400/60",
        )}
      />
      {children}
    </p>
  );
}

/* ── Buttons ───────────────────────────────────────────────── */
const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[3px] font-sans font-bold uppercase tracking-[0.04em] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants = {
  primary:
    "bg-copper-500 text-ink hover:bg-copper-300 hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(196,118,58,0.6)]",
  secondary:
    "border border-water-400/40 text-bone backdrop-blur-sm hover:bg-water-400/10 hover:border-water-400/70 hover:-translate-y-0.5",
  solid: "bg-bone text-ink hover:bg-water-050 hover:-translate-y-0.5",
  ghost: "text-water-400 hover:text-water-300",
} as const;

const sizes = {
  sm: "px-4 py-2.5 text-[0.72rem]",
  md: "px-6 py-3.5 text-[0.78rem]",
  lg: "px-7 py-4 text-[0.85rem]",
} as const;

type BtnProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

export function ButtonLink({
  href,
  external,
  children,
  variant = "primary",
  size = "md",
  className,
}: BtnProps & { href: string; external?: boolean }) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={cls}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
}: BtnProps & {
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}

/* ── Pipe-run divider ──────────────────────────────────────── */
export function PipeRule({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-0", className)} aria-hidden="true">
      <span className="h-2 w-2 shrink-0 rounded-full border border-copper-500/70 bg-copper-500/25" />
      <span className="h-px flex-1 bg-gradient-to-r from-copper-500/70 via-copper-500/25 to-transparent" />
    </div>
  );
}

/* ── Section shell ─────────────────────────────────────────── */
export function Section({
  children,
  className,
  tone = "navy",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "navy" | "deep" | "bone" | "none";
  id?: string;
}) {
  const tones = {
    navy: "bg-navy-900 text-bone noise",
    deep: "bg-ink text-bone noise",
    bone: "bg-bone text-ink",
    none: "",
  };
  return (
    <section id={id} className={cn("relative py-24 md:py-32", tones[tone], className)}>
      <div className="container-page relative z-[2]">{children}</div>
    </section>
  );
}

/* ── Star rating ───────────────────────────────────────────── */
export function Stars({ n = 5, className }: { n?: number; className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5", className)} aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn("h-4 w-4", i < n ? "fill-copper-500" : "fill-current opacity-20")}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.14 1 5.86L10 14.94 4.75 17.7l1-5.86L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}
