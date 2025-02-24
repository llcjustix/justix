"use client";

import { ExperienceProps, ExperienceTechnologiesProps } from "@/types/experience";
import useSettingsStore from "@/store/settings";
import CheckIcon from "@/assets/icons/check";
import Button from "@/components/button";
import clsx from "clsx";
import Image from "next/image";

interface ExperienceComponentProps {
  title: string;
  description: string;
  experience: ExperienceProps[];
  technologies: ExperienceTechnologiesProps[];
  color?: "black" | "white";
}

const ExperienceComponent = ({
  title,
  description,
  experience,
  technologies,
  color = "black",
}: ExperienceComponentProps) => {
  const { toggleChat } = useSettingsStore();
  return (
    <>
      <div className="py-14 md:py-40 max-w-3xl">
        <h2
          className={clsx(
            "pb-6 font-bold lg:pb-[2.375rem] sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]",
            color === "black" ? "text-black" : "text-white"
          )}
        >
          {title}
        </h2>
        <p
          className={clsx(
            "pb-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl",
            color === "black" ? "text-black" : "text-white"
          )}
        >
          {description}
        </p>
      </div>
      <div className="flex justify-between mb-12">
        <div>
          <ul className="flex flex-col mb-5">
            {experience.map((item) => (
              <li key={item.id} className="flex gap-4 my-4">
                <CheckIcon />
                <p
                  className={clsx(
                    "font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl",
                    color === "black" ? "text-black" : "text-white"
                  )}
                >
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
          <Button onClick={toggleChat} color={color === "black" ? "black" : "primary"} size="large">
            Let's Discuss
          </Button>
        </div>
        <ul className="grid grid-cols-3 gap-3">
          {technologies.map((item, index) => (
            <div
              key={item.id}
              className={clsx(
                "w-full  md:px-3.5 py-5 border-transparent rounded-xl md:rounded-3xl font-medium md:font-normal text-[12px]  md:text-lg cursor-default transition duration-500 md:flex flex-col items-center justify-center gap-2 hover:shadow-lg ",
                // eslint-disable-next-line no-nested-ternary
                1 & index
                  ? color === "black"
                    ? "bg-gray-100 text-black hover:text-gray-100 hover:bg-black"
                    : "bg-gray-100 text-[#6A6A6A] hover:text-gray-100 hover:bg-[#6A6A6A]"
                  : color === "black"
                    ? "bg-black text-gray-100 hover:text-black hover:bg-gray-100"
                    : "bg-[#6A6A6A] text-gray-100 hover:text-[#6A6A6A] hover:bg-gray-100"
              )}
            >
              <Image src={item.img} alt={item.title} width={86} height={49} />
              <p className="text-sm font-medium leading-tight text-center">{item.title}</p>
            </div>
          ))}
        </ul>
      </div>
      <div className="pt-14 md:pt-24 lg:pt-[10.5rem]" />
    </>
  );
};

export default ExperienceComponent;
