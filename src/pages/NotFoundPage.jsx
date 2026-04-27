import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page not found"
        description="That page doesn't exist on Dan Foley's Pub site."
      />
      <section className="min-h-[80vh] flex items-center pt-24 pb-16">
        <Container>
          <div className="max-w-prose mx-auto text-center">
            <p className="text-burgundy-600 text-xs uppercase tracking-widest font-semibold mb-4">
              404
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal-900">
              That door's locked.
            </h1>
            <p className="mt-5 text-charcoal-800/85 text-lg leading-relaxed">
              The page you were looking for isn't here. The pink one,
              however, is — and you're welcome any time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button to="/" variant="primary" size="md">
                Back home
              </Button>
              <Button to="/visit" variant="ghost" size="md">
                Find the pub
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
