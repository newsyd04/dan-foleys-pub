import React, { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { to: "/history", label: "History" },
  { to: "/gallery", label: "Gallery" },
  { to: "/visit", label: "Visit" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", isOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const overHero = location.pathname === "/" && !scrolled && !isOpen;

  const navBgClass = scrolled
    ? "bg-cream-50/90 backdrop-blur border-b rule-cream"
    : overHero
    ? "bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/30 to-transparent"
    : "bg-transparent";

  const brandClass = overHero ? "text-cream-50" : "text-charcoal-900";
  const eyebrowClass = overHero ? "text-rose-300" : "text-burgundy-600";
  const burgerClass = overHero
    ? "border-cream-100/30 text-cream-50 hover:bg-cream-50/10"
    : "border-charcoal-900/20 text-charcoal-900 hover:bg-charcoal-900/5";

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${navBgClass}`}
      >
        <div className="mx-auto max-w-page px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className={`flex items-baseline gap-2.5 transition-colors ${brandClass}`}
            aria-label="Home"
          >
            <span className="font-display text-2xl tracking-tight leading-none">
              Dan Foley's
            </span>
            <span
              className={`hidden sm:inline text-xs uppercase tracking-widest font-semibold transition-colors ${eyebrowClass}`}
            >
              Annascaul
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition ${
                      isActive
                        ? overHero
                          ? "text-cream-50 bg-cream-50/15"
                          : "text-burgundy-700 bg-burgundy-600/10"
                        : overHero
                        ? "text-cream-100/90 hover:text-cream-50 hover:bg-cream-50/10"
                        : "text-charcoal-800 hover:text-burgundy-700 hover:bg-charcoal-900/5"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/visit"
              className="hidden md:inline-flex items-center gap-1.5 bg-burgundy-600 hover:bg-burgundy-700 text-cream-50 px-4 py-2 rounded-full text-sm font-semibold transition shadow-warm"
            >
              Find us
              <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden />
            </Link>

            <button
              type="button"
              className={`md:hidden inline-flex items-center gap-2 h-10 px-3 rounded-full border transition-colors relative z-50 ${burgerClass}`}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((o) => !o)}
            >
              <span className="relative w-4 h-3 inline-block">
                <span
                  className={`absolute left-0 right-0 h-[2px] bg-current rounded transition ${
                    isOpen ? "top-[5px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-[2px] bg-current rounded transition top-[5px] ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-[2px] bg-current rounded transition ${
                    isOpen ? "top-[5px] -rotate-45" : "top-[10px]"
                  }`}
                />
              </span>
              <span className="text-sm font-medium">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-cream-50 md:hidden transition-opacity duration-200 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col pt-24 px-6 pb-10">
          <ul className="flex-1 flex flex-col items-stretch gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `block px-4 py-4 rounded-xl text-2xl font-display transition ${
                      isActive
                        ? "text-burgundy-700 bg-burgundy-600/10"
                        : "text-charcoal-900 hover:bg-charcoal-900/5"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/visit"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-burgundy-600 hover:bg-burgundy-700 text-cream-50 px-6 py-4 rounded-full text-base font-semibold"
          >
            Find us
            <i className="fa-solid fa-arrow-right" aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
}
