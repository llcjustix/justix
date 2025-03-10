import { successStoriesDatabase } from "@/database/success-stories";
import Link from "next/link";

const ClientsList = () => (
  <div className="grid md:grid-cols-2 gap-10 mb-40">
    {successStoriesDatabase.map((item) => (
      <Link href={item.websiteLink} target="_blank" key={item.title} className="group">
        <h3 className="group-hover:text-primary text-black font-bold pt-8 md:pt-0 pb-2 md:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
          {item.title}
        </h3>
        <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          {item.description}
        </p>
      </Link>
    ))}
  </div>
);

export default ClientsList;
