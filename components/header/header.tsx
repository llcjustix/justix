"use client";

import Logo from "@/components/logo";
import Link from "next/link";
import Button from "@/components/button";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
  RiCustomerService2Fill,
  RiGlobalLine,
  RiMenu3Line,
} from "@remixicon/react";
import useSettingsStore from "@/store/settings";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Popover, PopoverButton, PopoverPanel, Radio, RadioGroup } from "@headlessui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import IconButton from "@/components/icon-button";
import { navLinks } from "@/database/database";
import { useTranslation } from "react-i18next";
import { languageList } from "@/database/languages";
import { setCookie } from "cookies-next";
import { Translate } from "@/components/translate";

const HeaderServicesBody = dynamic(() => import("./services"));
const HeaderSolutionBody = dynamic(() => import("./solution"));
const HeaderCompanyBody = dynamic(() => import("./company"));

const Header = () => {
  const { t, i18n } = useTranslation();
  const { push } = useRouter();
  const { toggleChat, toggleSidebar } = useSettingsStore();
  const [showPhone, setShowPhone] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasBorder, setHasBorder] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const togglePhone = () => {
    setShowPhone((prev) => !prev);
  };

  const handleChangeLanguage = async (value: string) => {
    const item = languageList.find((e) => e.value === value);
    if (item) {
      await i18n.changeLanguage(item.value);
      const html = document.documentElement;
      setCookie("lang", item.value);
      setCookie("dir", item.backward ? "rtl" : "ltr");
      html.setAttribute("lang", item.value);
      html.setAttribute("dir", item.backward ? "rtl" : "ltr");
    }
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
                      {t(link)}
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
              <Popover className="relative">
                {({ close }) => (
                  <>
                    <PopoverButton
                      aria-label="language"
                      className="text-white bg-black p-2 rounded-full hover:bg-primary transition duration-200 active:translate-y-px  hover:brightness-95"
                    >
                      <RiGlobalLine size={20} />
                    </PopoverButton>
                    <PopoverPanel
                      transition
                      anchor="bottom"
                      className="w-[200px] z-[1] mt-2 rounded-[10px] shadow-xl shadow-black-shadow border border-gray-100 py-2 px-2 bg-white"
                    >
                      <RadioGroup
                        className="flex flex-col gap-2 cursor-pointer"
                        onChange={(value) => {
                          handleChangeLanguage(value);
                          close();
                        }}
                      >
                        {languageList.map((language) => (
                          <Radio
                            key={language.id}
                            value={language.value}
                            className="flex items-center gap-1"
                          >
                            {i18n.language === language.value ? (
                              <RiCheckboxCircleLine size={20} />
                            ) : (
                              <RiCheckboxBlankCircleLine size={20} />
                            )}
                            <span className="font-medium text-base">{language.label}</span>
                          </Radio>
                        ))}
                      </RadioGroup>
                    </PopoverPanel>
                  </>
                )}
              </Popover>
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
              <Translate value="Get in Touch" />
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
