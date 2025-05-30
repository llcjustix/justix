import { ApproachProps } from "@/types/approach";
import clsx from "clsx";
import { Translate } from "@/components/translate";

interface ApproachComponentProps {
  title: string;
  steps: ApproachProps[];
  description?: string;
  color?: "white" | "black";
}

const ApproachComponent = ({
  title,
  description,
  steps,
  color = "black",
}: ApproachComponentProps) => (
  <div className="pt-14 md:pt-24 lg:pt-[10.5rem]">
    <div className="lg:grid lg:grid-cols-12">
      <div className="lg:col-span-6 lg:pb-0 pb-12 lg:pr-14 2xl:pr-20">
        <div className="lg:sticky top-20">
          <h2
            className={clsx(
              "font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]",
              color === "white" ? "text-white" : "text-black"
            )}
          >
            <Translate value={title} />
          </h2>
          {!!description && (
            <p
              className={clsx(
                "lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl",
                color === "white" ? "text-white" : "text-black"
              )}
            >
              <Translate value={description} />
            </p>
          )}
        </div>
      </div>
      <div className="lg:col-span-6">
        <div className="flex flex-col gap-y-5">
          {steps.map((item) => (
            <div
              key={item.id}
              className={clsx(
                "px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl",
                color === "white" ? "bg-gray-dark" : "bg-gray-light"
              )}
            >
              <span
                className={clsx(
                  "font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]",
                  color === "black" ? "text-black" : "text-primary"
                )}
              >
                0{item.id}
              </span>
              <h3
                className={clsx(
                  "font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]",
                  color === "black" ? "text-black" : "text-white"
                )}
              >
                <Translate value={item.title} />
              </h3>
              <p
                className={clsx(
                  "text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl",
                  color === "black" ? "text-black" : "text-white"
                )}
              >
                <Translate value={item.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ApproachComponent;
