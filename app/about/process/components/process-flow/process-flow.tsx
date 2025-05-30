import { companyProcessFlow } from "@/database/company";
import Image from "next/image";
import { Translate } from "@/components/translate";
import ArrowDown from "./arrow-down";

const ProcessFlow = () => (
  <div className="pt-14 md:pt-24 lg:pt-[10.5rem]">
    <h2 className="text-black font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
      We start here
    </h2>
    <div className="flex flex-col gap-40 my-40">
      {companyProcessFlow.map((item, index) => (
        <div
          key={item.id}
          className="relative flex lg:flex-row-reverse flex-col items-center justify-between gap-8 md:gap-x-24"
        >
          {index === 0 && (
            <div className="lg:block hidden absolute left-0 top-0">
              <ArrowDown />
            </div>
          )}
          <div className="relative lg:min-w-[560px] min-w-full h-[300px] md:h-[500px] lg:h-[750px] rounded-2xl overflow-hidden">
            <Image src={item.img} alt={item.title} fill sizes="lg:560px" className="object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-black font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
              0{index + 1}
            </h2>
            <h3 className="text-black font-bold pt-2.5 pb-6 lg:pb-[2.375rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
              <Translate value={item.title} />
            </h3>
            <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              <Translate value={item.description} />
            </p>
          </div>
          {index !== companyProcessFlow.length - 1 && (
            <div className="lg:block hidden absolute left-0 bottom-0">
              <ArrowDown />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ProcessFlow;
