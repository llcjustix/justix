"use client";

import { useState } from "react";
import { categorisedTechnologiesDatabase } from "@/database/technologies";
import clsx from "clsx";
import Modal from "@/components/modal";
import { useModal } from "@/hooks/use-modal";
import { Translate } from "@/components/translate";

interface TechnologiesProps {
  title?: string;
  description?: string;
}

const Technologies = ({ title, description }: TechnologiesProps) => {
  const [isOpen, handleOpen, handleClose] = useModal();
  const [currentType, setCurrentType] = useState(categorisedTechnologiesDatabase[0]);
  const [viewCategory, setViewCategory] = useState(
    categorisedTechnologiesDatabase[0].categories[0]
  );
  return (
    <>
      <div className="max-w-3xl xl:max-w-4xl pb-8 pt-14 md:pt-24 lg:pt-[10.5rem]">
        <h2 className="font-bold pb-1 md:pb-0 sentence-first-letter sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
          <Translate value={title || "Technologies we use"} />
        </h2>
        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          <Translate
            value={
              description ||
              "Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly."
            }
          />
        </p>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row mt-8 md:mt-12 lg:mt-20 md:border-t border-gray-300">
        <div className="md:border-r border-gray-300 md:pt-12 md:pr-12 lg:w-[25%] w-full overflow-auto pb-4">
          <div className="flex md:flex-col md:gap-2 gap-6">
            {categorisedTechnologiesDatabase.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setCurrentType(item)}
                className={clsx(
                  "whitespace-nowrap md:whitespace-normal outline-none md:w-full max-w-max rounded-full md:py-5 py-3 md:px-7 px-4 text-left text-xl",
                  currentType.id === item.id ? "font-bold bg-gray-light" : "font-medium"
                )}
              >
                <Translate value={item.title} />
              </button>
            ))}
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300 md:hidden block" />
        <div className="pt-12 w-full flex-1 md:ps-12 lg:pb-[18px] flex flex-col gap-6">
          {currentType.categories.map((category) => (
            <div key={category.id}>
              <h4 className="mb-4 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
                <Translate value={category.title} />
              </h4>
              <div className="flex flex-wrap gap-2 lg:gap-4">
                {category.technologies.slice(0, 6).map((technology, index) => (
                  <button
                    type="button"
                    key={technology.id}
                    aria-label={technology.title}
                    onClick={() => {
                      if (index === 5 && category.technologies.length > 6) {
                        setViewCategory(category);
                        handleOpen();
                      }
                    }}
                    className={clsx(
                      "text-left md:w-52 lg:w-[215px] w-[150px] px-6 py-3 rounded-3xl sm:rounded-[2.45rem] text-black",
                      index === 5 && category.technologies.length > 6
                        ? "cursor-pointer bg-gray-light "
                        : "cursor-default bg-gray-light"
                    )}
                  >
                    {index === 5 && category.technologies.length > 6 ? (
                      <span className="font-normal md:text-lg text-sm flex justify-center">
                        ...
                      </span>
                    ) : (
                      <span className="font-normal md:text-lg text-sm">
                        <Translate value={technology.title} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose} withCloseButton>
        <div key={viewCategory.id} className="py-6 px-5">
          <h4 className="mb-4 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px] w-full">
            <Translate value={viewCategory.title} />
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {viewCategory.technologies
              .slice(5, viewCategory.technologies.length)
              .map((technology) => (
                <div
                  key={technology.id}
                  aria-label={technology.title}
                  className="cursor-default w-full bg-gray-light px-6 py-3 rounded-3xl sm:rounded-[2.45rem] text-black"
                >
                  <span className="font-normal md:text-lg text-sm">
                    <Translate value={technology.title} />
                  </span>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Technologies;
