"use client";

import Logo from "@/components/logo/logo";
import Link from "next/link";
import Button from "@/components/button";
import { RiPhoneFill } from "@remixicon/react";
import useSettingsStore from "@/store/settings";
import { useState } from "react";
import clsx from "clsx";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
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
        return link;
    }
  };

  return (
    <div className="container bg-white">
      <div className="flex justify-between items-center py-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Popover key={link}>
              <PopoverButton className="capitalize text-sm font-semibold hover:text-gray focus:outline-none">
                {link}
              </PopoverButton>
              <PopoverPanel
                transition
                className="w-full h-hit py-5 bg-white shadow-xl shadow-black-shadow fixed top-[68px] left-0"
              >
                <div className="container min-h-full">{renderPopover(link)}</div>
              </PopoverPanel>
            </Popover>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={togglePhone}>
            <RiPhoneFill size={20} />
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
  );
};

export default Header;
