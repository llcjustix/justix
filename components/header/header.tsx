import Logo from "@/components/logo/logo";
import Link from "next/link";
import Button from "@/components/button";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";

const navLinks = ["services", "solution", "work", "company", "contact"];

const Header = () => (
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
      <Link
        href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
        className="capitalize text-sm font-semibold hover:text-gray flex items-center gap-[2px]"
      >
        <PhoneFillIcon size={16} />
        {process.env.NEXT_PUBLIC_PHONE}
      </Link>
      <Button rounded>Get in Touch</Button>
    </div>
  </div>
);

export default Header;
