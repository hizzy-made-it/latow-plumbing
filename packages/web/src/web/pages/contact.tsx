import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { CallbackForm } from "../components/callback-form";
import { Eyebrow, Section } from "../components/ui/primitives";
import { Reveal } from "../components/ui/reveal";
import { company, serviceAreas } from "../lib/company";
import { useSeo } from "../hooks/use-seo";

export default function Contact() {
  useSeo({
    title: "Contact Latow Brothers Plumbing | Orange City, FL · (386) 775-4422",
    description:
      "Call (386) 775-4422 or request a callback. Latow Brothers Plumbing, 180 W Blue Springs Ave, Orange City FL 32763. Mon–Fri 8am–4pm. Licensed CFC057023 since 1978.",
    path: "/contact",
  });

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Call us, or tell us what's going on."
        lede="During office hours the fastest path is the phone — you'll reach the same office that dispatches our trucks. Prefer to type it out? The form gets a callback the same business day."
        crumbs={[{ label: "Contact" }]}
      />

      <Section tone="navy">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* details */}
          <Reveal>
            <Eyebrow>Direct lines</Eyebrow>

            <a
              href={company.phoneHref}
              className="mt-7 flex items-start gap-4 rounded-[4px] border border-copper-500/40 bg-copper-500/10 p-6 transition-colors hover:bg-copper-500/20"
            >
              <Phone className="mt-1 h-6 w-6 shrink-0 text-copper-500" strokeWidth={2.2} />
              <span>
                <span className="block font-display text-[2rem] font-extrabold leading-none text-bone">
                  {company.phone}
                </span>
                <span className="mt-2 block text-[0.82rem] text-bone/50">
                  Mon – Fri, 8:00 am – 4:00 pm · priority dispatch for active leaks
                </span>
              </span>
            </a>

            <ul className="mt-8 space-y-6">
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-start gap-4 transition-colors hover:text-water-300"
                >
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-water-500" />
                  <span>
                    <span className="block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-bone/40">
                      Email
                    </span>
                    <span className="mt-1 block break-all text-[0.98rem] font-semibold text-bone">
                      {company.email}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={company.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 transition-colors hover:text-water-300"
                >
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-water-500" />
                  <span>
                    <span className="block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-bone/40">
                      Shop address
                    </span>
                    <span className="mt-1 block text-[0.98rem] font-semibold text-bone">
                      {company.address.street}
                      <br />
                      {company.address.city}, {company.address.state} {company.address.zip}
                    </span>
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-water-500" />
                <span className="w-full">
                  <span className="block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-bone/40">
                    Hours
                  </span>
                  <ul className="mt-2 divide-y divide-navy-700 border-y border-navy-700">
                    {company.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex items-center justify-between py-2.5 text-[0.9rem]"
                      >
                        <span className="text-bone/75">{h.day}</span>
                        <span className={h.open ? "font-semibold text-water-300" : "text-bone/35"}>
                          {h.open ? `${h.open} – ${h.close}` : "Closed"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </span>
              </li>

              <li className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-water-500" />
                <span>
                  <span className="block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-bone/40">
                    Licenses
                  </span>
                  <span className="mt-1 block text-[0.98rem] font-semibold text-bone">
                    {company.licenses.join(" · ")}
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <div
              id="contact-form"
              className="rounded-[4px] border border-navy-700 bg-navy-800/60 p-7 md:p-10"
            >
              <Eyebrow>Request a callback</Eyebrow>
              <h2 className="t-display-md mt-5 text-bone">Tell us what's happening.</h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-bone/55">
                Two fields are required — your name and a number we can reach you at. Everything
                else just helps us show up with the right parts on the truck.
              </p>
              <div className="mt-9">
                <CallbackForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* map */}
      <section className="relative border-y border-navy-700">
        <iframe
          title={`Map to ${company.name} in Orange City, FL`}
          src="https://www.openstreetmap.org/export/embed.html?bbox=-81.3184%2C28.9397%2C-81.2784%2C28.9597&layer=mapnik&marker=28.9497%2C-81.2984"
          className="h-[420px] w-full grayscale-[0.35] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* areas */}
      <Section tone="bone" className="py-20 md:py-24">
        <h2 className="font-display text-[1.75rem] font-bold text-ink">
          Cities we're dispatched to daily
        </h2>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {serviceAreas.map((a) => (
            <span
              key={a.city}
              className="rounded-[3px] border border-bone-200 bg-white px-4 py-2.5 text-[0.85rem] font-semibold text-ink"
            >
              {a.city}, FL <span className="ml-1 text-slate-600/70">{a.zip}</span>
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
