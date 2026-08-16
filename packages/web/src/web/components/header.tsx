import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { company } from "../lib/company";
import { services } from "../lib/services";
import { cn } from "../lib/utils";

const nav = [
  { label: "Services", href: "/services", children: true },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-copper-500 focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-400",
          scrolled
            ? "border-b border-navy-700/80 bg-navy-900/92 backdrop-blur-xl py-3"
            : "border-b border-transparent py-5",
        )}
      >
        <div className="container-page flex items-center justify-between gap-6">
          <Link to="/" aria-label={`${company.name} — home`}>
            <Logo compact={scrolled} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMenu(true)}
                  onMouseLeave={() => setMenu(false)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-1.5 px-3.5 py-2 text-[0.82rem] font-semibold transition-colors",
                      location.startsWith("/services")
                        ? "text-water-300"
                        : "text-bone/75 hover:text-bone",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform", menu && "rotate-180")}
                    />
                  </Link>

                  {menu && (
                    <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                      <div className="grid grid-cols-2 gap-1 rounded-[4px] border border-navy-700 bg-navy-800/98 p-3 shadow-2xl backdrop-blur-xl">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="group rounded-[3px] px-3 py-2.5 transition-colors hover:bg-navy-700/70"
                          >
                            <span className="block text-[0.82rem] font-semibold text-bone group-hover:text-water-300">
                              {s.title}
                            </span>
                            <span className="block text-[0.72rem] leading-snug text-bone/45">
                              {s.tagline}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-3.5 py-2 text-[0.82rem] font-semibold transition-colors",
                    location === item.href ? "text-water-300" : "text-bone/75 hover:text-bone",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={company.phoneHref}
              className="hidden items-center gap-2.5 rounded-[3px] bg-copper-500 px-5 py-3 font-sans text-[0.82rem] font-extrabold text-ink transition-all hover:-translate-y-0.5 hover:bg-copper-300 md:inline-flex"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {company.phone}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-[3px] border border-navy-700 p-2.5 text-bone lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-navy-900/98 pt-24 pb-32 backdrop-blur-xl lg:hidden">
          <nav className="container-page flex flex-col" aria-label="Mobile">
            {nav
              .filter((n) => !n.children)
              .map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="border-b border-navy-700/70 py-4 font-display text-2xl font-bold text-bone"
                >
                  {item.label}
                </Link>
              ))}

            <p className="t-eyebrow mt-8 mb-3 text-copper-500">All Services</p>
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="border-b border-navy-700/40 py-3 text-[0.95rem] font-semibold text-bone/80"
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* mobile sticky call bar — the phone must be reachable at any scroll position */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-navy-700 bg-navy-800/97 backdrop-blur-xl md:hidden">
        <a
          href={company.phoneHref}
          className="flex items-center justify-center gap-2 bg-copper-500 py-4 font-sans text-[0.85rem] font-extrabold text-ink"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          {company.phone}
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center py-4 font-sans text-[0.85rem] font-bold uppercase tracking-wide text-bone"
        >
          Request Callback
        </Link>
      </div>
    </>
  );
}
