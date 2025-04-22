import Image from "next/image";

interface SuccessStoryDetailsProps {
  data: {
    link: string;
    title: string;
    description: string;
    large_description: string;
    img: string;
  };
}

const SuccessStoryDetails = ({ data }: SuccessStoryDetailsProps) => (
  <div className="flex flex-col gap-5">
    <div className="relative w-full h-[380px] rounded-3xl lg:block bg-gray-light">
      <Image src={data?.img} alt={data?.title} fill className="rounded-3xl object-cover" />
    </div>
    <div>
      <h3 className="lg:mb-[20px] mb-3 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
        {data?.title}
      </h3>
      <p>{data?.large_description}</p>
    </div>
  </div>
);

export default SuccessStoryDetails;
