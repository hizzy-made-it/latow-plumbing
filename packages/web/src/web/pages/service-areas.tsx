import { useMemo } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { CtaBand } from "../components/cta-band";
import { Eyebrow, Section } from "../components/ui/primitives";
import { Reveal, RevealGroup, RevealItem } from "../components/ui/reveal";
import { company, serviceAreas } from "../lib/company";
import { services } from "../lib/services";
import { useSeo } from "../hooks/use-seo";

export default function ServiceAreas() {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Plumber",
      name: company.legalName,
      telephone: company.phone,
      url: "https://latowsplumbingfl.com/service-areas",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.zip,
        addressCountry: "US",
      },
      areaServed: serviceAreas.map((a) => ({
        "@type": "City",
        name: `${a.city}, FL`,
      })),
    }),
    [],
  );

  useSeo({
    title: "Plumbing Service Areas | Orange City, DeLand, Deltona & Volusia County FL",
    description:
      "Latow Brothers Plumbing serves Orange City, DeLand, Deltona, DeBary, Lake Helen, Enterprise, Sanford, Cassadaga & Osteen FL. Licensed local plumbers since 1978. (386) 775-4422.",
    path: "/service-areas",
    jsonLd,
  });

  return (
    <>
      <PageHero
        eyebrow="Volusia County & beyond"
        title="Local means the truck is already nearby."
        lede={`Our shop is on ${company.address.street} in Orange City. Every city below is a normal day's drive for us — not an outer-edge service call we squeeze in when a route allows.`}
        crumbs={[{ label: "Service Areas" }]}
      >
        <a
          href={company.phoneHref}
          className="inline-flex items-center gap-3 rounded-[3px] bg-copper-500 px-7 py-4 font-sans text-[0.9rem] font-extrabold text-ink transition-all hover:-translate-y-0.5 hover:bg-copper-300"
        >
          <Phone className="h-4.5 w-4.5" strokeWidth={2.6} />
          {company.phone}
        </a>
      </PageHero>

      <Section tone="navy">
        <RevealGroup className="grid gap-px overflow-hidden rounded-[4px] border border-navy-700 bg-navy-700 md:grid-cols-2">
          {serviceAreas.map((a) => (
            <RevealItem key={a.city} y={18}>
              <div className="h-full bg-navy-900 p-8 md:p-9">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h2 className="font-display text-[1.6rem] font-bold text-bone">
                      {a.city}, FL
                    </h2>
                    <p className="mt-1.5 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-copper-500">
                      {a.zip}
                    </p>
                  </div>
                  <MapPin className="h-6 w-6 shrink-0 text-water-500/60" strokeWidth={1.6} />
                </div>
                <p className="mt-5 text-[0.93rem] leading-relaxed text-bone/55">{a.note}</p>
                <a
                  href={company.phoneHref}
                  className="mt-6 inline-flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-water-400 transition-colors hover:text-water-300"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Schedule in {a.city}
                </a>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="bone">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="t-eyebrow flex items-center gap-3 text-copper-700">
              <span className="h-px w-8 bg-copper-700/60" />
              What we bring
            </p>
            <h2 className="t-display-md mt-6 text-ink">
              Same crews, same warranty, every city on this list.
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-slate-600">
              Central Florida plumbing has its own set of problems — hard well water, sulfur smell,
              slab foundations, galvanized supply lines in the older neighborhoods, and afternoon
              storms that find every drainage weakness on a property. We've been working in it since{" "}
              {company.founded}.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 border-b-2 border-copper-500 pb-1 font-sans text-[0.85rem] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:text-copper-700"
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-px self-start bg-bone-200 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-bone p-5 transition-colors hover:bg-white"
              >
                <span className="block font-display text-[1.05rem] font-bold text-ink group-hover:text-copper-700">
                  {s.title}
                </span>
                <span className="mt-1 block text-[0.8rem] text-slate-600">{s.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="deep" className="py-20 md:py-24">
        <Eyebrow tone="water">Outside the list?</Eyebrow>
        <h2 className="t-display-md mt-6 max-w-2xl text-bone">
          Call and ask. We cover more of Central Florida than we can fit on a page.
        </h2>
        <a
          href={company.phoneHref}
          className="mt-9 inline-flex items-center gap-3 rounded-[3px] bg-copper-500 px-7 py-4 font-sans text-[0.9rem] font-extrabold text-ink transition-all hover:-translate-y-0.5 hover:bg-copper-300"
        >
          <Phone className="h-4.5 w-4.5" strokeWidth={2.6} />
          {company.phone}
        </a>
      </Section>

      <CtaBand
        eyebrow="Anywhere in Volusia"
        heading="Tell us where you are and what's wrong."
      />
    </>
  );
}
