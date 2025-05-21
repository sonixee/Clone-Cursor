import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn, ScaleIn } from "@/components/ui/custom/motion";

export function CtaSection() {
  return (
    <section
      className="py-16 md:py-24 relative"
      aria-labelledby="cta-heading"
    >
      <div className="container-cursor text-center">
        <div className="relative mx-auto">
          <ScaleIn delay={0.1}>
            <div className="mx-auto relative w-32 h-32 mb-8">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-hidden="true"
              >
                <path
                  d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
                  fill="url(#cursor-logo-cta)"
                />
                <defs>
                  <linearGradient
                    id="cursor-logo-cta"
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#9C27B0" />
                    <stop offset="25%" stopColor="#F44336" />
                    <stop offset="50%" stopColor="#FF9800" />
                    <stop offset="75%" stopColor="#4CAF50" />
                    <stop offset="100%" stopColor="#2196F3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </ScaleIn>

          <FadeIn delay={0.2}>
            <h2
              id="cta-heading"
              className="text-4xl font-bold mb-8"
            >
              Try Cursor Now
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 px-8 text-base transition-colors"
              >
                <Link href="/downloads">Download</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
