import { RiArrowRightLongLine } from "@remixicon/react";
import Link from "next/link";
import { solutionsDatabase } from "@/database/solutions";

const Solutions = () => (
  <div className="grid grid-cols-[200px,1px,auto] gap-5 w-full">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold">Services</h2>
      <RiArrowRightLongLine size={24} />
    </div>
    <div className="w-[1px] bg-gray-300" />
    <div className="grid lg:grid-cols-4 grid-cols-3 gap-8 items-start justify-between">
      {solutionsDatabase.map((solution) => (
        <Link
          key={solution.link}
          href={solution.link}
          className="font-semibold text-base hover:underline"
        >
          {solution.title}
        </Link>
      ))}
    </div>
  </div>
);

export default Solutions;
