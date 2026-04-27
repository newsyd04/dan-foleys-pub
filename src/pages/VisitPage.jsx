import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import SEO from "../components/SEO";

const HOURS = [
  // TODO: confirm · placeholder hours, based on "open from 2 pm every day"
  // pattern reported by visitors. Pub to confirm exact closing times and any
  // off-season variation.
  { day: "Monday", time: "2:00 pm to late" },
  { day: "Tuesday", time: "2:00 pm to late" },
  { day: "Wednesday", time: "2:00 pm to late" },
  { day: "Thursday", time: "2:00 pm to late" },
  { day: "Friday", time: "2:00 pm to late" },
  { day: "Saturday", time: "2:00 pm to late" },
  { day: "Sunday", time: "2:00 pm to late" },
];

const SOCIALS = [
  {
    label: "Instagram",
    handle: "@danfoleyspub_",
    href: "https://www.instagram.com/danfoleyspub_/",
    icon: "fa-brands fa-instagram",
  },
  {
    label: "Facebook",
    handle: "Dan Foley's Pub Annascaul",
    href: "https://www.facebook.com/danfoleysannascaul/",
    icon: "fa-brands fa-facebook",
  },
];

export default function VisitPage() {
  return (
    <>
      <SEO
        title="Find us"
        description="Dan Foley's Pub is in the heart of Annascaul village, Co. Kerry · easy stop on the road between Tralee, Dingle, and Inch Beach."
      />

      <PageHeader
        eyebrow="Find us"
        title="In the middle of Annascaul."
        description="On the road between Tralee and Dingle, with the pink front you can't miss."
      />

      <Section tone="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: details */}
          <FadeIn className="space-y-10">
            <div>
              <h2 className="text-burgundy-600 text-xs uppercase tracking-widest font-semibold mb-3">
                Address
              </h2>
              <p className="font-display text-2xl text-charcoal-900 leading-tight">
                Dan Foley's Pub
                <br />
                Main Street, Ardrinane
                <br />
                Annascaul
                <br />
                Co. Kerry · V92 YH2H
              </p>
            </div>

            <div>
              <h2 className="text-burgundy-600 text-xs uppercase tracking-widest font-semibold mb-3">
                Opening hours
              </h2>
              <p className="text-charcoal-800/65 text-xs mb-3 italic">
                {/* TODO: confirm hours with the pub */}
                Hours can vary on bank holidays and during the off-season.
              </p>
              <ul className="divide-y rule-cream border-y rule-cream">
                {HOURS.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className="font-semibold text-charcoal-900">
                      {row.day}
                    </span>
                    <span className="text-charcoal-800/80">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-burgundy-600 text-xs uppercase tracking-widest font-semibold mb-3">
                Follow along
              </h2>
              <ul className="space-y-3">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-charcoal-900 hover:text-burgundy-700 transition group"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-burgundy-600/10 text-burgundy-700 group-hover:bg-burgundy-600 group-hover:text-cream-50 transition">
                        <i className={s.icon} aria-hidden />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">
                          {s.label}
                        </span>
                        <span className="block text-xs text-charcoal-800/70">
                          {s.handle}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right: map + getting here */}
          <FadeIn delay={0.1} className="space-y-6">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-soft border rule-cream shadow-warm">
              <iframe
                title="Map of Dan Foley's Pub, Annascaul, Co. Kerry"
                src="https://www.google.com/maps?q=Dan+Foley's+Pub,+Annascaul,+Co.+Kerry,+V92+YH2H&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="bg-cream-100 paper-texture rounded-soft border rule-cream p-6">
              <h3 className="font-display text-xl text-charcoal-900 mb-3">
                Getting here
              </h3>
              <ul className="space-y-2 text-sm text-charcoal-800/85 leading-relaxed">
                <li>
                  <strong>From Tralee:</strong> about 40 minutes west on the
                  N86.
                </li>
                <li>
                  <strong>From Dingle:</strong> about 20 minutes east on the
                  N86.
                </li>
                <li>
                  <strong>From Inch Beach:</strong> about 10 minutes around
                  the head of the bay.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
