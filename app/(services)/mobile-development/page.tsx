import ServicesHeader from "@/components/services-header";
import Image from "next/image";
import SolutionsComponent from "@/components/solutions";
import { mobileDevelopmentDatabase } from "@/database/services";
import ApproachComponent from "@/components/approach";
import ExperienceComponent from "@/components/experience";
import FAQComponent from "@/components/faq";
import MainImagePath from "@/public/img/services/mobile-development.webp";

const MobileDevelopment = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="Mobile App Development Services"
        description="We build custom mobile app solutions that boost engagement, brand value, and revenue while delivering experiences that ensure users keep coming back."
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        // src="/img/services/mobile-development.webp"
        src={MainImagePath}
        alt="Mobile App Development"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
        placeholder="blur"
      />
    </section>
    <section className="container">
      <SolutionsComponent
        title="Our full-cycle mobile app development services"
        steps={mobileDevelopmentDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent title="Our approach" steps={mobileDevelopmentDatabase.approach} />
    </section>
    <section className="container">
      <ExperienceComponent
        title={`Why ${process.env.NEXT_PUBLIC_WEBSITE_NAME} for mobile application development?`}
        description="Gain the competitive edge required to meet changing global technology trends and overcome challenges while consistently exceeding customer expectations with our custom mobile app solutions."
        experience={mobileDevelopmentDatabase.experience}
        technologies={mobileDevelopmentDatabase.experienceTechnologies}
      />
    </section>
    <section className="container">
      <FAQComponent title="Frequently asked questions" questions={mobileDevelopmentDatabase.faq} />
    </section>
  </>
);

export default MobileDevelopment;
