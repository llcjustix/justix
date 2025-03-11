"use client";

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import clsx from "clsx";
import React, { Fragment } from "react";
import CrossIcon from "@/assets/icons/cross";
import Logo from "@/components/logo";
import Link from "next/link";
import useSettingsStore from "@/store/settings";

const drawerSize = {
  right: {
    small: "w-full sm:max-w-[400px]",
    medium: "w-full max-w-[600px]",
    large: "w-full max-w-[800px]",
  },
  bottom: {
    small: "max-w-full",
    medium: "max-w-full",
    large: "max-w-full",
  },
};

const drawerPosition = {
  right: {
    translateFrom: "translate-x-full",
    translateTo: "translate-x-0",
    height: "h-full",
    fullScreen: false,
    orientation: "top-0 right-0",
  },
  bottom: {
    translateFrom: "translate-y-full",
    translateTo: "translate-y-0",
    width: "max-w-full",
    fullScreen: true,
    height: "md:max-h-[90%] max-h-full",
    orientation: "bottom-0 right-0",
  },
};

interface DrawerProps extends React.PropsWithChildren {
  open: boolean;
  onClose: () => void;
  container?: boolean;
  position?: keyof typeof drawerPosition;
  color?: "white" | "black";
  duration?: number;
  withLogo?: boolean;
  size?: keyof (typeof drawerSize)["right"];
}

const Drawer = ({
  open,
  onClose,
  children,
  container = true,
  position = "right",
  color = "white",
  size = "medium",
  duration = 500,
  withLogo = false,
}: DrawerProps) => {
  const { toggleSidebar } = useSettingsStore();
  return (
    <Transition show={open} as={Fragment} unmount>
      <Dialog as="div" className="z-10 fixed" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-2500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-2500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className={clsx("fixed inset-0 overflow-hidden")}>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={clsx(
                `pointer-events-none fixed flex `,
                drawerPosition[position].orientation,
                drawerSize[position][size],
                drawerPosition[position].height
              )}
            >
              <TransitionChild
                as={Fragment}
                enter={`transform transition ease-in-out duration-${duration}`}
                enterFrom={drawerPosition[position].translateFrom}
                enterTo={drawerPosition[position].translateTo}
                leave={`transform transition ease-in-out duration-${duration}`}
                leaveFrom={drawerPosition[position].translateTo}
                leaveTo={drawerPosition[position].translateFrom}
              >
                <DialogPanel
                  className={`pointer-events-auto relative z-10 flex flex-col ${
                    drawerPosition[position].fullScreen ? "w-screen" : drawerSize[position][size]
                  } ${color === "black" ? "bg-black" : "bg-white"}`}
                >
                  <TransitionChild
                    as={Fragment}
                    enter={`ease-in-out duration-${duration}`}
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave={`ease-in-out duration-${duration}`}
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div
                      className={clsx(
                        "flex items-center px-5 py-2",
                        withLogo ? "justify-between" : "justify-end"
                      )}
                    >
                      {withLogo && (
                        <Link href="/" onClick={toggleSidebar}>
                          <Logo color="white" />
                        </Link>
                      )}
                      <button
                        type="button"
                        className={`
                        rounded-full w-10 h-10 flex items-center justify-center border border-gray-100 ${color === "black" ? "bg-white" : "bg-black"}`}
                        onClick={onClose}
                      >
                        <span className="sr-only">Close panel</span>
                        <CrossIcon aria-hidden="true" size="24" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div
                    className={clsx(
                      "flex-1 flex flex-col overflow-y-auto",
                      container && "container"
                    )}
                  >
                    {children}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
