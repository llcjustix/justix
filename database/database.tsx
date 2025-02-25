import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTelegramFill,
  RiTwitterXLine,
} from "@remixicon/react";

export const navLinks = ["services", "solutions", "work", "about", "contact"];

export const socialMedia = [
  {
    id: "linkedin",
    link: "https://linkedin.com",
    icon: <RiLinkedinFill size={24} />,
  },
  {
    id: "x",
    link: "https://x.com",
    icon: <RiTwitterXLine size={24} />,
  },
  {
    id: "facebook",
    link: "https://www.facebook.com/share/152ssVMd1u/?mibextid=wwXIfr",
    icon: <RiFacebookFill size={24} />,
  },
  {
    id: "instagram",
    link: "https://www.instagram.com/justix.uz?igsh=YWJraWQ4ZGpicGVv",
    icon: <RiInstagramLine size={24} />,
  },
  {
    id: "telegram",
    link: "https://t.me/+0QNlJlAYBghlNWRi",
    icon: <RiTelegramFill size={24} />,
  },
];
