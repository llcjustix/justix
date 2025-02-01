import { RiArrowRightLongLine } from "@remixicon/react";
import { companyDatabase } from "@/database/company";
import Link from "next/link";
import { clientsDatabase } from "@/database/clients";
import Image from "next/image";

const Company = () => (
  <div className="grid grid-cols-[200px,1px,auto] gap-5 w-full">
    <div className="flex items-center justify-between h-fit">
      <h2 className="text-2xl font-semibold">Company</h2>
      <RiArrowRightLongLine size={24} />
    </div>
    <div className="w-[1px] bg-gray-300" />
    <div className="flex gap-40 items-start">
      {companyDatabase.map((service) => (
        <div className="flex flex-col gap-3" key={service.title}>
          <h3 className="font-semibold text-base">{service.title}</h3>
          <div className="flex flex-col gap-2">
            {service.children.map((child) => (
              <Link
                key={child.link}
                href={child.link}
                className="flex items-center gap-2 hover:underline font-medium text-sm"
              >
                <span className="min-w-1 min-h-1 rounded-full bg-black" />
                {child.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div className="w-full flex flex-col gap-4">
        <h3 className="font-normal text-2xl">We partner with</h3>
        <div className="flex gap-3">
          {clientsDatabase.map((client) => (
            <Link
              key={client.name}
              href={client.link}
              className="h-[70px] w-[70px] flex items-center justify-center"
              target="_blank"
            >
              <Image
                src={client.img}
                alt={client.name}
                width={70}
                height={70}
                className="object-contain object-center"
                sizes="70px"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Company;
