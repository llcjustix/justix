"use client";

import { useModal } from "@/hooks/use-modal";
import { successStoriesDatabase } from "@/database/success-stories";
import ProjectCard from "@/components/project-card";
import { useState } from "react";
import Modal from "@/components/modal";
import dynamic from "next/dynamic";

const SuccessStoryDetails = dynamic(
  () => import("../../../(home)/components/success-stories/success-story-details")
);

export const WorksList = () => {
  const [isOpen, handleOpen, handleClose] = useModal();
  const [selectedStory, setSelectedStory] = useState<{
    link: string;
    title: string;
    description: string;
    large_description: string;
  } | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 lg:gap-x-28 my-12 lg:my-20">
        {successStoriesDatabase.map((story, index) => (
          <ProjectCard
            key={story.id}
            data={story}
            index={index}
            onClick={(data) => {
              setSelectedStory(data);
              handleOpen();
            }}
          />
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className="p-5">
          <SuccessStoryDetails data={selectedStory} />
        </div>
      </Modal>
    </>
  );
};
