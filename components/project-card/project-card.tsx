import clsx from "clsx";

interface ProjectCardProps {
  data: {
    link: string;
    title: string;
    description: string;
    large_description: string;
  };
  onClick: (data: {
    link: string;
    title: string;
    description: string;
    large_description: string;
  }) => void;
  index: number;
}

const ProjectCard = ({ data, index, onClick }: ProjectCardProps) => (
  <button
    type="button"
    onClick={() => onClick(data)}
    key={data.link}
    className={clsx("text-left flex flex-col gap-5", index & 1 && "mt-12 md:mt-16 lg:mt-32")}
  >
    <div className="w-full sm:h-[538px] h-[380px] rounded-3xl lg:block bg-gray-light" />
    <div>
      <h3 className="lg:mb-[20px] mb-3 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
        {data.title}
      </h3>
      <p>{data.description}</p>
    </div>
  </button>
);

export default ProjectCard;
