import Image from "next/image";
import Technologies from "@/app/(home)/components/technologies";
import Solutions from "./components/solutions";
import Approach from "./components/approach";
import Experience from "./components/experience";
import Faq from "./components/faq";

const BigDataDevelopmentService = () => (
  <>
    <section className="container">
      <div className="pt-10 lg:pt-16">
        <h1 className="font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] text-black">
          Big Data Development Services
        </h1>
        <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black">
          Turn your raw data into valuable business insights with{" "}
          {process.env.NEXT_PUBLIC_WEBSITE_NAME} custom big data solutions, built to improve
          decision-making and efficiency.
        </p>
      </div>
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        src="/img/services/big-data.webp"
        alt="Big Data Development Services"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
      />
    </section>
    <section className="container">
      <Solutions />
    </section>
    <section className="container">
      <Approach />
    </section>
    <section className="container">
      <Experience />
    </section>
    <section className="container">
      <Technologies
        title="Technologies we leverage for big data"
        description="Our team uses the latest technologies and platforms to ensure your big data system is efficient, scalable, and secure."
      />
    </section>
    <section className="container">
      <Faq />
    </section>
  </>
);
export default BigDataDevelopmentService;
