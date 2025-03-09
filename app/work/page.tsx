import ProjectCard from "@/components/project-card";
import { successStoriesDatabase } from "@/database/success-stories";

const Work = () => (
  <section className="container">
    <div className="mt-24">
      <div className="max-w-3xl">
        <h1 className="font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
          Case Studies
        </h1>
        <p className="text-black text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          See how {process.env.NEXT_PUBLIC_WEBSITE_NAME} has helped its clients achieve their vision
          of digital innovation.
        </p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 lg:gap-x-28 my-12 lg:my-20">
      {successStoriesDatabase.map((story, index) => (
        <ProjectCard key={story.id} data={story} index={index} />
      ))}
    </div>
  </section>
);

export default Work;
