"use client";

import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import { successStoriesDatabase } from "@/database/success-stories";
import ProjectCard from "@/components/project-card";
import { useState } from "react";
import { useModal } from "@/hooks/use-modal";
import dynamic from "next/dynamic";
import Modal from "@/components/modal";
import { Translate } from "@/components/translate";

const SuccessStoryDetails = dynamic(() => import("./success-story-details"));

const SuccessStories = () => {
  const [isOpen, handleOpen, handleClose] = useModal();
  const [selectedStory, setSelectedStory] = useState<{
    link: string;
    title: string;
    description: string;
    large_description: string;
    img: string;
  } | null>(null);
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-end justify-between gap-y-3">
        <h2 className="font-bold text-black text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
          <Translate value="Our success stories" />
        </h2>
        <Link
          href="/work"
          className="text-xl hover:text-primary text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-300 ease-in-out"
        >
          <Translate value="More case studies" />
          <RiArrowRightLine className="w-[20px] h-[20px]" />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 lg:gap-x-28 mt-12 lg:mt-20">
        {successStoriesDatabase.map((story, index) => (
          <ProjectCard
            data={story}
            key={story.id}
            index={index}
            onClick={(data) => {
              setSelectedStory(data);
              handleOpen();
            }}
          />
        ))}
      </div>
      <Modal isOpen={isOpen && !!selectedStory} onClose={handleClose}>
        {!!selectedStory && (
          <div className="p-5">
            <SuccessStoryDetails data={selectedStory} />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SuccessStories;
