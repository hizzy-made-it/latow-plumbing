import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { CtaBand } from "../components/cta-band";
import { ServiceIcon } from "../components/service-icon";
import { Section } from "../components/ui/primitives";
import { RevealGroup, RevealItem } from "../components/ui/reveal";
import { company } from "../lib/company";
import { services } from "../lib/services";
import { useSeo } from "../hooks/use-seo";

export default function Services() {
  useSeo({
    title: "Plumbing Services in Orange City & Volusia County FL | Latow Brothers",
    description:
      "Full-service licensed plumbing in Orange City, DeLand, Deltona & DeBary FL: repairs, water heaters, re-piping, sewer & drains, water treatment, new construction, commercial. Since 1978.",
    path: "/services",
  });

  return (
    <>
      <PageHero
        eyebrow="Residential & commercial"
        title="Everything we do, and how we do it."
        lede={`Ten service lines, all handled in-house by licensed plumbers. ${company.yearsInBusiness} years of doing this in Volusia County means we've likely seen your exact problem before — probably in a house built the same decade.`}
        crumbs={[{ label: "Services" }]}
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
        <RevealGroup className="grid gap-px overflow-hidden rounded-[4px] border border-navy-700 bg-navy-700 lg:grid-cols-2">
          {services.map((s) => (
            <RevealItem key={s.slug} y={18}>
              <Link
                to={`/services/${s.slug}`}
                className="group relative flex h-full flex-col bg-navy-900 p-8 transition-colors duration-300 hover:bg-navy-800 md:p-10"
              >
                <span className="absolute inset-y-0 left-0 w-px scale-y-0 bg-gradient-to-b from-transparent via-copper-500 to-transparent transition-transform duration-500 group-hover:scale-y-100" />
                <div className="flex items-start justify-between gap-6">
                  <ServiceIcon
                    name={s.icon}
                    className="h-9 w-9 shrink-0 text-water-500 transition-colors duration-300 group-hover:text-copper-500"
                  />
                  <ArrowRight className="h-5 w-5 shrink-0 text-bone/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-copper-500" />
                </div>

                <h2 className="mt-7 font-display text-[1.6rem] font-bold text-bone">{s.title}</h2>
                <p className="mt-1.5 text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-copper-500">
                  {s.tagline}
                </p>
                <p className="mt-5 flex-1 text-[0.93rem] leading-relaxed text-bone/55">
                  {s.intro.length > 210 ? `${s.intro.slice(0, 210).trimEnd()}…` : s.intro}
                </p>

                <ul className="mt-6 space-y-2 border-t border-navy-700 pt-5">
                  {s.includes.slice(0, 3).map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[0.85rem] leading-snug text-bone/45"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-water-500" />
                      {i}
                    </li>
                  ))}
                </ul>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CtaBand
        eyebrow="Not sure which one"
        heading="Describe it and we'll tell you what it is."
        body="You don't need to diagnose it yourself. Tell us what you're seeing — the noise, the stain, the smell, the bill — and we'll tell you what's likely going on and what it takes to fix."
      />
    </>
  );
}
