import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import { successStoriesDatabase } from "@/database/success-stories";
import clsx from "clsx";

const SuccessStories = () => (
  <div>
    <div className="flex items-end justify-between">
      <h2 className="text-[52px] font-bold">Our success stories</h2>
      <Link
        href="/work"
        className="flex items-center gap-2 text-xl hover:underline transform transition ease-in-out duration-300"
      >
        More case studies
        <RiArrowRightLine className="w-[20px] h-[20px]" />
      </Link>
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 lg:gap-x-28 mt-12 lg:mt-20">
      {successStoriesDatabase.map((story, index) => (
        <Link
          key={story.link}
          href={story.link}
          className={clsx("flex flex-col gap-5", index & 1 && "mt-12 md:mt-16 lg:mt-32")}
        >
          <div className="w-full h-[380px] md:h-[538px] rounded-3xl hidden lg:block bg-gray-light" />
          <div className="">
            <h3 className="lg:mb-[20px] mb-3 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
              {story.title}
            </h3>
            <p>{story.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default SuccessStories;
