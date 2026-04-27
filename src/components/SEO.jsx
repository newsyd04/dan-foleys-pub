import { useEffect } from "react";

const SITE = "Dan Foley's Pub";

export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = `${title} · ${SITE}`;

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
      const og = document.querySelector('meta[property="og:description"]');
      if (og) og.setAttribute("content", description);
    }

    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", `${title} · ${SITE}`);
    }
  }, [title, description]);

  return null;
}
