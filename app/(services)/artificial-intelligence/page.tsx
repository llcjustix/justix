import Image from "next/image";
import FAQComponent from "@/components/faq";
import { artificialIntelligenceDatabase } from "@/database/services";
import ApproachComponent from "@/components/approach";
import ExperienceComponent from "@/components/experience";
import SolutionsComponent from "@/components/solutions";
import ServicesHeader from "@/components/services-header";
import Benefits from "./components/benefits";
import AiModels from "./components/ai-models";

const ArtificialIntelligence = () => (
  <div className="bg-black w-full h-full py-24">
    <section className="container">
      <ServicesHeader
        color="white"
        title="Artificial Intelligence Development Services"
        description={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME}, we deliver AI solutions that help your business
          grow and run more efficiently. Our team is here to help you use AI to improve your
          operations and stay ahead in the market.`}
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        src="/img/services/artificial-intelligence.webp"
        alt="Artificial Intelligence Development Services"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
      />
    </section>
    <section className="container">
      <ExperienceComponent
        title={`Why choose ${process.env.NEXT_PUBLIC_WEBSITE_NAME} for AI development?`}
        description="Our experience and skills in AI allow us to create custom solutions that meet your
          business needs."
        color="white"
        experience={artificialIntelligenceDatabase.experience}
        technologies={artificialIntelligenceDatabase.experienceTechnologies}
      />
    </section>
    <section className="container">
      <SolutionsComponent
        color="white"
        title="Our AI development services"
        steps={artificialIntelligenceDatabase.developmentServices}
      />
    </section>
    <section className="container">
      <div className="mt-14 md:mt-40">
        <Benefits />
      </div>
    </section>
    <section className="container">
      <ApproachComponent
        title="Our proven approach"
        steps={artificialIntelligenceDatabase.approach}
        color="white"
      />
    </section>
    <section className="container">
      <div className="mt-14 md:mt-40">
        <AiModels />
      </div>
    </section>
    <section className="container">
      <FAQComponent
        title="Frequently Asked Questions"
        questions={artificialIntelligenceDatabase.faq}
        color="white"
      />
    </section>
  </div>
);

export default ArtificialIntelligence;
