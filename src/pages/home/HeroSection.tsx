import { Carousel } from "flowbite-react";
import React from "react";
import { twMerge } from "tailwind-merge";

function CarouselImage({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={twMerge(`h-[85dvh] w-100`, className)}>{children}</div>
  );
}

export default function HeroSection() {
  return (
    <div className="p-[4px] flex items-center justify-center w-full">
      <Carousel>
        <CarouselImage
          className={"bg-cover bg-right-top bg-heroImage1 relative "}
        >
          <p className="font-spectral absolute left-[312px] top-[408px] text-[48px] max-w-[820px] leading-[73.06px] tracking-normal">
            Transforming chronic pain management through precise{" "}
            <span className="text-primary-orange ">
              Diagnosis and Compassionate care.
            </span>
          </p>
        </CarouselImage>
        <CarouselImage
          className={"bg-cover bg-right-top bg-heroImage2 relative "}
        >
          <p className=" text-primary-gray font-spectral absolute left-[344px] top-[101px] text-[48px] max-w-[912px] leading-[73.06px] tracking-normal text-center">
            ABOP Certified Professional, Expertise You Can Trust, Care You
            Deserve
          </p>
        </CarouselImage>
      </Carousel>
    </div>
  );
}
