import React from "react";
import Container from "./Container";

export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-cream-100 paper-texture overflow-hidden border-b rule-cream">
      <Container className="relative">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-burgundy-600 text-xs uppercase tracking-widest font-semibold mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-5xl md:text-7xl text-charcoal-900">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-charcoal-800/85 leading-relaxed max-w-xl font-sans">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          )}
        </div>
      </Container>
    </header>
  );
}
