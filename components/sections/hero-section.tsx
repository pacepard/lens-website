import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";

import type { Transition } from "framer-motion";
import { LandingPageData } from "@/_data/landing-page";

const springTransition: Transition = {
  type: "spring",
  bounce: 0.3,
  duration: 1.5,
};

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: springTransition,
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-44 pb-44">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row md:gap-x-8 sm:mx-auto lg:mt-0 lg:mr-auto">
                
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 md:max-w-[1200px] text-5xl font-medium items-start md:text-9xl lg:mt-16"
                >
                  {LandingPageData.hero.heading}
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-6 md:mt-12 flex flex-1 items-center"
                >
                  <div className="flex-1 ">
                    <TextEffect
                      per="line"
                      preset="fade-in-blur"
                      speedSegment={0.3}
                      delay={0.5}
                      as="p"
                      className="text-lg md:text-3xl text-left md:mt-40"
                    >
                      {LandingPageData.hero.subheading}
                    </TextEffect>
                  </div>
                </AnimatedGroup>

      
               
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
