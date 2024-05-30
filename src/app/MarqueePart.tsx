import { Marquee, AnimatedGradientText } from '@components/magicui';
import {
  Angular,
  BunLogo,
  CSS,
  Discord,
  Github,
  HTML,
  Mui,
  NextJs,
  NodeJs,
  Python,
  React,
  Tailwind,
  Typescript,
  VSC,
  Vrchat,
  Vite,
} from '@media/index';
import Image from 'next/image'
import { cn } from "@/lib/utils";


const cards = [
  Angular,
  BunLogo,
  CSS,
  Discord,
  Github,
  HTML,
  Mui,
  NextJs,
  NodeJs,
  Python,
  React,
  Tailwind,
  Typescript,
  VSC,
  Vrchat,
  Vite,
]

const firstRow = cards.slice(0, 5);
const secondRow = cards.slice(5, 10);
const tirdRow = cards.slice(10);
const imageStyle = "object-scale-down h-48 w-48"
export const MarqueePart = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-20 md:shadow-xl text-lg">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" text-lg />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Check My Stack
        </span>
      </AnimatedGradientText>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((card, index) => <Image className={imageStyle} src={card} key={`firstrow-${index}`} alt='image' />)}
      </Marquee>
      <Marquee pauseOnHover reverse className="[--duration:20s]">
        {secondRow.map((card, index) => <Image className={imageStyle} src={card} key={`secondrow-${index}`} alt='image' />)}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {tirdRow.map((card, index) => <Image className={imageStyle} src={card} key={`tirdrow-${index}`} alt='image' />)}
      </Marquee>
    </div>
  )
}