import Link from "next/link";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";

const SuccessStories = () => (
  <div>
    <div className="flex items-end justify-between">
      <h2 className="text-[52px] font-bold">Our success stories</h2>
      <Link
        href="/work"
        className="flex items-center gap-2 text-xl hover:underline transform transition ease-in-out duration-300"
      >
        More case studies
        <ArrowRightLineIcon className="w-[20px] h-[20px]" />
      </Link>
    </div>
  </div>
);

export default SuccessStories;
