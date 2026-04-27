import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import Button from "../components/Button";
import FadeIn from "../components/FadeIn";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="The famous pink-fronted pub of Annascaul, Co. Kerry. Once run by magician Dan Foley, reopened in 2025."
      />

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        {/* Hero photo (placeholder gradient until real photo lands) */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-700 via-burgundy-600 to-charcoal-900" />
        <div className="absolute inset-0 hero-overlay" />
        <Container className="relative pb-24 md:pb-32 pt-32">
          <p className="text-rose-300 text-xs uppercase tracking-widest font-semibold mb-5">
            Annascaul · Co. Kerry
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-cream-50 leading-[0.95] max-w-4xl">
            It's an
            <br />
            illusion.
          </h1>
          <p className="mt-7 text-lg md:text-xl text-cream-100/90 leading-relaxed max-w-xl font-sans">
            The famous pink-fronted pub of Annascaul, Co. Kerry · once run by
            a magician, photographed all over the world, and back behind the
            bar after thirty-five years.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/visit" variant="gold" size="lg">
              <i className="fa-solid fa-location-dot" aria-hidden /> Find us
            </Button>
            <Button to="/history" variant="ghostDark" size="lg">
              Read our story
            </Button>
          </div>
        </Container>
      </section>

      {/* WELCOME */}
      <Section tone="parchment">
        <FadeIn className="max-w-prose mx-auto text-center">
          <p className="text-burgundy-600 text-xs uppercase tracking-widest font-semibold mb-4">
            Welcome
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-900">
            One of Ireland's most photographed pubs.
          </h2>
          <p className="mt-6 text-charcoal-800/85 text-base md:text-lg leading-relaxed">
            Sat in the village of Annascaul on the road between Tralee and
            Dingle, Dan Foley's has been a postcard-staple of Kerry for
            decades, instantly recognisable by its pink, blue and red front
            and the words painted across it. After a long quiet following
            Dan's passing in 1990, the door is open again.
          </p>
          <div className="mt-8">
            <Link
              to="/history"
              className="inline-flex items-center gap-1.5 text-burgundy-600 hover:text-burgundy-700 font-semibold text-sm"
            >
              A bit of our story
              <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* FEATURED PHOTOS TEASER */}
      <Section tone="cream">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-burgundy-600 text-xs uppercase tracking-widest font-semibold mb-3">
            Inside &amp; out
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal-900">
            The pub in pictures.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((n, i) => (
            <FadeIn
              key={n}
              delay={i * 0.08}
              className="aspect-[4/5] bg-burgundy-700/15 rounded-soft border rule-cream paper-texture flex items-center justify-center text-charcoal-800/40 text-sm"
            >
              Photo {n}
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/gallery" variant="ghost" size="md">
            See more photos{" "}
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden />
          </Button>
        </div>
      </Section>

      {/* VISIT TEASER */}
      <Section tone="dark" spacing="tight">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <p className="text-rose-300 text-xs uppercase tracking-widest font-semibold mb-3">
              Plan your visit
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-cream-50">
              Drop in next time you're on the peninsula.
            </h2>
            <p className="mt-4 text-cream-200/85 leading-relaxed">
              We're in the middle of Annascaul village · easy stop on the way
              to or from Dingle, Inch Beach, or the Conor Pass.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col gap-3">
            <div className="flex items-start gap-3 text-cream-100">
              <i
                className="fa-solid fa-location-dot text-rose-300 mt-1"
                aria-hidden
              />
              <span>Annascaul, Co. Kerry, Ireland</span>
            </div>
            <div className="flex items-start gap-3 text-cream-100">
              <i className="fa-solid fa-clock text-rose-300 mt-1" aria-hidden />
              <span>{/* TODO: confirm hours */}Open from 2 pm daily</span>
            </div>
            <div className="mt-3">
              <Button to="/visit" variant="gold" size="md">
                Get directions
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
