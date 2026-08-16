import { Link } from "wouter";
import { Phone } from "lucide-react";
import { company } from "../lib/company";
import { services } from "../lib/services";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center bg-navy-900 noise pt-36 pb-24">
      <div className="container-page relative z-[2]">
        <p className="t-eyebrow text-copper-500">404</p>
        <h1 className="t-display-lg mt-6 max-w-2xl text-bone">
          That pipe doesn't run here.
        </h1>
        <p className="mt-6 max-w-lg text-[1.02rem] text-bone/60">
          The page you're after moved or never existed. Here's where most people are headed:
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {services.slice(0, 5).map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="rounded-[3px] border border-navy-700 bg-navy-800 px-4 py-2.5 text-[0.85rem] font-semibold text-bone/75 transition-colors hover:border-water-400/60 hover:text-water-300"
            >
              {s.title}
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-[3px] bg-bone px-7 py-4 font-sans text-[0.85rem] font-extrabold uppercase tracking-[0.04em] text-ink transition-all hover:-translate-y-0.5"
          >
            Back home
          </Link>
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-3 rounded-[3px] bg-copper-500 px-7 py-4 font-sans text-[0.9rem] font-extrabold text-ink transition-all hover:-translate-y-0.5 hover:bg-copper-300"
          >
            <Phone className="h-4 w-4" strokeWidth={2.6} />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
