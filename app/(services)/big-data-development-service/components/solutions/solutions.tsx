import { bigDataDatabase } from "@/database/services";

const Solutions = () => (
  <div className="pt-14 md:pt-40">
    <h2 className="mb-12 lg:mb-20 text-black font-bold lg:pb-[2.375rem] sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
      Comprehensive big data solutions
    </h2>
    <div className="grid grid-cols-1 lg:gap-14 gap-6 md:gap-y-16 text-base leading-7 sm:grid-cols-2 lg:grid-cols-3">
      {bigDataDatabase.solutions.map((item) => (
        <div key={item.id}>
          <h3 className="text-black font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
            {item.title}
          </h3>
          <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);
export default Solutions;
