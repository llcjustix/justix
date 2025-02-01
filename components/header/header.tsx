"use client";

import Logo from "@/components/logo/logo";
import Link from "next/link";
import Button from "@/components/button";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import useSettingsStore from "@/store/settings";
import { useState } from "react";
import clsx from "clsx";
import { Popover } from "@headlessui/react";
import dynamic from "next/dynamic";

const HeaderServicesBody = dynamic(() => import("@/components/header/services"));

const navLinks = ["services", "solution", "work", "company", "contact"];

const Header = () => {
  const { toggleChat } = useSettingsStore();
  const [showPhone, setShowPhone] = useState(false);

  const togglePhone = () => {
    setShowPhone((prev) => !prev);
  };

  const renderPopover = (link: string) => {
    switch (link) {
      case "services":
        return <HeaderServicesBody />;
      default:
        return <div className="container">{link}</div>;
    }
  };

  return (
    // <div className="border border-black">
    <div className="container bg-white">
      <div className="flex justify-between items-center py-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Popover key={link} className="relative">
              <Popover.Button
                as="button"
                className="capitalize text-sm font-semibold hover:text-gray focus:outline-none"
              >
                {/* <Link href={`/${link}`} className="capitalize text-sm font-semibold hover:text-gray"> */}
                {link}
                {/* </Link> */}
              </Popover.Button>
              <Popover.Panel className="fixed top-[70px] left-0 w-full bg-white py-5">
                <div className="container">{renderPopover(link)}</div>
              </Popover.Panel>
            </Popover>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={togglePhone}>
            <PhoneFillIcon size={20} />
          </button>
          <Link
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className={clsx(
              "capitalize text-sm font-semibold hover:text-gray items-center gap-[2px] cursor-pointer transition-opacity duration-500",
              showPhone ? "flex" : "hidden"
            )}
          >
            {process.env.NEXT_PUBLIC_PHONE}
          </Link>
          <Button rounded onClick={toggleChat}>
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Header;
