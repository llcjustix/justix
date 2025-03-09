import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import { successStoriesDatabase } from "@/database/success-stories";
import ProjectCard from "@/components/project-card";

const SuccessStories = () => (
  <div>
    <div className="flex md:flex-row flex-col md:items-end justify-between gap-y-3">
      <h2 className="font-bold text-black text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
        Our success stories
      </h2>
      <Link
        href="/work"
        className="text-xl hover:text-primary text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-300 ease-in-out"
      >
        More case studies
        <RiArrowRightLine className="w-[20px] h-[20px]" />
      </Link>
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 lg:gap-x-28 mt-12 lg:mt-20">
      {successStoriesDatabase.map((story, index) => (
        <ProjectCard data={story} key={story.id} index={index} />
      ))}
    </div>
  </div>
);

export default SuccessStories;
