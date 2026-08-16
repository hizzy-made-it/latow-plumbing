import { useMemo } from "react";
import { Link, useParams } from "wouter";
import { AlertTriangle, ArrowRight, Check, Phone } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { CtaBand } from "../components/cta-band";
import { ServiceIcon } from "../components/service-icon";
import { Eyebrow, PipeRule, Section } from "../components/ui/primitives";
import { Reveal, RevealGroup, RevealItem } from "../components/ui/reveal";
import { company, serviceAreas } from "../lib/company";
import { services, servicesBySlug } from "../lib/services";
import { useSeo } from "../hooks/use-seo";
import NotFound from "./not-found";

export default function ServicePage() {
  const params = useParams<{ slug: string }>();
  const service = servicesBySlug[params.slug ?? ""];

  const jsonLd = useMemo(() => {
    if (!service) return undefined;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: service.title,
          serviceType: service.title,
          description: service.metaDescription,
          provider: {
            "@type": "Plumber",
            name: company.legalName,
            telephone: company.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: company.address.street,
              addressLocality: company.address.city,
              addressRegion: company.address.state,
              postalCode: company.address.zip,
              addressCountry: "US",
            },
          },
          areaServed: serviceAreas.map((a) => `${a.city}, FL`),
        },
        {
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    };
  }, [service]);

  useSeo({
    title: service?.metaTitle ?? "Service Not Found | Latow Brothers Plumbing",
    description: service?.metaDescription ?? "",
    path: service ? `/services/${service.slug}` : undefined,
    jsonLd,
  });

  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${service.short} · Orange City & Volusia County`}
        title={service.title}
        lede={service.tagline}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-3 rounded-[3px] bg-copper-500 px-7 py-4 font-sans text-[0.9rem] font-extrabold text-ink transition-all hover:-translate-y-0.5 hover:bg-copper-300"
          >
            <Phone className="h-4.5 w-4.5" strokeWidth={2.6} />
            {company.phone}
          </a>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-2.5 rounded-[3px] border border-water-400/40 px-7 py-4 font-sans text-[0.85rem] font-bold uppercase tracking-[0.04em] text-bone transition-all hover:border-water-400/80 hover:bg-water-400/10"
          >
            Request a callback
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      {/* intro + includes */}
      <Section tone="navy">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <ServiceIcon name={service.icon} className="h-12 w-12 text-copper-500" />
            <h2 className="t-display-md mt-8 text-bone">
              {service.short} in Orange City, done once.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-relaxed text-bone/65">{service.intro}</p>
            <PipeRule className="mt-10" />
            <div className="mt-8 flex flex-wrap gap-3">
              {company.promises.map((p) => (
                <span
                  key={p}
                  className="rounded-[3px] border border-navy-700 bg-navy-800 px-3.5 py-2 text-[0.75rem] font-semibold text-water-400"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[4px] border border-navy-700 bg-navy-800/60 p-8 md:p-10">
              <Eyebrow>What's included</Eyebrow>
              <ul className="mt-7 space-y-4">
                {service.includes.map((i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-water-600/25">
                      <Check className="h-3 w-3 text-water-300" strokeWidth={3} />
                    </span>
                    <span className="text-[0.93rem] leading-relaxed text-bone/70">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* signs */}
      <Section tone="bone">
        <Reveal>
          <p className="t-eyebrow flex items-center gap-3 text-copper-700">
            <span className="h-px w-8 bg-copper-700/60" />
            Know the signs
          </p>
          <h2 className="t-display-md mt-6 max-w-2xl text-ink">
            When to stop waiting and make the call.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-px bg-bone-200 md:grid-cols-2">
          {service.signs.map((s) => (
            <RevealItem key={s.title} y={18}>
              <div className="h-full bg-bone p-8 md:p-9">
                <AlertTriangle className="h-6 w-6 text-copper-500" strokeWidth={1.8} />
                <h3 className="mt-5 font-display text-[1.3rem] font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-slate-600">{s.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* process */}
      <Section tone="deep">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow tone="water">How it goes</Eyebrow>
            <h2 className="t-display-md mt-6 text-bone">
              No mystery, no surprise invoice.
            </h2>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-bone/55">
              Same sequence on every job, whether it's a fifteen-minute valve swap or a three-day
              repipe.
            </p>
          </Reveal>

          <RevealGroup className="space-y-px">
            {service.process.map((p, i) => (
              <RevealItem key={p.step} y={14}>
                <div className="flex gap-6 border-l-2 border-navy-700 bg-navy-900/40 p-7 transition-colors hover:border-copper-500">
                  <span className="font-display text-[1.6rem] font-extrabold leading-none text-copper-500/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.25rem] font-bold text-bone">{p.step}</h3>
                    <p className="mt-2 text-[0.93rem] leading-relaxed text-bone/55">{p.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* faqs */}
      <Section tone="navy">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="t-display-md mt-6 text-bone">{service.short}, answered.</h2>
            <a
              href={company.phoneHref}
              className="mt-8 inline-flex items-center gap-2.5 text-[0.95rem] font-bold text-water-400 transition-colors hover:text-water-300"
            >
              <Phone className="h-4 w-4" />
              Ask us directly — {company.phone}
            </a>
          </Reveal>

          <RevealGroup className="divide-y divide-navy-700 border-y border-navy-700">
            {service.faqs.map((f) => (
              <RevealItem key={f.q} y={12}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[1.15rem] font-bold text-bone transition-colors hover:text-water-300">
                    {f.q}
                    <span className="mt-1 shrink-0 text-copper-500 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-bone/60">
                    {f.a}
                  </p>
                </details>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* related */}
      <Section tone="bone" className="py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[1.75rem] font-bold text-ink">
            Other things we handle
          </h2>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[0.82rem] font-bold uppercase tracking-[0.1em] text-copper-700 transition-colors hover:text-ink"
          >
            All services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-px bg-bone-200 md:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group bg-bone p-7 transition-colors hover:bg-white"
            >
              <ServiceIcon name={s.icon} className="h-7 w-7 text-water-600" />
              <h3 className="mt-5 font-display text-[1.2rem] font-bold text-ink group-hover:text-copper-700">
                {s.title}
              </h3>
              <p className="mt-2 text-[0.87rem] leading-relaxed text-slate-600">{s.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow={service.short}
        heading={`Need ${service.title.toLowerCase()}? Let's get it scheduled.`}
        defaultService={service.title}
      />
    </>
  );
}
