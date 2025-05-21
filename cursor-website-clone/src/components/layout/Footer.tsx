import Link from "next/link";

const productLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "Features", href: "/features" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Downloads", href: "/downloads" },
  { name: "Students", href: "/students" },
];

const resourceLinks = [
  { name: "Docs", href: "https://docs.cursor.com" },
  { name: "Blog", href: "/blog" },
  { name: "Forum", href: "https://forum.cursor.com" },
  { name: "Changelog", href: "/changelog" },
];

const companyLinks = [
  { name: "Anysphere", href: "https://anysphere.inc" },
  { name: "Careers", href: "https://anysphere.inc" },
  { name: "Community", href: "/community" },
];

const legalLinks = [
  { name: "Terms", href: "/terms-of-service" },
  { name: "Security", href: "/security" },
  { name: "Privacy", href: "/privacy" },
];

const socialLinks = [
  { name: "X", href: "https://x.com/cursor_ai", icon: "x" },
  { name: "GitHub", href: "https://github.com/getcursor/cursor", icon: "github" },
  { name: "Reddit", href: "https://www.reddit.com/r/cursor", icon: "reddit" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background transition-colors" role="contentinfo">
      <div className="container-cursor py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <CursorLogo />
              <span className="ml-2 text-lg font-semibold">Cursor</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <Link
                href="mailto:hi@cursor.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email Cursor at hi@cursor.com"
              >
                hi@cursor.com
              </Link>
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Cursor on ${link.name}`}
                >
                  <SocialIcon name={link.icon} />
                </Link>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Made by{" "}
              <Link
                href="https://anysphere.inc"
                className="hover:text-foreground transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                Anysphere
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <nav aria-labelledby="product-heading">
              <h3 id="product-heading" className="text-sm font-medium mb-4">Product</h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-labelledby="resources-heading">
              <h3 id="resources-heading" className="text-sm font-medium mb-4">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-labelledby="company-heading">
              <h3 id="company-heading" className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-labelledby="legal-heading">
              <h3 id="legal-heading" className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <div className="inline-block border border-muted rounded-md px-2 py-1 text-xs text-muted-foreground">
                  SOC 2 Certified
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="mt-12 md:hidden text-xs text-muted-foreground">
          © {new Date().getFullYear()} Made by{" "}
          <Link
            href="https://anysphere.inc"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Anysphere
          </Link>
          <div className="mt-2">
            <div className="inline-block border border-muted rounded-md px-2 py-1 text-xs text-muted-foreground">
              SOC 2 Certified
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CursorLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="url(#cursor-logo-footer)" />
      <defs>
        <linearGradient id="cursor-logo-footer" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
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

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "x":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "github":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "reddit":
      return (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      );
    default:
      return null;
  }
}
