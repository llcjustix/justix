import { RiArrowRightLine } from "@remixicon/react";
import { servicesDatabase } from "@/database/services";
import Link from "next/link";
import { technologiesDatabase } from "@/database/technologies";

const HeaderServicesBody = () => (
  <div className="flex items-start h-full w-full">
    <div className="flex flex-col justify-between min-h-full">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Services</h2>
        <RiArrowRightLine size={24} />
      </div>
      <div>
        <h3 className="text-base font-medium">Technologies</h3>
        <div className="flex gap-2 flex-wrap">
          {technologiesDatabase.map((technology) => (
            <div key={technology.title} className="opacity-60">
              {technology.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="w-[1px] h-full bg-black mx-5" />
    <div className="grid lg:grid-cols-4 grid-cols-3 gap-8 items-start">
      {servicesDatabase.map((service) => (
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
    </div>
  </div>
);

export default HeaderServicesBody;
