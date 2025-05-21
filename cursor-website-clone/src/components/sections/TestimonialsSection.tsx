import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerChildren } from "@/components/ui/custom/motion";

type Testimonial = {
  quote: string;
  author: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Cursor is at least a 2x improvement over Copilot. It's amazing having an AI pair programmer, and is an incredible accelerator for me and my team.",
    author: "Ben Bernard",
    company: "Instacart",
  },
  {
    quote: "The Cursor tab completion while coding is occasionally so magic it defies reality - about ~25% of the time it is anticipating exactly what I want to do. It is enough to make you believe that eventually you'll be able to code at the speed of thought.",
    author: "Kevin Whinnery",
    company: "OpenAI",
  },
  {
    quote: "Cursor is hands down my biggest workflow improvement in years",
    author: "Sawyer Hood",
    company: "Figma",
  },
  {
    quote: "I love writing code and Cursor is a necessity. Cursor is steps ahead of my brain, proposing multi-line edits so I type 'tab' more than anything else.",
    author: "Andrew Milich",
    company: "Notion",
  },
  {
    quote: "Cursor is so good, and literally gets better/more feature-rich every couple of weeks.",
    author: "Morgan McGuire",
    company: "Weights & Biases",
  },
  {
    quote: "Cursor is awesome! Someone finally put GPT into a code editor in a seamless way. It's so elegant and easy. No more copying and pasting. I'm an hour in and already hooked.",
    author: "Andrew McCalip",
    company: "Varda",
  },
  {
    quote: "Cursor is the best AI developer tool right now, avoid it at your own peril",
    author: "Logan Kilpatrick",
    company: "Google",
  },
  {
    quote: "Started using Cursor yesterday & i'm blown away. it's how Copilot should feel. i'm completely off VSCode now.",
    author: "Sam Whitmore",
    company: "New Computer",
  },
  {
    quote: "Cursor is the best product I've used in a while - it's an AI enabled editor. I just asked it to write a README for a project I've been working on - analyzed the code-base and worked first time.",
    author: "Alex MacCaw",
    company: "Reflect",
  },
  {
    quote: "Cursor has changed the game. I really can't imagine writing code without it at this point. The switch from VSCode is easy, and now I have AI superpowers right in my editor and my terminal.",
    author: "Zeke Sikelianos",
    company: "Replicate",
  },
  {
    quote: "Gonna apply to YC and list Cursor as my cofounder",
    author: "Cory Etzkorn",
    company: "Notion",
  },
  {
    quote: "Cursor's new auto-complete is insane. You no longer need to prompt it. It predicts what code you want based on what you're doing. Accept by hitting tab.",
    author: "Marc Khlbrugge",
    company: "WIP",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 dark:bg-muted/10" aria-labelledby="testimonials-heading">
      <div className="container-cursor">
        <FadeIn>
          <h2 id="testimonials-heading" className="text-3xl font-bold text-center mb-6">Loved by world-class devs</h2>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground/80 text-center max-w-2xl mx-auto mb-16">
            Engineers all around the world reach for Cursor by choice.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full bg-card border border-border/50 overflow-hidden dark:bg-card/50 dark:border-border/30 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <blockquote className="mb-4 text-base">"{testimonial.quote}"</blockquote>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground mr-3" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3334 4C13.3334 2.52724 12.1395 1.33334 10.6667 1.33334H5.33341C3.86066 1.33334 2.66675 2.52724 2.66675 4V12C2.66675 13.4728 3.86066 14.6667 5.33341 14.6667H10.6667C12.1395 14.6667 13.3334 13.4728 13.3334 12V4Z"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00008 11.3333C8.36827 11.3333 8.66675 11.0349 8.66675 10.6667C8.66675 10.2985 8.36827 10 8.00008 10C7.6319 10 7.33341 10.2985 7.33341 10.6667C7.33341 11.0349 7.6319 11.3333 8.00008 11.3333Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium text-sm">{testimonial.author}</p>
            <p className="text-muted-foreground text-xs">{testimonial.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
