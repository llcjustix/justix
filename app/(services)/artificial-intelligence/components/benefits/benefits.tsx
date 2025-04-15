import { artificialIntelligenceDatabase } from "@/database/services";

const Benefits = () => (
  <>
    <h2 className="mb-12 lg:mb-20 text-white font-bold lg:pb-[2.375rem] sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
      Benefits of our <span className="text-primary">AI solutions</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-8 lg:grid-cols-3">
      {artificialIntelligenceDatabase.benefits.map((item) => (
        <div
          key={item.id}
          className="cursor-auto group p-7 rounded-3xl border h-full border-[#CCCCCC]"
        >
          <div className="flex flex-col h-full justify-between gap-y-16 lg:gap-y-20">
            <h3 className="text-white font-bold leading-7 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
              {item.title}
            </h3>
            <p className="text-white text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Benefits;
