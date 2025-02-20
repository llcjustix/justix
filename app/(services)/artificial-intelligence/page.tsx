import Image from "next/image";
import Experience from "./components/experience";
import DevelopmentProcess from "./components/development-process";
import Benefits from "./components/benefits";
import Approach from "./components/approach";
import AiModels from "./components/ai-models";
import Faq from "./components/faq";

const ArtificialIntelligence = () => (
  <div className="bg-black w-full h-full py-24">
    <section className="container">
      <div className="max-w-5xl">
        <h1 className="font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] text-white">
          Artificial Intelligence Development Services
        </h1>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white">
          At {process.env.NEXT_PUBLIC_WEBSITE_NAME}, we deliver AI solutions that help your business
          grow and run more efficiently. Our team is here to help you use AI to improve your
          operations and stay ahead in the market.
        </p>
      </div>
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        src="/img/services/artificial-intelligence.webp"
        alt="Artificial Intelligence Development Services"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
      />
    </section>
    <section className="container">
      <div className="pt-14 md:pt-40 max-w-3xl">
        <h2 className="pb-6 text-white font-bold lg:pb-[2.375rem] sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
          Why choose {process.env.NEXT_PUBLIC_WEBSITE_NAME} for AI development?
        </h2>
        <p className="pb-6 text-white text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          Our experience and skills in AI allow us to create custom solutions that meet your
          business needs.
        </p>
      </div>
      <Experience />
    </section>
    <section className="container">
      <div className="mt-14 md:mt-40">
        <DevelopmentProcess />
      </div>
    </section>
    <section className="container">
      <div className="mt-14 md:mt-40">
        <Benefits />
      </div>
    </section>
    <section className="container">
      <div className="mt-14 md:mt-40">
        <Approach />
      </div>
    </section>
    <section className="container">
      <div className="mt-14 md:mt-40">
        <AiModels />
      </div>
    </section>
    <section className="container">
      <div className="mt-14 md:mt-40">
        <Faq />
      </div>
    </section>
  </div>
);

export default ArtificialIntelligence;
