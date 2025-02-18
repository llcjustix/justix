import { artificialIntelligenceDatabase } from "@/database/services";

const DevelopmentProcess = () => (
  <>
    <h2 className="mb-12 lg:mb-20 text-white font-bold lg:pb-[2.375rem] sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
      Our AI development services
    </h2>
    <div className="grid grid-cols-3 lg:gap-14 gap-6 md:gap-y-16">
      {artificialIntelligenceDatabase.developmentServices.map((item) => (
        <div key={item.id}>
          <h3 className="text-white font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
            {item.title}
          </h3>
          <p className="text-white text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </>
);

export default DevelopmentProcess;
