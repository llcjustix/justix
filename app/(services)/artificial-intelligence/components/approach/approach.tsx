import { artificialIntelligenceDatabase } from "@/database/services";

const Approach = () => (
  <div className="grid grid-cols-2 lg:gap-x-14 2xl:gap-x-20 justify-between">
    <div className="sticky top-20 h-fit">
      <h2 className="text-white font-bold lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] ">
        Our proven approach
      </h2>
    </div>
    <div className="flex flex-col gap-5">
      {artificialIntelligenceDatabase.approach.map((item) => (
        <div key={item.id} className="px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl bg-gray-dark">
          <span className="text-primary font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
            0{item.id}
          </span>
          <h3 className="text-white font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
            {item.title}
          </h3>
          <p className="text-white text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Approach;
