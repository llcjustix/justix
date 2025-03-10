import Link from "next/link";
import useSettingsStore from "@/store/settings";
import { navLinks, socialMedia } from "@/database/database";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { RiArrowDownSLine, RiArrowRightLongLine } from "@remixicon/react";
import { servicesDatabase } from "@/database/services";
import { solutionsDatabase } from "@/database/solutions";
import { companyDatabase } from "@/database/company";

const Sidebar = () => {
  const { toggleSidebar } = useSettingsStore();
  const renderView = (link: string) => {
    switch (link) {
      case "services": {
        return (
          <Disclosure as="div" key={link}>
            <DisclosureButton className="group capitalize text-2xl font-medium text-white hover:text-primary focus:outline-none transition duration-200 w-full flex items-center justify-between">
              {link}
              <RiArrowDownSLine className="group-data-[open]:rotate-180 transition-all duration-200 ease-in-out" />
            </DisclosureButton>
            <DisclosurePanel className="text-white mt-3 flex flex-col gap-4 ml-1.5">
              {servicesDatabase.map((service) => (
                <div key={service.id}>
                  <h3 className="text-base mb-2">{service.title}</h3>
                  <div className="flex flex-col gap-1.5 ml-1.5">
                    {service.children.map((child) => (
                      <Link
                        href={`/${child.link}`}
                        key={child.id}
                        onClick={toggleSidebar}
                        className="text-sm font-normal hover:text-primary transition-colors duration-300"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </DisclosurePanel>
          </Disclosure>
        );
      }
      case "solutions": {
        return (
          <Disclosure as="div" key={link}>
            <DisclosureButton className="group capitalize text-2xl font-medium text-white hover:text-primary focus:outline-none transition duration-200 w-full flex items-center justify-between">
              {link}
              <RiArrowDownSLine className="group-data-[open]:rotate-180 transition-all duration-200 ease-in-out" />
            </DisclosureButton>
            <DisclosurePanel className="text-white mt-3 flex flex-col gap-4 ml-1.5">
              {solutionsDatabase.map((solution) => (
                <Link
                  href={solution.link}
                  replace
                  key={solution.id}
                  onClick={toggleSidebar}
                  className="text-base hover:text-primary transition-colors duration-300"
                >
                  {solution.title}
                </Link>
              ))}
            </DisclosurePanel>
          </Disclosure>
        );
      }
      case "about": {
        return (
          <Disclosure as="div" key={link}>
            <DisclosureButton className="group capitalize text-2xl font-medium text-white hover:text-primary focus:outline-none transition duration-200 w-full flex items-center justify-between">
              {link}
              <RiArrowDownSLine className="group-data-[open]:rotate-180 transition-all duration-300 ease-in-out" />
            </DisclosureButton>
            <DisclosurePanel className="text-white mt-3 flex flex-col gap-4 ml-1.5">
              {companyDatabase[0].children.map((solution) => (
                <Link
                  href={solution.link}
                  key={solution.link}
                  onClick={toggleSidebar}
                  replace
                  className="text-base hover:text-primary transition-colors duration-300"
                >
                  {solution.title}
                </Link>
              ))}
            </DisclosurePanel>
          </Disclosure>
        );
      }
      default:
        return (
          <Link
            href={link}
            key={link}
            replace
            onClick={toggleSidebar}
            className="group capitalize text-2xl font-medium text-white hover:text-primary focus:outline-none transition duration-200 w-full flex items-center justify-between"
          >
            {link}
            <RiArrowRightLongLine />
          </Link>
        );
    }
  };
  return (
    <div className="flex-1 h-full flex flex-col justify-between">
      <div className="flex-1 h-full overflow-y-auto flex flex-col gap-8 my-4">
        {navLinks.map((link) => renderView(link))}
      </div>
      <div className="flex gap-4 mb-4">
        {socialMedia.map((social) => (
          <Link
            href={social.link}
            key={social.id}
            target="_blank"
            className="p-2 flex items-center justify-center rounded-full hover:text-black hover:bg-white text-white bg-black transition duration-200"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
