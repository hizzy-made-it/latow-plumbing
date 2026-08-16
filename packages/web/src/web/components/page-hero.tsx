import type { ReactNode } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "./ui/primitives";
import { Reveal } from "./ui/reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-700 bg-navy-900 noise pt-36 pb-20 md:pt-44 md:pb-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 90% at 12% 0%, rgba(50,116,138,0.38) 0%, transparent 62%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper-500/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative z-[2]">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1.5 text-[0.76rem] text-bone/40"
          >
            <Link to="/" className="transition-colors hover:text-water-300">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 opacity-50" />
                {c.href ? (
                  <Link to={c.href} className="transition-colors hover:text-water-300">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-bone/70">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <Reveal y={14}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="t-display-lg mt-6 max-w-3xl text-bone">{title}</h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.16}>
            <p className="t-body-lg mt-7 max-w-2xl text-bone/60">{lede}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.24}>
            <div className="mt-10">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
