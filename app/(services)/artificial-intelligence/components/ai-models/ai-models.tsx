import { artificialIntelligenceDatabase } from "@/database/services";
import Image from "next/image";
import { Translate } from "@/components/translate";

const AiModels = () => (
  <>
    <h2 className="text-white font-bold lg:pb-[2.375rem] sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
      <Translate value="Cutting-edge" />{" "}
      <span className="text-primary">
        <Translate value="AI models" />
      </span>{" "}
      <Translate value="we work with AI solutions" />
    </h2>
    <p className="pt-6 lg:pt-[2.375rem] empty:hidden text-white lg:pe-[5rem] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
      <Translate value="Our team is proficient in the latest AI models, including." />
    </p>
    <div className="mt-8 lg:mt-24">
      <div className="grid grid-cols-2 gap-6 lg:gap-10 sm:grid-cols-3 lg:grid-cols-5">
        {artificialIntelligenceDatabase.aiModels.map((item) => (
          <div key={item.id} className="relative w-full min-h-[128px]">
            <Image
              src={item.img}
              alt="ai-model"
              width={216}
              height={128}
              className="object-fit object-center w-full h-fit"
            />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default AiModels;
