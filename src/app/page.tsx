"use client";

import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui";
import { BoxRevealPart } from "./BoxReveal";
import { MarqueePart } from './MarqueePart';

const HomePage = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl flex-col">
      <BoxRevealPart />
      <MarqueePart />
      <AnimatedGridPattern
        numSquares={200}
        maxOpacity={0.7}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "skew-y-12",
        )}
      />
    </div>
  );
};

export default HomePage;