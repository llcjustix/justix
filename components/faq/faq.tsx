"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import clsx from "clsx";
import { RiAddFill } from "@remixicon/react";
import { FAQProps } from "@/types/faq";
import { Translate } from "@/components/translate";

interface FAQComponentProps {
  title: string;
  questions: FAQProps[];
  color?: "white" | "black";
}

const FAQComponent = ({ title, questions = [], color = "black" }: FAQComponentProps) => (
  <div className="pb-8 pt-14 md:pt-24 lg:pt-[10.5rem]">
    <h2
      className={clsx(
        "font-bold pb-[2.375rem] sentence-first-letter text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]",
        color === "black" ? "text-black" : "text-white"
      )}
    >
      <Translate value={title} />
    </h2>
    <div className="flex flex-col gap-6">
      {questions.map((item) => (
        <Disclosure key={item.id} as="div" className="rounded-3xl border border-[#CCCCCC] p-6">
          {({ open }) => (
            <>
              <DisclosureButton className="w-full flex justify-between items-start">
                <h3
                  className={clsx(
                    "font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl tracking-[0px] text-left",
                    // eslint-disable-next-line no-nested-ternary
                    open ? "text-primary" : color === "black" ? "text-black" : "text-white"
                  )}
                >
                  <Translate value={item.question} />
                </h3>
                <span
                  className={clsx(
                    "transition-all duration-200 ease-out",
                    // eslint-disable-next-line no-nested-ternary
                    open
                      ? "text-primary transform rotate-45"
                      : color === "black"
                        ? "text-black"
                        : "text-white"
                  )}
                >
                  <RiAddFill size={28} />
                </span>
              </DisclosureButton>

              <DisclosurePanel
                transition
                className="origin-top transition-all duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
              >
                <p
                  className={clsx(
                    "text-sm lg:text-md xl:text-lg 2xl:text-xl mt-3",
                    color === "black" ? "text-black" : "text-white"
                  )}
                >
                  <Translate value={item.answer} />
                </p>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
);

export default FAQComponent;
