"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/custom/ThemeToggle";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "/features" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Blog", href: "/blog" },
  { label: "Forum", href: "https://forum.cursor.com" },
  { label: "Careers", href: "https://anysphere.inc/" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm">
      <div className="container-cursor flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2" aria-label="Cursor homepage">
            <CursorLogo />
            <span className="font-bold text-lg hidden md:inline-block">Cursor</span>
          </Link>
          <nav className="hidden md:flex gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/api/auth/login"
            className="hidden md:inline-flex text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
          >
            Sign in
          </Link>
          <Link href="/downloads" className="hidden md:inline-flex">
            <Button
              variant="default"
              className="rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90"
            >
              Download
            </Button>
          </Link>
          <button
            className="flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {!isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 md:hidden bg-background/95 backdrop-blur-sm"
          aria-label="Mobile navigation"
        >
          <div className="relative z-20 grid gap-6 rounded-md p-4">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center py-2 text-foreground/80 transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/api/auth/login"
                className="flex items-center py-2 text-foreground/80 transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/downloads"
                className="flex items-center py-2 text-foreground/80 transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function CursorLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#cursor-logo-gradient)" />
      <defs>
        <linearGradient id="cursor-logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9C27B0" />
          <stop offset="25%" stopColor="#F44336" />
          <stop offset="50%" stopColor="#FF9800" />
          <stop offset="75%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2196F3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
