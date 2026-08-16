import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Logo } from "./logo";
import { company, serviceAreas } from "../lib/company";
import { services } from "../lib/services";
import { Stars } from "./ui/primitives";

export function Footer() {
  return (
    <footer className="relative border-t border-navy-700 bg-ink noise">
      <div className="container-page relative z-[2] py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* brand */}
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-[0.92rem] leading-relaxed text-bone/55">
              Family-owned and operated in Orange City since {company.founded}. Serving Volusia
              County for {company.yearsInBusiness} years and counting.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Stars n={5} />
              <span className="text-[0.85rem] font-semibold text-bone/70">
                {company.rating.value} · {company.rating.count} reviews
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {company.licenses.map((l) => (
                <span
                  key={l}
                  className="inline-flex items-center gap-1.5 rounded-[3px] border border-navy-700 bg-navy-800 px-3 py-1.5 text-[0.7rem] font-bold tracking-wide text-water-400"
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* services */}
          <div>
            <h3 className="t-eyebrow mb-5 text-copper-500">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-[0.88rem] text-bone/60 transition-colors hover:text-water-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* areas */}
          <div>
            <h3 className="t-eyebrow mb-5 text-copper-500">Service Areas</h3>
            <ul className="space-y-2.5">
              {serviceAreas.map((a) => (
                <li key={a.city} className="text-[0.88rem] text-bone/60">
                  {a.city}, FL
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-[0.88rem] font-semibold text-water-400 hover:text-water-300"
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="t-eyebrow mb-5 text-copper-500">Get In Touch</h3>
            <ul className="space-y-4 text-[0.88rem]">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-start gap-3 font-display text-xl font-bold text-bone transition-colors hover:text-copper-300"
                >
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-copper-500" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-start gap-3 break-all text-bone/60 transition-colors hover:text-water-300"
                >
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-water-500" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-bone/60 transition-colors hover:text-water-300"
                >
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-water-500" />
                  <span>
                    {company.address.street}
                    <br />
                    {company.address.city}, {company.address.state} {company.address.zip}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-bone/60">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-water-500" />
                <span>
                  Mon – Fri: 8:00 am – 4:00 pm
                  <br />
                  <span className="text-bone/40">Sat &amp; Sun: Closed</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-navy-700/70 pt-8 text-[0.78rem] text-bone/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved. Licensed &amp;
            insured — {company.licenses.join(" · ")}.
          </p>
          <p>
            Plumbing contractor serving Orange City, DeLand, Deltona, DeBary &amp; Volusia County,
            Florida.
          </p>
        </div>
      </div>
    </footer>
  );
}
