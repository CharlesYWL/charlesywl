import { BoxReveal, ShinyButton, TypingAnimation } from "@components/magicui";

export const BoxRevealPart = () => {
  return (
    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8 text-lg">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <TypingAnimation
          className="text-4xl font-bold text-black dark:text-white"
          text="Weili 'Charles' Yin"
        />
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          Software Developer for{" "}
          <span className="text-[#5046e6]">Frontend</span>
          {" "}based in {" "}
          <span className="text-[#5046e6] font-bold text-xl">Seattle</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; Proficient with{" "}
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            <span className="font-semibold text-[#5046e6]"> NodeJS</span>,
            <span className="font-semibold text-[#5046e6]"> Elastic Search</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>.
          </p>
        </div>
      </BoxReveal>
    </div>)
}