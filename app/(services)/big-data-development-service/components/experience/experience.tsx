"use client";

import CheckIcon from "@/assets/icons/check";
import Button from "@/components/button";
import { bigDataDatabase } from "@/database/services";
import useSettingsStore from "@/store/settings";
import clsx from "clsx";
import Image from "next/image";

const Experience = () => {
  const { toggleChat } = useSettingsStore();
  return (
    <div className="pt-14 md:pt-24 lg:pt-[10.5rem]">
      <div className="flex justify-between mb-12">
        <div>
          <ul className="flex flex-col mb-5">
            {bigDataDatabase.experience.map((item) => (
              <li key={item.id} className="flex gap-4 my-4">
                <CheckIcon />
                <p className="text-black font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
          <Button onClick={toggleChat} color="black" size="large">
            Let's Discuss
          </Button>
        </div>

        <ul className="grid grid-cols-3 gap-3">
          {bigDataDatabase.experienceTechnologies.map((item, index) => (
            <div
              key={item.id}
              className={clsx(
                "w-full  md:px-3.5 py-5 border-transparent rounded-xl md:rounded-3xl font-medium md:font-normal text-[12px]  md:text-lg   transition duration-500 md:flex flex-col items-center justify-center gap-2 hover:shadow-lg ",
                1 & index
                  ? "bg-gray-100 text-black hover:text-gray-100 hover:bg-black"
                  : "bg-black text-gray-100 hover:text-black hover:bg-gray-100"
              )}
            >
              <Image src={item.img} alt={item.title} width={86} height={49} />
              <p className="text-sm font-medium leading-tight text-center">{item.title}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
