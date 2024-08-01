/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FWENmVqfE0E
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {
  RocketLaunchIcon,
  CursorArrowRaysIcon,
  InformationCircleIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Empower Your Productivity
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our productivity-enhancing product is designed to help you and
              your team work smarter, not harder. Discover the key features that
              will transform your workflow.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
              <RocketLaunchIcon className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold">Accelerate Your Workflow</h3>
            <p className="text-muted-foreground">
              Streamline your processes and eliminate bottlenecks with our
              intuitive tools and automation features.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
              <CursorArrowRaysIcon className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold">Seamless Collaboration</h3>
            <p className="text-muted-foreground">
              Foster seamless teamwork with real-time updates, shared
              workspaces, and built-in communication tools.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
              <InformationCircleIcon className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold">Insightful Analytics</h3>
            <p className="text-muted-foreground">
              {`Gain valuable insights into your team's performance and identify
              areas for improvement with our robust analytics.`}
            </p>
          </div>
          <div className="grid gap-4">
            <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
              <ArrowsPointingOutIcon className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold">Scalable and Flexible</h3>
            <p className="text-muted-foreground">
              Our platform is designed to grow with your business, offering
              seamless scalability and adaptability to your evolving needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
