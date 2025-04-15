import clsx from "clsx";

interface ServicesHeaderProps {
  title: string;
  description: string;
  color?: "black" | "white";
}

const ServicesHeader = ({ title, description, color = "black" }: ServicesHeaderProps) => (
  <div className="pt-10 lg:pt-16">
    <h1
      className={clsx(
        "font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]",
        color === "black" ? "text-black" : "text-white"
      )}
    >
      {title}
    </h1>
    <p
      className={clsx(
        "text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl",
        color === "black" ? "text-black" : "text-white"
      )}
    >
      {description}
    </p>
  </div>
);

export default ServicesHeader;
