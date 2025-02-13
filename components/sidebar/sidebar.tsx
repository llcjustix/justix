import Link from "next/link";
import useSettingsStore from "@/store/settings";
import { navLinks, socialMedia } from "@/database/database";
import { RiArrowRightLongLine } from "@remixicon/react";

const Sidebar = () => {
  const { toggleSidebar } = useSettingsStore();
  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="flex flex-col gap-8 mt-12">
        {navLinks.map((link) => (
          <Link
            key={link}
            href={link}
            onClick={toggleSidebar}
            className="capitalize text-2xl font-medium text-white hover:text-primary focus:outline-none transition duration-200 flex items-center justify-between"
          >
            <span>{link}</span>
            <span className="text-primary">
              <RiArrowRightLongLine />
            </span>
          </Link>
        ))}
      </div>
      <div className="flex gap-4 mb-4">
        {socialMedia.map((social) => (
          <Link
            href={social.link}
            key={social.id}
            className="p-2 flex items-center justify-center rounded-full text-black bg-white hover:text-white hover:bg-black transition duration-200"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
