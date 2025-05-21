"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SkipLink } from "@/components/ui/custom/SkipLink";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased bg-background min-h-screen";
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex min-h-screen flex-col antialiased">
        <SkipLink />
        <div className="flex-1" id="main-content" tabIndex={-1}>
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}
