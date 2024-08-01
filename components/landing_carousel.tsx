"use client";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

export default function LandingCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      orientation="vertical"
      className="w-full "
    >
      <CarouselContent className="-mt-1 h-[310px]">
        <CarouselItem>
          <Image
            src="/modern-design.svg"
            width="550"
            height="310"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/productivity.svg"
            width="550"
            height="310"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="/empowerment.svg"
            width="550"
            height="310"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
