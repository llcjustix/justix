"use client";

import { artificialIntelligenceDatabase } from "@/database/services";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { RiAddFill, RiSubtractFill } from "@remixicon/react";
import clsx from "clsx";

const Faq = () => (
  <>
    <h2 className="text-white font-bold lg:pb-[2.375rem] sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
      Frequently Asked Questions
    </h2>
    <div className="flex flex-col gap-6">
      {artificialIntelligenceDatabase.faq.map((item) => (
        <Disclosure key={item.id} as="div" className="rounded-3xl border border-[#CCCCCC] p-6">
          {({ open }) => (
            <>
              <DisclosureButton className="w-full flex justify-between items-center">
                <h3
                  className={clsx(
                    "font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]",
                    open ? "text-primary" : "text-white"
                  )}
                >
                  {item.question}
                </h3>
                <span className={clsx(open ? "text-primary" : "text-white")}>
                  {open ? <RiSubtractFill size={28} /> : <RiAddFill size={28} />}
                </span>
              </DisclosureButton>
              <DisclosurePanel
                transition
                className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
              >
                <p className="text-white text-sm lg:text-md xl:text-lg 2xl:text-xl mt-3">
                  {item.answer}
                </p>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  </>
);

export default Faq;
