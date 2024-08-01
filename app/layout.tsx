import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/social_icons";
// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Next Scaffold",
  description: "Example template for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <div className="flex flex-col min-h-[100dvh]">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link
              href="/"
              className="flex items-center justify-center"
              prefetch={false}
            >
              <div className="w-8 h-8 ">
                <Logo />
              </div>
              <span className="font-semibold text-lg ml-4 w-auto">
                Love Labs
              </span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link
                href="/features"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </header>
          {children}
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">
              &copy; 2024 AI Agents. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                href="#"
                className="text-xs hover:underline underline-offset-4"
                prefetch={false}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs hover:underline underline-offset-4"
                prefetch={false}
              >
                Privacy
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
