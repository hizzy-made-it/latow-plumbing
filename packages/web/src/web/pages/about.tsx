import { Link } from "wouter";
import { ArrowRight, Award, ShieldCheck, Users, Wrench } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { CtaBand } from "../components/cta-band";
import { Eyebrow, PipeRule, Section, Stars } from "../components/ui/primitives";
import { Reveal, RevealGroup, RevealItem } from "../components/ui/reveal";
import { company } from "../lib/company";
import { useSeo } from "../hooks/use-seo";

const timeline = [
  {
    year: "1978",
    title: "The doors open in Volusia County",
    body: "Latow Brothers Plumbing starts working Central Florida homes — back when most of Orange City was still orange groves and DeLand's plumbing was mostly galvanized.",
  },
  {
    year: "1980s – 90s",
    title: "Growth follows the county",
    body: "Deltona and DeBary build out fast. We rough-in new construction alongside repairing everything we'd installed a decade earlier — which is how you learn what actually lasts in Florida water.",
  },
  {
    year: "2000s",
    title: "Solar, treatment, and tankless",
    body: "Well water and hard water pushed treatment work to the front. Florida sun made solar water heating worth doing properly. We took on both instead of subbing them out.",
  },
  {
    year: "Today",
    title: `${company.yearsInBusiness} years, same shop`,
    body: `Still family-owned, still dispatching from ${company.address.street} in Orange City, still licensed ${company.licenses.join(" and ")}. Ranked in the top 6% of licensed contractors in Florida.`,
  },
];

export default function About() {
  useSeo({
    title: "About Latow Brothers Plumbing | Family-Owned in Orange City Since 1978",
    description:
      "Latow Brothers Plumbing has served Central Florida since 1978. Family-owned, licensed CFC057023 & CFC057024, based in Orange City FL with a 1-year labor warranty on every job.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        eyebrow={`Family-owned since ${company.founded}`}
        title={`${company.yearsInBusiness} years under Volusia County's floors.`}
        lede="Plumbing companies get bought, rebranded, and franchised out. We didn't. The name on the truck is the family that owns it, and the shop it leaves from hasn't moved."
        crumbs={[{ label: "About" }]}
      />

      {/* story */}
      <Section tone="navy">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="t-display-md mt-6 text-bone">
              A plumbing company that answers its own phone.
            </h2>
            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-bone/65">
              <p>
                Latow Brothers Plumbing, Inc. has been a licensed Florida plumbing contractor since{" "}
                {company.founded}. In that time we've re-piped houses built before the county paved
                their streets, replaced water heaters in the middle of a cold snap that had every
                plumber in Volusia backed up a week, and roughed-in subdivisions that are now
                twenty-year-old neighborhoods calling us back.
              </p>
              <p>
                What hasn't changed is how it works. You call the office and reach someone local.
                They know which trucks are where. The plumber who shows up is on our payroll, not a
                subcontractor with our magnet on his door, and he's the one who explains what he
                found before he quotes it.
              </p>
              <p>
                Read our reviews and you'll notice the pattern: people mention the office by name,
                mention the technicians by name, and mention that the house was clean when the crew
                left. That's not a program we rolled out. That's just how {company.yearsInBusiness}{" "}
                years of working in your neighbors' homes trains a company to behave.
              </p>
            </div>

            <PipeRule className="mt-10" />

            <div className="mt-8 flex items-center gap-4">
              <Stars n={5} />
              <span className="text-[0.9rem] text-bone/60">
                <strong className="font-semibold text-bone">{company.rating.value} / 5</strong> from{" "}
                {company.rating.count} reviews ·{" "}
                <strong className="font-semibold text-bone">{company.facebookRecommend}</strong>{" "}
                would recommend
              </span>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-px self-start bg-navy-700">
            {[
              {
                Icon: Users,
                t: "Family owned & operated",
                b: "Same family, same name, since 1978. No franchise fees, no private equity, no call center in another state.",
              },
              {
                Icon: ShieldCheck,
                t: `Licensed ${company.licenses.join(" & ")}`,
                b: "Florida Certified Plumbing Contractor. Licensed, insured, and accountable to the state for every job we sign.",
              },
              {
                Icon: Award,
                t: "1-Year Labor Warranty",
                b: "A full year on our labor, on top of manufacturer coverage for parts and fixtures.",
              },
              {
                Icon: Wrench,
                t: "In-house crews",
                b: "Our own licensed plumbers on our own trucks. Nothing farmed out to whoever was available.",
              },
            ].map(({ Icon, t, b }) => (
              <RevealItem key={t} y={16}>
                <div className="bg-navy-900 p-7">
                  <Icon className="h-6 w-6 text-copper-500" strokeWidth={1.8} />
                  <h3 className="mt-4 font-display text-[1.15rem] font-bold text-bone">{t}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-bone/50">{b}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* timeline */}
      <Section tone="bone">
        <Reveal>
          <p className="t-eyebrow flex items-center gap-3 text-copper-700">
            <span className="h-px w-8 bg-copper-700/60" />
            The long version
          </p>
          <h2 className="t-display-md mt-6 max-w-2xl text-ink">
            {company.founded} to {new Date().getFullYear()}, in Volusia County the whole time.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-px bg-bone-200 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t) => (
            <RevealItem key={t.year} y={18}>
              <div className="h-full bg-bone p-8">
                <p className="font-display text-[1.75rem] font-extrabold leading-none text-copper-500">
                  {t.year}
                </p>
                <div className="my-5 h-px w-full bg-bone-200" />
                <h3 className="font-display text-[1.15rem] font-bold text-ink">{t.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-600">{t.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* values / hours */}
      <Section tone="deep">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
          <Reveal>
            <Eyebrow tone="water">How we run a call</Eyebrow>
            <h2 className="t-display-md mt-6 text-bone">
              Diagnose it, price it, then pick up a tool.
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  t: "We find the cause, not the symptom",
                  b: "A drain that clogs every three months has a reason. Cabling it on repeat is billable and dishonest, so we look for the belly, the roots, or the collapse actually causing it.",
                },
                {
                  t: "You hear the price first",
                  b: "Nobody likes an invoice that's a surprise. The number comes before the work, and if a smaller repair will genuinely hold, we'll say so even when it's the smaller ticket.",
                },
                {
                  t: "We work clean",
                  b: "Drop cloths, shoe covers, debris hauled out. It's your house — you shouldn't be cleaning up after us.",
                },
              ].map((v) => (
                <div key={v.t} className="border-l-2 border-copper-500/60 pl-6">
                  <h3 className="font-display text-[1.2rem] font-bold text-bone">{v.t}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-bone/55">{v.b}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[4px] border border-navy-700 bg-navy-900/70 p-8">
              <Eyebrow>Office hours</Eyebrow>
              <ul className="mt-7 divide-y divide-navy-700">
                {company.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-3.5 text-[0.92rem]"
                  >
                    <span className="font-semibold text-bone/80">{h.day}</span>
                    <span className={h.open ? "text-water-300" : "text-bone/35"}>
                      {h.open ? `${h.open} – ${h.close}` : "Closed"}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.85rem] leading-relaxed text-bone/45">
                Active leaks and no-water calls get priority dispatch during business hours. Leave a
                message outside hours and it's the first thing the office picks up.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 text-[0.85rem] font-bold uppercase tracking-[0.1em] text-water-400 transition-colors hover:text-water-300"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Work with us"
        heading={`Put ${company.yearsInBusiness} years of local plumbing on your side.`}
      />
    </>
  );
}
