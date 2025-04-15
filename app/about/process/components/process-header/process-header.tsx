const ProcessHeader = () => (
  <div className="pt-40 lg:pt-[10.5rem] max-w-3xl">
    <h1 className="text-black font-bold pb-6 lg:pb-[2.375rem] undefined text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
      Our Process
    </h1>
    <p className="text-black text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      At {process.env.NEXT_PUBLIC_WEBSITE_NAME}, we deliver successful products by doing three
      things: being accountable for our projects, making our methods transparent, and building
      strong relationships with our clients.
    </p>
  </div>
);

export default ProcessHeader;
