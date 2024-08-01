/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ArPFk252rM9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Elevate Your Productivity with Our Cutting-Edge Solution
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Unlock the full potential of your team with our innovative
            productivity-enhancing platform. Streamline workflows, boost
            collaboration, and drive progress like never before.
          </p>
        </div>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col relative overflow-hidden rounded-xl border bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-2xl font-bold">Starter</CardTitle>
              <CardDescription>
                Get started with our essential productivity tools.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 h-full">
              <div className="flex items-start justify-center gap-2">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Unlimited task management
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Basic team collaboration
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  5GB cloud storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Email and chat support
                </li>
              </ul>
            </CardContent>
            <CardFooter className="bg-muted p-6">
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="relative overflow-hidden rounded-xl border bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-2xl font-bold">Pro</CardTitle>
              <CardDescription>
                Unlock advanced productivity features for your team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Unlimited task management
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Advanced team collaboration
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  20GB cloud storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Priority email and chat support
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Custom branding and integrations
                </li>
              </ul>
            </CardContent>
            <CardFooter className="bg-muted p-6">
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="relative overflow-hidden rounded-xl border bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
              <CardDescription>
                Tailored solutions for large teams and organizations.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Unlimited task management
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Advanced team collaboration
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Unlimited cloud storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Dedicated account manager
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-primary" />
                  Custom integrations and API access
                </li>
              </ul>
            </CardContent>
            <CardFooter className="bg-muted p-6">
              <Button size="lg" className="w-full">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
