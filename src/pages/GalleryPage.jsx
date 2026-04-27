import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import SEO from "../components/SEO";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import pinkFront from "../assets/photos/01-pink-front.jpg";
import cocktails from "../assets/photos/02-cocktails.jpg";
import pastries from "../assets/photos/03-pastries.jpg";
import munsterWinner from "../assets/photos/04-munster-winner.jpg";
import interiorDecor from "../assets/photos/05-interior-decor.jpg";
import frontTagged from "../assets/photos/06-front-tagged.jpg";
import janInterior from "../assets/photos/07-jan-interior.jpg";
import decInterior from "../assets/photos/08-dec-interior.jpg";

const PHOTOS = [
  { src: pinkFront, alt: "The pink front of Dan Foley's Pub, with painted gas cylinder and the words 'It's an illusion'" },
  { src: decInterior, alt: "Inside Dan Foley's Pub" },
  { src: cocktails, alt: "Cocktails at the bar" },
  { src: pastries, alt: "Pastries and treats" },
  { src: interiorDecor, alt: "Pub interior, decor detail" },
  { src: janInterior, alt: "An evening at the bar" },
  { src: frontTagged, alt: "The pub front, Annascaul village" },
  { src: munsterWinner, alt: "Munster Winner, Pub of the Year poster" },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
      <SEO
        title="Gallery"
        description="Photos of Dan Foley's Pub in Annascaul · the famous pink front, the snug interior, and the village around it."
      />

      <PageHeader
        eyebrow="Gallery"
        title="The pub in pictures."
        description="The pink front, the bar, the village. A look around Dan Foley's."
      />

      <Section tone="cream">
        {PHOTOS.length === 0 ? (
          <FadeIn className="max-w-prose mx-auto text-center">
            <div className="border border-dashed rule-cream rounded-soft p-12 bg-cream-100">
              <i
                className="fa-regular fa-images text-burgundy-600 text-3xl mb-4"
                aria-hidden
              />
              <h2 className="font-display text-2xl text-charcoal-900">
                Photos coming soon.
              </h2>
              <p className="mt-3 text-charcoal-800/75 text-sm leading-relaxed">
                We're putting together a proper gallery. In the meantime, you
                can see lots of pictures of the pub on our{" "}
                <a
                  href="https://www.instagram.com/danfoleyspub_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-burgundy-600 hover:text-burgundy-700 font-semibold"
                >
                  Instagram
                </a>{" "}
                or{" "}
                <a
                  href="https://www.facebook.com/danfoleysannascaul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-burgundy-600 hover:text-burgundy-700 font-semibold"
                >
                  Facebook
                </a>
                .
              </p>
            </div>
          </FadeIn>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
            {PHOTOS.map((p, i) => (
              <FadeIn
                key={p.src}
                delay={(i % 6) * 0.05}
                className="break-inside-avoid mb-5"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="block w-full overflow-hidden rounded-soft border rule-cream group"
                >
                  <img
                    src={p.src}
                    alt={p.alt || ""}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </button>
              </FadeIn>
            ))}
          </div>
        )}
      </Section>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={PHOTOS.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </>
  );
}
