import { RiCustomerService2Fill, RiMailFill } from "@remixicon/react";
import Form from "./components/form";

const Contact = () => (
  <section className="container">
    <div className="flex items-center justify-between gap-x-20 mt-24">
      <div className="w-[40%]">
        <h1 className=" font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
          Got an Idea for your Project?
        </h1>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          We’d love to learn more about you and what we can design and build together.
        </p>
        <div className="mt-8 md:mt-[220px] 2xl:mt-[175px] flex flex-col wrap md:gap-x-0 gap-2 gap-x-4">
          <div className="flex items-center gap-3">
            <RiMailFill size={24} />
            <p className="font-bold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              {process.env.NEXT_PUBLIC_EMAIL}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <RiCustomerService2Fill size={24} />
            <p className="font-bold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              {process.env.NEXT_PUBLIC_PHONE}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[60%]">
        <Form />
      </div>
    </div>
  </section>
);

export default Contact;
