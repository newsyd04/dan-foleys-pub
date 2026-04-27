import React from "react";
import { Link } from "react-router-dom";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2";

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const VARIANTS = {
  primary:
    "bg-burgundy-600 text-cream-50 hover:bg-burgundy-700 shadow-warm focus-visible:ring-offset-cream-50",
  gold:
    "bg-gold-500 text-charcoal-950 hover:bg-gold-400 shadow-warm focus-visible:ring-offset-cream-50",
  ghost:
    "bg-transparent text-charcoal-900 border border-charcoal-900/30 hover:bg-charcoal-900/5 focus-visible:ring-offset-cream-50",
  ghostDark:
    "bg-transparent text-cream-100 border border-cream-100/30 hover:bg-cream-100/10 focus-visible:ring-offset-charcoal-900",
};

export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  external = false,
  className = "",
  children,
  ...rest
}) {
  const cls = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
