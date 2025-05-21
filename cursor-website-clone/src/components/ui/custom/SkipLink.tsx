"use client";

import { SkipLinkIcon } from "./Icons";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      Skip to content
      <SkipLinkIcon className="w-4 h-4 ml-2 inline" />
    </a>
  );
}
