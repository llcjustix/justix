interface SuccessStoryDetailsProps {
  data: {
    link: string;
    title: string;
    description: string;
    large_description: string;
  } | null;
}

const SuccessStoryDetails = ({ data }: SuccessStoryDetailsProps) => (
  <div className="flex flex-col gap-5">
    <div className="w-full h-[380px] rounded-3xl lg:block bg-gray-light" />
    <div>
      <h3 className="lg:mb-[20px] mb-3 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
        {data?.title}
      </h3>
      <p>{data?.large_description}</p>
    </div>
  </div>
);

export default SuccessStoryDetails;
