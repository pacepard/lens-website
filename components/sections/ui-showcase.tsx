
import { LandingPageData } from "@/_data/landing-page";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";


export default function UIShwocase() {
  return (
    <section className="bg-white py-16 pt-20 md:py-32 dark:bg-[#171717]">
      <div className="mx-auto px-12 space-y-8 md:space-y-12 items-center justify-center">
       
       <div className="flex justify-center items-center">
         <Image
          className="rounded-(--radius) grayscale"
          src={LandingPageData.uishowcase.image.src}
          alt={LandingPageData.uishowcase.image.alt}
          height={LandingPageData.uishowcase.image.height}
          width={LandingPageData.uishowcase.image.width}
     
          loading="lazy"
        />
       </div>

        {/* This is the main flex container for the heading and subheading */}
        <div className="flex flex-col px-24 md:flex-row md:justify-between md:items-start md:gap-x-16">
          {/* Heading Section */}
          <div className="flex-1 items-start">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mt-6 max-w-2xl text-4xl md:text-7xl font-medium text-left"
            >
              {LandingPageData.uishowcase.heading}
            </TextEffect>
          </div>

          {/* Subheading and Button Section */}
          <div className="flex-1 flex flex-col space-y-6 ml-24">
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mt-8  max-w-2xl text-2xl text-pretty text-left"
            >
              {LandingPageData.uishowcase.subheading}
            </TextEffect>

            <div className="flex flex-1">
              <div className="group rounded-[calc(var(--radius-sm)+0.125rem)]">
                <Button
                  asChild
                  size="lg"
                  variant={LandingPageData.uishowcase.button.variant}
                  className="relative flex h-11 flex-1 items-center justify-center overflow-hidden rounded-sm px-5 text-base transition-colors duration-300 hover:text-white"
                >
                  <a href={LandingPageData.uishowcase.button.href}>
                    <span className="relative z-10 flex items-center gap-3 text-nowrap transition-all duration-300 group-hover:translate-x-1">
                      {LandingPageData.uishowcase.button.text}
                      <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                    <div
                      className="absolute inset-y-0 left-0 h-full w-full -translate-x-full transition-transform duration-300 group-hover:translate-x-0  bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]"
                    ></div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}