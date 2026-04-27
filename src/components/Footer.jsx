import React from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/history", label: "History" },
  { to: "/gallery", label: "Gallery" },
  { to: "/visit", label: "Visit" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/danfoleyspub_/",
    icon: "fa-brands fa-instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/danfoleysannascaul/",
    icon: "fa-brands fa-facebook",
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100 border-t border-cream-100/10">
      <div className="mx-auto max-w-page px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="block">
              <span className="font-display text-3xl text-cream-50 leading-none">
                Dan Foley's Pub
              </span>
              <span className="block mt-2 text-xs uppercase tracking-widest text-rose-300 font-semibold">
                Annascaul · Co. Kerry
              </span>
            </Link>
            <p className="mt-4 text-cream-200/80 text-sm leading-relaxed max-w-sm">
              A heritage pub in the heart of Annascaul. Drop in for a pint, a
              story, and a welcome by the famous pink front.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-cream-200 text-xs font-semibold uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-cream-200/80 hover:text-cream-50 transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit / socials */}
          <div>
            <h4 className="text-cream-200 text-xs font-semibold uppercase tracking-widest mb-4">
              Find us
            </h4>
            <ul className="space-y-2 text-sm text-cream-200/80">
              <li>Annascaul, Co. Kerry, Ireland</li>
              <li className="pt-2 flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 text-cream-100 hover:border-rose-300 hover:text-rose-300 transition"
                  >
                    <i className={`${s.icon} text-base`} aria-hidden />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream-100/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-cream-200/60">
          <p>© {new Date().getFullYear()} Dan Foley's Pub.</p>
          <p>
            <a
              href="https://www.webdev.daranewso.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream-50 transition"
            >
              Site by Dara Newsome →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
