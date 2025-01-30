"use client";

import Logo from "@/components/logo/logo";
import Link from "next/link";
import Button from "@/components/button";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import useSettingsStore from "@/store/settings";
import { useState } from "react";
import clsx from "clsx";

const navLinks = ["services", "solution", "work", "company", "contact"];

const Header = () => {
  const { toggleChat } = useSettingsStore();
  const [showPhone, setShowPhone] = useState(false);

  const togglePhone = () => {
    setShowPhone((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center py-4">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            href={`/${link}`}
            key={link}
            className="capitalize text-sm font-semibold hover:text-gray"
          >
            {link}
          </Link>
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
  );
};

export default Header;
