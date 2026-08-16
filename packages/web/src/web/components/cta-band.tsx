import { Phone, Clock, ShieldCheck } from "lucide-react";
import { company } from "../lib/company";
import { CallbackForm } from "./callback-form";
import { Eyebrow } from "./ui/primitives";
import { Reveal } from "./ui/reveal";

/** Closing conversion block used at the bottom of every page. */
export function CtaBand({
  eyebrow = "Get it handled",
  heading = "Tell us what's leaking, dripping, or not draining.",
  body = "Send it over and we'll call you back with a straight answer. No call center, no runaround — you'll talk to the same office that's been dispatching Latow trucks across Volusia County since 1978.",
  defaultService,
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
  defaultService?: string;
}) {
  return (
    <section id="contact-form" className="relative overflow-hidden bg-ink noise py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(90% 70% at 85% 0%, rgba(50,116,138,0.35) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative z-[2] grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="t-display-md mt-6 text-bone">{heading}</h2>
          <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-bone/60">{body}</p>

          <a
            href={company.phoneHref}
            className="mt-9 inline-flex items-center gap-3.5 rounded-[3px] border border-copper-500/50 bg-copper-500/10 px-6 py-4 transition-colors hover:bg-copper-500/20"
          >
            <Phone className="h-5 w-5 text-copper-500" strokeWidth={2.5} />
            <span>
              <span className="block font-display text-2xl font-extrabold leading-none text-bone">
                {company.phone}
              </span>
              <span className="mt-1 block text-[0.72rem] uppercase tracking-[0.16em] text-bone/45">
                Talk to a person
              </span>
            </span>
          </a>

          <ul className="mt-9 space-y-3 text-[0.9rem] text-bone/55">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-water-500" />
              Mon – Fri, 8:00 am – 4:00 pm · priority dispatch for active leaks
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-water-500" />
              Licensed {company.licenses.join(" & ")} · 1-Year Labor Warranty
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[4px] border border-navy-700 bg-navy-900/80 p-7 backdrop-blur-sm md:p-10">
            <CallbackForm defaultService={defaultService} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
