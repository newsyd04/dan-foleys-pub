import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import Button from "../components/Button";
import SEO from "../components/SEO";

export default function HistoryPage() {
  return (
    <>
      <SEO
        title="Our story"
        description="The history of Dan Foley's Pub in Annascaul · magician, pink front, the most photographed pub in Kerry, and the 2025 reopening that brought it back."
      />

      <PageHeader
        eyebrow="Our story"
        title="A magician, a pink front, and a long quiet."
        description="The pub of Dan Foley · member of the Magic Circle, retired publican, and the man who made Annascaul's pink corner one of the most photographed buildings in Ireland."
      />

      <Section tone="cream" spacing="tight">
        <div className="max-w-prose mx-auto">
          <FadeIn>
            <p className="text-charcoal-800/90 text-lg leading-relaxed font-sans">
              Annascaul is a small village on the road between Tralee and
              Dingle, sat at the foot of the mountains and a short walk from
              Annascaul Lake. For decades, anyone driving the peninsula stopped
              for the same reason: the pink front of Dan Foley's, painted up
              with a gas cylinder and three words · <em>it's an illusion</em>.
            </p>
          </FadeIn>

          <FadeIn delay={0.05} className="mt-12">
            <h2 className="font-display text-3xl md:text-4xl text-burgundy-700 mb-4">
              The publican magician.
            </h2>
            <p className="text-charcoal-800/85 leading-relaxed">
              Dan Foley was no ordinary publican. He was a retired magician
              and member of the Magic Circle, known for sleight-of-hand. The
              most-photographed pub in Kerry was
              presided over by a man whose entire trade was illusion · and he
              made the irony part of the front of the building. The pink,
              blue and red façade, with the words painted across it, became
              the staple image of the Real Ireland Design postcard series and
              has appeared in publications about Ireland all over the world.
            </p>
          </FadeIn>

          <FadeIn delay={0.05} className="mt-12">
            <blockquote className="border-l-4 border-burgundy-600 pl-6 py-2 my-4">
              <p className="font-display text-2xl md:text-3xl text-charcoal-900 italic leading-snug">
                "It's an illusion."
              </p>
              <footer className="mt-3 text-sm text-charcoal-800/65">
                Painted across the front of the pub.
              </footer>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.05} className="mt-12">
            <h2 className="font-display text-3xl md:text-4xl text-burgundy-700 mb-4">
              A connection to Tom Crean.
            </h2>
            <p className="text-charcoal-800/85 leading-relaxed">
              Annascaul is famous as the home of Tom Crean, the Antarctic
              explorer who served on three expeditions to the South Pole and
              came home to open the South Pole Inn just up the road. Crean's
              wife, Ellen Herlihy, was born in Annascaul · by some accounts
              at the very building that would later become Dan Foley's. Two
              pubs, two extraordinary men, one small village.
            </p>
          </FadeIn>

          <FadeIn delay={0.05} className="mt-12">
            <h2 className="font-display text-3xl md:text-4xl text-burgundy-700 mb-4">
              A long quiet.
            </h2>
            <p className="text-charcoal-800/85 leading-relaxed">
              Dan Foley died in 1990. The pub closed with him, and the
              building sat shuttered for the better part of three and a half
              decades. The vibrant colours faded, the enamel "Guinness is
              good for you" sign rusted on the front, and the door stayed
              shut to the road.
            </p>
          </FadeIn>

          <FadeIn delay={0.05} className="mt-12">
            <h2 className="font-display text-3xl md:text-4xl text-burgundy-700 mb-4">
              Back in 2025.
            </h2>
            <p className="text-charcoal-800/85 leading-relaxed">
              In June 2025, Dan Foley's reopened in time for the bank
              holiday weekend, restored to its former glory and back behind
              the bar after thirty-five years. The illusion, it turns out,
              was that it was ever really gone.
            </p>
          </FadeIn>

          <FadeIn delay={0.05} className="mt-14 text-center">
            <Button to="/visit" variant="primary" size="md">
              Come see for yourself
            </Button>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
