import { bigDataDatabase } from "@/database/services";

const Approach = () => (
  <div className="pt-14 md:pt-24 lg:pt-[10.5rem]">
    <div className="lg:grid lg:grid-cols-12">
      <div className="lg:col-span-6 lg:pb-0 pb-12 lg:pr-14 2xl:pr-20">
        <div className="lg:sticky top-20">
          <h2 className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
            How we build your big data solution
          </h2>
          <p className="text-black lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            Every project follows a clear, step-by-step process to ensure your big data solution is
            delivered on time and meets your business goals.
          </p>
        </div>
      </div>
      <div className="lg:col-span-6">
        <div className="flex flex-col gap-y-5">
          {bigDataDatabase.approach.map((item) => (
            <div
              key={item.id}
              className="px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl bg-gray-light"
            >
              <span className="text-black font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                0{item.id}
              </span>
              <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
                {item.title}
              </h3>
              <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Approach;
