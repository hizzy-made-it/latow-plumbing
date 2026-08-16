import { Link } from "wouter";
import { ArrowRight, Phone, ShieldCheck, MapPin, Award, Users } from "lucide-react";
import { LiquidBackdrop } from "../components/liquid-hero";
import { CtaBand } from "../components/cta-band";
import { ServiceIcon } from "../components/service-icon";
import { Eyebrow, PipeRule, Section, Stars } from "../components/ui/primitives";
import { Reveal, RevealGroup, RevealItem } from "../components/ui/reveal";
import { company, reviews, serviceAreas } from "../lib/company";
import { services } from "../lib/services";
import { useSeo } from "../hooks/use-seo";

const featured = reviews.filter((r) => r.featured);

export default function Index() {
  useSeo({
    title:
      "Plumber in Orange City, FL | Latow Brothers Plumbing — Licensed Since 1978",
    description:
      "Family-owned licensed plumbers serving Orange City, DeLand, Deltona & Volusia County since 1978. Water heaters, re-piping, drains, water treatment. 1-year labor warranty. Call (386) 775-4422.",
    path: "/",
  });

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-24 md:min-h-screen">
        <LiquidBackdrop />

        <div className="container-page relative z-[3]">
          <div className="max-w-4xl">
            <Reveal y={16}>
              <Eyebrow>
                Orange City, Florida · Since {company.founded}
              </Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="t-display-xl mt-7 text-bone">
                Water goes
                <br />
                where it's told.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="t-body-lg mt-8 max-w-xl text-bone/70">
                {company.yearsInBusiness} years of licensed plumbing across Volusia County —
                repairs, water heaters, whole-home re-piping, drains and sewers. Family-owned,
                straight-priced, and warrantied for a year.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center justify-center gap-3 rounded-[3px] bg-copper-500 px-8 py-5 font-sans text-[0.95rem] font-extrabold tracking-[0.02em] text-ink shadow-[0_12px_40px_-12px_rgba(196,118,58,0.8)] transition-all hover:-translate-y-0.5 hover:bg-copper-300"
                >
                  <Phone className="h-5 w-5" strokeWidth={2.6} />
                  {company.phone}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 rounded-[3px] border border-water-400/40 px-8 py-5 font-sans text-[0.9rem] font-bold uppercase tracking-[0.04em] text-bone backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-water-400/80 hover:bg-water-400/10"
                >
                  Request a callback
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[0.82rem] text-bone/50">
                <span className="flex items-center gap-2.5">
                  <Stars n={5} />
                  <strong className="font-semibold text-bone/80">
                    {company.rating.value}
                  </strong>
                  · {company.rating.count} reviews
                </span>
                <span className="hidden h-4 w-px bg-navy-600 sm:block" />
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-water-500" />
                  Licensed {company.licenses[0]}
                </span>
                <span className="hidden h-4 w-px bg-navy-600 sm:block" />
                <span className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-water-500" />
                  1-Year Labor Warranty
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <div className="relative z-[4] border-y border-navy-700 bg-navy-800">
        <div className="container-page grid divide-navy-700 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {[
            { k: `${company.yearsInBusiness}`, v: "Years in business", s: `Since ${company.founded}` },
            { k: company.rating.value, v: "Average rating", s: `${company.rating.count} customer reviews` },
            { k: company.facebookRecommend, v: "Would recommend", s: "Facebook recommendations" },
            { k: "Top 6%", v: "Of FL contractors", s: "BuildZoom ranking" },
          ].map((stat, i) => (
            <div
              key={stat.v}
              className={`py-8 sm:px-8 ${i > 0 ? "border-t border-navy-700 sm:border-t-0" : ""} ${i === 2 ? "lg:border-t-0 border-t" : ""}`}
            >
              <p className="font-display text-4xl font-extrabold leading-none text-copper-500">
                {stat.k}
              </p>
              <p className="mt-2 font-sans text-[0.88rem] font-bold text-bone">{stat.v}</p>
              <p className="mt-0.5 text-[0.78rem] text-bone/40">{stat.s}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES MOSAIC ──────────────────────────────────── */}
      <Section tone="navy" id="services">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="t-display-lg mt-6 text-bone">
              Ten things we
              <br />
              do properly.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-lg text-[1.02rem] leading-relaxed text-bone/55 lg:pb-3">
              Residential and commercial, from a single dripping angle stop to a full copper
              repipe. If it carries water, drains water, heats water, or treats water — it's ours.
            </p>
          </Reveal>
        </div>

        <PipeRule className="mt-12" />

        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-navy-700 bg-navy-700 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <RevealItem key={s.slug} y={16}>
              <Link
                to={`/services/${s.slug}`}
                className="group relative flex h-full flex-col bg-navy-900 p-8 transition-colors duration-300 hover:bg-navy-800"
              >
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-copper-500 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                <ServiceIcon
                  name={s.icon}
                  className="h-8 w-8 text-water-500 transition-colors duration-300 group-hover:text-copper-500"
                />
                <h3 className="mt-6 font-display text-[1.35rem] font-bold text-bone">
                  {s.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.9rem] leading-relaxed text-bone/50">
                  {s.tagline}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-water-400 transition-colors group-hover:text-copper-300">
                  Details
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          ))}

          {/* fills the 12-cell grid and puts the phone at the end of the scan */}
          <RevealItem y={16}>
            <div className="flex h-full flex-col justify-between bg-navy-800 p-8">
              <div>
                <p className="font-display text-[3rem] font-extrabold leading-none text-copper-500">
                  {company.yearsInBusiness}
                </p>
                <p className="mt-3 font-display text-[1.2rem] font-bold text-bone">
                  years doing this
                </p>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-bone/50">
                  Same family, same county, since {company.founded}. There's very little left in a
                  Central Florida house we haven't already seen fail.
                </p>
              </div>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-water-400 hover:text-water-300"
              >
                Our story
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </RevealItem>

          <RevealItem y={16}>
            <div className="flex h-full flex-col justify-between bg-copper-500 p-8 text-ink">
              <div>
                <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-ink/60">
                  Not sure which one?
                </p>
                <h3 className="mt-4 font-display text-[1.5rem] font-extrabold leading-tight">
                  Describe it and we'll tell you what it is.
                </h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-ink/70">
                  You don't have to diagnose your own plumbing. That's the job.
                </p>
              </div>
              <a
                href={company.phoneHref}
                className="mt-6 inline-flex items-center gap-2.5 font-display text-[1.35rem] font-extrabold"
              >
                <Phone className="h-5 w-5" strokeWidth={2.6} />
                {company.phone}
              </a>
            </div>
          </RevealItem>
        </RevealGroup>
      </Section>

      {/* ── WHY LATOW ────────────────────────────────────────── */}
      <Section tone="bone">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
          <Reveal>
            <p className="t-eyebrow flex items-center gap-3 text-copper-700">
              <span className="h-px w-8 bg-copper-700/60" />
              Why Latow
            </p>
            <h2 className="t-display-lg mt-6 text-ink">
              The same family,
              <br />
              the same trucks,
              <br />
              since {company.founded}.
            </h2>
            <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-slate-600">
              Latow Brothers has been plumbing Central Florida for {company.yearsInBusiness} years.
              No franchise, no acquisition, no rotating cast of subcontractors — the people who
              answer the phone know the people driving the trucks, and both have been here a while.
            </p>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 border-b-2 border-copper-500 pb-1 font-sans text-[0.85rem] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:text-copper-700"
            >
              Our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <RevealGroup className="grid gap-px bg-bone-200 sm:grid-cols-2">
            {[
              {
                t: "Diagnose before quoting",
                b: "We find the actual failure point first. You get the cause explained in plain language and a price before anyone starts cutting.",
              },
              {
                t: "1-Year Labor Warranty",
                b: "Every job we do is warrantied for a full year on labor, on top of whatever the manufacturer covers on parts.",
              },
              {
                t: "Licensed and accountable",
                b: `Florida certified plumbing contractor, ${company.licenses.join(" and ")}. Ranked in the top 6% of licensed contractors in the state.`,
              },
              {
                t: "Local, not regional",
                b: "Our shop is on W Blue Springs Ave in Orange City. Volusia County is not a territory on a map to us — it's the drive home.",
              },
              {
                t: "Straight pricing",
                b: "You hear the number before the work happens. If there's a cheaper repair that will actually hold, we tell you about it.",
              },
              {
                t: "We clean up",
                b: "The most repeated line in our reviews isn't about pipe. It's that the crew left the place exactly how they found it.",
              },
            ].map((c) => (
              <RevealItem key={c.t} y={16}>
                <div className="h-full bg-bone p-7">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-copper-500/40 bg-copper-500/10">
                    <ShieldCheck className="h-4.5 w-4.5 text-copper-700" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display text-[1.15rem] font-bold text-ink">{c.t}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-slate-600">{c.b}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ── REVIEWS ──────────────────────────────────────────── */}
      <Section tone="deep">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <Eyebrow tone="water">Straight from customers</Eyebrow>
            <h2 className="t-display-lg mt-6 max-w-2xl text-bone">
              {company.rating.value} stars across {company.rating.count} reviews.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-[0.85rem] font-bold uppercase tracking-[0.1em] text-water-400 transition-colors hover:text-water-300"
            >
              Read all reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((r) => (
            <RevealItem key={r.name} y={20}>
              <figure className="flex h-full flex-col rounded-[4px] border border-navy-700 bg-navy-900/60 p-8">
                <Stars n={r.rating} />
                <blockquote className="mt-5 flex-1 text-[0.93rem] leading-relaxed text-bone/70">
                  "{r.text.length > 340 ? `${r.text.slice(0, 340).trimEnd()}…` : r.text}"
                </blockquote>
                <figcaption className="mt-7 border-t border-navy-700 pt-5">
                  <span className="block font-display text-[1.05rem] font-bold text-bone">
                    {r.name}
                  </span>
                  <span className="mt-0.5 block text-[0.78rem] text-bone/40">
                    {r.service} · {r.date}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ── SERVICE AREA ─────────────────────────────────────── */}
      <Section tone="navy">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Where we work</Eyebrow>
            <h2 className="t-display-md mt-6 text-bone">
              All of Volusia County, from a shop in Orange City.
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-bone/55">
              Being local isn't a marketing line — it's the difference between a truck that's
              fifteen minutes out and one that's dispatched from another county.
            </p>
            <a
              href={company.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-start gap-3 text-[0.92rem] text-bone/70 transition-colors hover:text-water-300"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper-500" />
              <span>
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </span>
            </a>
          </Reveal>

          <RevealGroup className="grid gap-px overflow-hidden rounded-[4px] border border-navy-700 bg-navy-700 sm:grid-cols-2">
            {serviceAreas.map((a) => (
              <RevealItem key={a.city} y={14}>
                <Link
                  to="/service-areas"
                  className="group block h-full bg-navy-900 p-6 transition-colors hover:bg-navy-800"
                >
                  <h3 className="font-display text-[1.1rem] font-bold text-bone group-hover:text-water-300">
                    {a.city}, FL
                  </h3>
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-copper-500">
                    {a.zip}
                  </p>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ── LOCAL PROOF STRIP ────────────────────────────────── */}
      <div className="border-y border-navy-700 bg-navy-800 py-10">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-center">
          {[
            { Icon: Users, t: "Family owned & operated" },
            { Icon: ShieldCheck, t: `Licensed ${company.licenses.join(" · ")}` },
            { Icon: Award, t: "1-Year Labor Warranty" },
            { Icon: MapPin, t: "Orange City, Florida" },
          ].map(({ Icon, t }) => (
            <span
              key={t}
              className="flex items-center gap-3 text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-bone/50"
            >
              <Icon className="h-4 w-4 text-water-500" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
