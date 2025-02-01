import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";

const HeaderServicesBody = () => (
  <div className="flex items-start h-full">
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Services</h2>
        <ArrowRightLineIcon size={24} />
      </div>
      <div>
        <h3 className="text-base font-medium">Technologies</h3>
        <div>asd</div>
      </div>
    </div>
    <div className="h-[100px] w-[1px] bg-gray-300 mx-5" />
  </div>
);

export default HeaderServicesBody;
