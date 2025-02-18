import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterXLine } from "@remixicon/react";

export const navLinks = ["services", "solutions", "work", "company", "contact"];

export const socialMedia = [
  {
    id: "linkedin",
    link: "linkedin.com",
    icon: <RiLinkedinFill size={24} />,
  },
  {
    id: "x",
    link: "x.com",
    icon: <RiTwitterXLine size={24} />,
  },
  {
    id: "facebook",
    link: "https://www.facebook.com/share/152ssVMd1u/?mibextid=wwXIfr",
    icon: <RiFacebookFill size={24} />,
  },
  {
    id: "instagram",
    link: "instagram.com",
    icon: <RiInstagramLine size={24} />,
  },
];
