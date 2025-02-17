import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import { successStoriesDatabase } from "@/database/success-stories";
import ProjectCard from "@/components/project-card";

const SuccessStories = () => (
  <div>
    <div className="flex items-end justify-between">
      <h2 className="text-[52px] font-bold text-black">Our success stories</h2>
      <Link
        href="/work"
        className="flex items-center gap-2 text-xl text-black hover:text-primary transform transition ease-in-out duration-200"
      >
        More case studies
        <RiArrowRightLine className="w-[20px] h-[20px]" />
      </Link>
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 lg:gap-x-28 mt-12 lg:mt-20">
      {successStoriesDatabase.map((story, index) => (
        <ProjectCard data={story} index={index} />
      ))}
    </div>
  </div>
);

export default SuccessStories;
