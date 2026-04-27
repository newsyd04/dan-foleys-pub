import React from "react";
import Container from "./Container";

const TONES = {
  cream: "bg-cream-50 text-charcoal-900",
  parchment: "bg-cream-100 text-charcoal-900 paper-texture",
  dark: "bg-charcoal-900 text-cream-100",
  burgundy: "bg-burgundy-700 text-cream-100",
};

export default function Section({
  tone = "cream",
  spacing = "default",
  contained = true,
  className = "",
  innerClassName = "",
  id,
  children,
}) {
  const toneClass = TONES[tone] ?? TONES.cream;
  const spacingClass =
    spacing === "tight"
      ? "py-12 md:py-16"
      : spacing === "loose"
      ? "py-24 md:py-32"
      : "py-section-y md:py-section-y-lg";

  return (
    <section
      id={id}
      className={`relative ${toneClass} ${spacingClass} ${className}`}
    >
      {contained ? (
        <Container className={`relative ${innerClassName}`}>
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
}
