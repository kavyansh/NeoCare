import { Carousel } from "flowbite-react";
import React from "react";
import HeroImage1 from "/assets/images/heroImage1.png";
import { twMerge } from "tailwind-merge";

function CarouselImage({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={twMerge(`h-[929px] w-dvw`, className)}>{children}</div>
  );
}

export default function HeroSection() {
  return (
    <Carousel>
      <CarouselImage className={"bg-cover bg-right bg-heroImage1 relative "}>
        <p className="font-spectral absolute left-[312px] top-[408px] text-[48px] max-w-[820px] leading-[73.06px] tracking-normal">
          Transforming chronic pain management through precise{" "}
          <span className="text-primary-orange ">
            Diagnosis and Compassionate care.
          </span>
        </p>
      </CarouselImage>
      <CarouselImage className={"bg-cover bg-top bg-heroImage2 relative "}>
        <p className=" text-primary-gray font-spectral absolute left-[344px] top-[241px] text-[48px] max-w-[912px] leading-[73.06px] tracking-normal">
          ABOP Certified Professional, Expertise You Can Trust, Care You Deserve
        </p>
      </CarouselImage>
    </Carousel>
  );
}
