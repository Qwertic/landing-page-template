/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1aGUHtIRPm4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Github,
  Twitter,
  Instagram,
  Facebook,
} from "@/components/social_icons";

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="text-muted-foreground md:text-xl">
              {`Have a question or want to collaborate? Fill out the form and
              we&apos;ll get back to you as soon as possible.`}
            </p>
          </div>
          <form className="mt-8 grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[120px]"
              />
            </div>
            <Button type="submit" className="justify-self-start">
              Send Message
            </Button>
          </form>
        </div>
        <div className="grid gap-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Info</h3>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">
                  123 Main St, Anytown USA 12345
                </p>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
              <div className="flex items-center gap-4">
                <EnvelopeIcon className="h-6 w-6 text-primary" />
                <p className="text-muted-foreground">info@example.com</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex items-center gap-4">
              <Twitter />
              <Instagram />
              <Facebook />
              <Github />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
