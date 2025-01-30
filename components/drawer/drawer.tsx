"use client";

import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import React, { Fragment } from "react";
import CrossIcon from "@/assets/icons/cross";

const drawerPosition = {
  right: {
    translateFrom: "translate-x-full",
    translateTo: "translate-x-0",
    width: "w-full max-w-[600px]",
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
}

const Drawer = ({
  open,
  onClose,
  children,
  container = true,
  position = "right",
  color = "white",
  duration = 500,
}: DrawerProps) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={onClose} unmount>
      <Transition.Child
        as={Fragment}
        enter="ease-in-out duration-2500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-2500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <div className={clsx("fixed inset-0 overflow-hidden")}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={clsx(
              `pointer-events-none fixed flex `,
              drawerPosition[position].orientation,
              drawerPosition[position].width,
              drawerPosition[position].height
            )}
          >
            <Transition.Child
              as={Fragment}
              enter={`transform transition ease-in-out duration-${duration}`}
              enterFrom={drawerPosition[position].translateFrom}
              enterTo={drawerPosition[position].translateTo}
              leave={`transform transition ease-in-out duration-${duration}`}
              leaveFrom={drawerPosition[position].translateTo}
              leaveTo={drawerPosition[position].translateFrom}
            >
              <Dialog.Panel
                className={`pointer-events-auto relative ${
                  drawerPosition[position].fullScreen ? "w-screen" : drawerPosition[position].width
                } ${color === "black" ? "bg-black" : "bg-white"}`}
              >
                <Transition.Child
                  as={Fragment}
                  enter={`ease-in-out duration-${duration}`}
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave={`ease-in-out duration-${duration}`}
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="flex justify-end px-4 py-2">
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
                </Transition.Child>
                <div
                  className={clsx("flex h-full flex-col overflow-y-auto", container && "container")}
                >
                  <div className="relative flex-1">{children}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
);

export default Drawer;
