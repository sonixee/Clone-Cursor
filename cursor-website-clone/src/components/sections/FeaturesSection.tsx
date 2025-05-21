import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideIn, StaggerChildren } from "@/components/ui/custom/motion";

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="features-heading">
      <div className="container-cursor">
        <FeatureTab />
        <FeatureCodebase />
        <FeatureEdit />
        <FeatureFastBuild />
      </div>
    </section>
  );
}

function FeatureTab() {
  return (
    <div className="mb-24" id="feature-tab-section">
      <FadeIn>
        <h2 className="text-3xl font-bold text-center mb-4" id="tab-heading">Tab, tab, tab</h2>
        <p className="text-muted-foreground dark:text-muted-foreground/80 text-center max-w-2xl mx-auto mb-12">
          Cursor lets you breeze through changes by predicting your next edit.
        </p>
      </FadeIn>

      <SlideIn direction="up" delay={0.2}>
        <div className="relative mx-auto overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30 p-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg"
            poster="https://ext.same-assets.com/3333433297/3027331878.webp"
            aria-label="Demo video showing tab completion feature in Cursor"
          >
            <source src="https://ext.same-assets.com/3333433297/1876798193.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </SlideIn>
    </div>
  );
}

function FeatureCodebase() {
  return (
    <div className="mb-24" id="feature-codebase-section">
      <FadeIn>
        <h2 className="text-3xl font-bold text-center mb-4" id="codebase-heading">Knows your codebase</h2>
        <p className="text-muted-foreground dark:text-muted-foreground/80 text-center max-w-2xl mx-auto mb-12">
          Get answers from your codebase or refer to files or docs. Use the model's code in one click.
        </p>
      </FadeIn>

      <SlideIn direction="up" delay={0.2}>
        <div className="relative mx-auto overflow-hidden rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 dark:from-orange-500/30 dark:to-red-500/30 p-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg"
            poster="https://ext.same-assets.com/3333433297/3027331878.webp"
            aria-label="Demo video showing codebase understanding feature in Cursor"
          >
            <source src="https://ext.same-assets.com/3333433297/3849094373.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </SlideIn>
    </div>
  );
}

function FeatureEdit() {
  return (
    <div className="mb-24" id="feature-edit-section">
      <FadeIn>
        <h2 className="text-3xl font-bold text-center mb-4" id="edit-heading">Edit in natural language</h2>
        <p className="text-muted-foreground dark:text-muted-foreground/80 text-center max-w-2xl mx-auto mb-12">
          Cursor lets you write code using instructions. Update entire classes or functions with a simple prompt.
        </p>
      </FadeIn>

      <SlideIn direction="up" delay={0.2}>
        <div className="relative mx-auto overflow-hidden rounded-lg bg-gradient-to-br from-green-500/20 to-yellow-500/20 dark:from-green-500/30 dark:to-yellow-500/30 p-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg"
            poster="https://ext.same-assets.com/3333433297/3027331878.webp"
            aria-label="Demo video showing natural language editing feature in Cursor"
          >
            <source src="https://ext.same-assets.com/3333433297/3205434584.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </SlideIn>
    </div>
  );
}

function FeatureFastBuild() {
  return (
    <div id="feature-build-section">
      <FadeIn>
        <h2 className="text-3xl font-bold text-center mb-4" id="build-heading">Build software faster</h2>
        <p className="text-muted-foreground dark:text-muted-foreground/80 text-center max-w-2xl mx-auto mb-12">
          Intelligent, fast, and familiar, Cursor is the best way to code with AI.
        </p>
        <div className="text-center mb-12">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/features">See more features</Link>
          </Button>
        </div>
      </FadeIn>

      <StaggerChildren staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-purple-500" aria-hidden="true">
              <path
                d="M8 16L2 12L8 8M16 8L22 12L16 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title="Frontier Intelligence"
          description="Powered by a mix of purpose-built and frontier models, Cursor is smart and fast."
          href="/features"
        />
        <FeatureCard
          icon={
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-blue-500" aria-hidden="true">
              <path
                d="M12 6V12M12 12V18M12 12H18M12 12H6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title="Feels Familiar"
          description="Import all your extensions, themes, and keybindings in one click."
          href="/features"
        />
        <FeatureCard
          icon={
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-green-500" aria-hidden="true">
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.4 15C19.1277 15.8031 18.9371 16.6535 18.83 17.52C18.73 18.33 18.13 19 17.3 19H6.7C5.87 19 5.27 18.33 5.17 17.52C5.05849 16.6542 4.86453 15.8036 4.59 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.8 7.21C18.305 7.83 18.7355 8.51344 19.08 9.25"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.92 9.25C5.26282 8.5135 5.69302 7.82994 6.2 7.21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.98 5C12.3254 5.00005 12.6683 5.05147 13 5.15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title="Privacy Options"
          description="If you enable Privacy Mode, your code is never stored remotely. Cursor is SOC 2 certified."
          href="/features"
        />
      </StaggerChildren>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="group" aria-label={`Learn more about ${title}`}>
      <Card className="h-full transition-colors hover:bg-muted/50 dark:hover:bg-muted/20 transition-theme">
        <CardHeader>
          <div className="rounded-full w-12 h-12 flex items-center justify-center bg-background mb-4">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-muted-foreground dark:text-muted-foreground/80">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
