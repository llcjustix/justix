import clsx from "clsx";
import Link from "next/link";

interface ProjectCardProps {
  data: {
    link: string;
    title: string;
    description: string;
  };
  index: number;
}

const ProjectCard = ({ data, index }: ProjectCardProps) => (
  <Link
    key={data.link}
    href={data.link}
    className={clsx("flex flex-col gap-5", index & 1 && "mt-12 md:mt-16 lg:mt-32")}
  >
    <div className="w-full sm:h-[538px] h-[380px] rounded-3xl lg:block bg-gray-light" />
    <div>
      <h3 className="lg:mb-[20px] mb-3 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
        {data.title}
      </h3>
      <p>{data.description}</p>
    </div>
  </Link>
);

export default ProjectCard;
