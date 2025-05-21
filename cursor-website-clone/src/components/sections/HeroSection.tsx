import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FadeIn, ScaleIn, SlideIn } from "@/components/ui/custom/motion";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden gradient-hero -z-10">
        <div className="noise-overlay"></div>
      </div>

      <div className="container-cursor relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-6 text-black dark:text-white"
            >
              The AI Code Editor
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-black/75 dark:text-white/75">
              Built to make you extraordinarily productive, Cursor is the best way to code with AI.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 px-8 text-base transition-colors"
              >
                <Link href="/downloads">All Downloads</Link>
              </Button>
            </div>
          </FadeIn>

          <ScaleIn delay={0.3}>
            <div className="relative mx-auto overflow-hidden rounded-lg shadow-xl bg-black">
              <Image
                src="https://ext.same-assets.com/3333433297/1667336438.webp"
                alt="Cursor AI code editor interface showing code completion and AI features"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </ScaleIn>

          <SlideIn direction="up" delay={0.4} className="mt-16 mb-8">
            <p className="text-sm font-medium text-black/75 dark:text-white/75 mb-6">
              Trusted by engineers at
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              <Image
                src="https://ext.same-assets.com/3333433297/2320907649.svg"
                alt="OpenAI"
                width={100}
                height={40}
                className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://ext.same-assets.com/3333433297/1367661487.svg"
                alt="Samsung"
                width={100}
                height={40}
                className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://ext.same-assets.com/3333433297/2018733539.svg"
                alt="Perplexity"
                width={100}
                height={40}
                className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://ext.same-assets.com/3333433297/4252861238.svg"
                alt="Shopify"
                width={100}
                height={40}
                className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://ext.same-assets.com/3333433297/3394157246.svg"
                alt="MercadoLibre"
                width={100}
                height={40}
                className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
