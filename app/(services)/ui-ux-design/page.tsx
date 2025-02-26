import ServicesHeader from "@/components/services-header";
import { uiUxDesignDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";

const UIUXDesign = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="UI/UX Design Services"
        description={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME}, we craft intuitive, visually stunning user experiences that blend creativity with functionality, ensuring seamless interactions and user satisfaction.`}
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        src="/img/services/ui-ux-design.webp"
        alt="UI/UX Design"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
      />
    </section>
    <section className="container">
      <SolutionsComponent
        title="Comprehensive UI/UX solutions for engaging, user-friendly digital products"
        steps={uiUxDesignDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="How we transform ideas into beautiful, high-performing designs"
        description="Our design approach focuses on user behavior, aesthetics, and usability, creating experiences that captivate and convert."
        steps={uiUxDesignDatabase.approach}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about UI/UX design, usability, and user engagement"
        questions={uiUxDesignDatabase.faq}
      />
    </section>
  </>
);

export default UIUXDesign;
