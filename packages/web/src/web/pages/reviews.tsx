import { useMemo, useState } from "react";
import { Quote } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { CtaBand } from "../components/cta-band";
import { Section, Stars } from "../components/ui/primitives";
import { Reveal, RevealGroup, RevealItem } from "../components/ui/reveal";
import { company, reviews } from "../lib/company";
import { useSeo } from "../hooks/use-seo";
import { cn } from "../lib/utils";

const filters = ["All", "Water Heaters", "Plumbing Repairs", "General Plumbing", "Commercial"];

export default function Reviews() {
  const [active, setActive] = useState("All");

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: company.rating.value,
        reviewCount: company.rating.count,
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
        reviewBody: r.text,
      })),
    }),
    [],
  );

  useSeo({
    title: "Reviews | Latow Brothers Plumbing — 4.6★ in Orange City, FL",
    description:
      "Read real customer reviews for Latow Brothers Plumbing in Orange City, FL. 4.6 stars across 75 ratings, 96% recommend. Water heaters, repairs, re-piping and more since 1978.",
    path: "/reviews",
    jsonLd,
  });

  const list = active === "All" ? reviews : reviews.filter((r) => r.service === active);

  return (
    <>
      <PageHero
        eyebrow="What customers say"
        title={`${company.rating.value} stars, ${company.rating.count} ratings, ${company.facebookRecommend} would recommend.`}
        lede="These are real reviews from Volusia County customers. Notice how many of them mention the office staff and the technicians by name — that's the part you can't franchise."
        crumbs={[{ label: "Reviews" }]}
      >
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <Stars n={5} className="scale-125 origin-left" />
            <span className="font-display text-3xl font-extrabold text-bone">
              {company.rating.value}
            </span>
          </div>
          <span className="h-8 w-px bg-navy-600" />
          <span className="text-[0.9rem] text-bone/55">
            Based on {company.rating.count} customer ratings across Google, Facebook &amp; Yelp
          </span>
        </div>
      </PageHero>

      <Section tone="navy">
        <Reveal>
          <div className="flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-[3px] border px-4 py-2.5 font-sans text-[0.8rem] font-bold uppercase tracking-[0.08em] transition-all",
                  active === f
                    ? "border-copper-500 bg-copper-500 text-ink"
                    : "border-navy-700 bg-navy-800 text-bone/60 hover:border-water-400/50 hover:text-bone",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {list.map((r) => (
            <RevealItem key={`${r.name}-${r.date}`} y={18}>
              <figure className="flex h-full flex-col rounded-[4px] border border-navy-700 bg-navy-800/50 p-8">
                <div className="flex items-start justify-between gap-4">
                  <Stars n={r.rating} />
                  <Quote className="h-7 w-7 shrink-0 text-copper-500/30" />
                </div>
                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-bone/70">
                  {r.text}
                </blockquote>
                <figcaption className="mt-7 flex items-center justify-between gap-4 border-t border-navy-700 pt-5">
                  <span>
                    <span className="block font-display text-[1.05rem] font-bold text-bone">
                      {r.name}
                    </span>
                    <span className="mt-0.5 block text-[0.76rem] text-bone/40">{r.date}</span>
                  </span>
                  <span className="rounded-[3px] border border-navy-700 bg-navy-900 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-water-400">
                    {r.service}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        {list.length === 0 && (
          <p className="mt-12 text-[0.95rem] text-bone/50">
            No reviews tagged {active} yet — but we've done plenty of it. Call{" "}
            {company.phone} and ask.
          </p>
        )}
      </Section>

      <CtaBand
        eyebrow="Your turn"
        heading="Let's earn one of these from you."
        body="Same office, same crews, same warranty as every review on this page. Tell us what's going on and we'll call you back."
      />
    </>
  );
}
