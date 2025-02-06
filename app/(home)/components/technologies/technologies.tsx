"use client";

import { useState } from "react";
import { categorisedTechnologiesDatabase } from "@/database/technologies";
import clsx from "clsx";

const Technologies = () => {
  const [currentType, setCurrentType] = useState(categorisedTechnologiesDatabase[0]);
  return (
    <>
      <div className="max-w-3xl xl:max-w-4xl pb-8 pt-14 md:pt-24 lg:pt-[10.5rem]">
        <h2 className="font-bold pb-1 md:pb-0 sentence-first-letter sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
          Technologies we use
        </h2>
        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          Hire from our pool of 350+ specialized experts in web, mobile, and software engineering,
          specializing in the latest technologies and frameworks, ready to scale your development
          teams effortlessly.
        </p>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row mt-8 md:mt-12 lg:mt-20 md:border-t border-gray-300">
        <div className="md:border-r border-gray-300 md:pt-12 md:pr-12 w-[25%]">
          <div className="flex flex-col gap-2">
            {categorisedTechnologiesDatabase.map((item) => (
              <button
                type="button"
                key={item.title}
                onClick={() => setCurrentType(item)}
                className={clsx(
                  "whitespace-nowrap md:whitespace-normal outline-none md:w-full md:rounded-full py-5 md:px-7 text-left text-xl",
                  currentType.title === item.title
                    ? "font-bold bg-gradient-to-r from-primary-light to-white"
                    : "font-medium"
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="pt-8 w-full md:w-8/12 lg:w-9/12 md:ps-12 lg:pb-[18px] flex flex-col gap-6">
          {currentType.categories.map((category) => (
            <div key={category.title}>
              <h4 className="mb-4 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2 lg:gap-4">
                {category.technologies.map((technology) => (
                  <div
                    key={technology.title}
                    aria-label={technology.title}
                    className="cursor-pointer md:w-52 lg:w-[215px] w-[150px] bg-gray-100 px-6 py-3 border-transparent rounded-3xl sm:rounded-[2.45rem] hover:bg-black text-black hover:text-white hover:shadow-md hover:shadow-gray transition duration-100"
                  >
                    <span className="font-normal md:text-lg text-sm">{technology.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Technologies;
