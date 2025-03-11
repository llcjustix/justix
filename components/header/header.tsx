"use client";

import Logo from "@/components/logo";
import Link from "next/link";
import Button from "@/components/button";
import { RiCustomerService2Fill, RiMenu3Line } from "@remixicon/react";
import useSettingsStore from "@/store/settings";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import IconButton from "@/components/icon-button";
import { navLinks } from "@/database/database";

const HeaderServicesBody = dynamic(() => import("./services"));
const HeaderSolutionBody = dynamic(() => import("./solution"));
const HeaderCompanyBody = dynamic(() => import("./company"));

const Header = () => {
  const { push } = useRouter();
  const { toggleChat, toggleSidebar } = useSettingsStore();
  const [showPhone, setShowPhone] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasBorder, setHasBorder] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const togglePhone = () => {
    setShowPhone((prev) => !prev);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 40) {
      setHasBorder(false);
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
      setHasBorder(false);
    } else {
      setIsVisible(true);
      setHasBorder(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const renderPopover = (link: string, close: () => void) => {
    switch (link) {
      case "services":
        return <HeaderServicesBody close={close} />;
      case "solutions":
        return <HeaderSolutionBody close={close} />;
      case "about":
        return <HeaderCompanyBody close={close} />;
      default:
        return link;
    }
  };

  return (
    <header
      className={clsx(
        "bg-white transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
        hasBorder && "border-b border-gray-300"
      )}
    >
      <div className="container">
        <div className="flex justify-between items-center py-2 lg:py-4">
          <Link href="/" aria-label={process.env.NEXT_PUBLIC_WEBSITE_NAME}>
            <Logo />
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Popover key={link}>
                {({ open, close }) => (
                  <>
                    <PopoverButton
                      className={clsx(
                        "capitalize text-sm font-semibold hover:text-primary focus:outline-none transition duration-200",
                        open && "text-primary hover:text-primary"
                      )}
                      onClick={(e) => {
                        if (link === "work" || link === "contact") {
                          e.preventDefault();
                          e.stopPropagation();
                          push(`/${link}`);
                        }
                      }}
                    >
                      {link}
                    </PopoverButton>
                    <PopoverPanel
                      transition
                      className="w-full h-hit py-5 bg-white shadow-xl shadow-black-shadow fixed top-[68px] left-0"
                    >
                      <div className="container min-h-full">{renderPopover(link, close)}</div>
                    </PopoverPanel>
                  </>
                )}
              </Popover>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="sm:flex hidden items-center gap-2">
              <IconButton onClick={togglePhone} className="text-white" aria-label="Phone">
                <RiCustomerService2Fill size={20} />
              </IconButton>
              <Link
                href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                className={clsx(
                  "capitalize text-sm font-semibold hover:text-gray items-center gap-[2px] cursor-pointer transition-all duration-200 h-5 overflow-hidden text-center",
                  showPhone ? "flex w-[124px] min-w-max" : "w-0 invisible"
                )}
              >
                {process.env.NEXT_PUBLIC_PHONE}
              </Link>
            </div>
            <Button rounded onClick={toggleChat}>
              Get in Touch
            </Button>
            <IconButton
              color="white"
              className="block lg:hidden"
              onClick={toggleSidebar}
              arial-label="Menu"
            >
              <RiMenu3Line />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
