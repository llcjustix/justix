import clsx from "clsx";

interface SolutionsComponentProps {
  title: string;
  steps: { id: number; title: string; description: string }[];
  color?: "black" | "white";
}

const SolutionsComponent = ({ title, steps, color = "black" }: SolutionsComponentProps) => (
  <div className="pt-14 md:pt-40">
    <h2
      className={clsx(
        "mb-12 lg:mb-20 font-bold lg:pb-[2.375rem] sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]",
        color === "black" ? "text-black" : "text-white"
      )}
    >
      {title}
    </h2>
    <div className="grid grid-cols-1 lg:gap-14 gap-6 md:gap-y-16 text-base leading-7 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((item) => (
        <div key={item.id}>
          <h3
            className={clsx(
              "font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]",
              color === "black" ? "text-black" : "text-white"
            )}
          >
            {item.title}
          </h3>
          <p
            className={clsx(
              "text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl",
              color === "black" ? "text-black" : "text-white"
            )}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default SolutionsComponent;
