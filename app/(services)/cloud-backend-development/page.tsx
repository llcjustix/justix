import ServicesHeader from "@/components/services-header";
import { cloudBackendDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";

const CloudBackendDevelopment = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="Cloud & Backend Services"
        description={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME}, we specialize in building powerful, scalable cloud and backend solutions that enhance your business operations, ensuring reliability and efficiency.`}
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        src="/img/services/cloud-backend.webp"
        alt="Cloud & Backend Development"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
      />
    </section>
    <section className="container">
      <SolutionsComponent
        title="Comprehensive cloud & backend development services"
        steps={cloudBackendDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="How we make your vision a reality"
        description="Our approach to backend development ensures every project is handled with precision and care."
        steps={cloudBackendDatabase.approach}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about Cloud & Backend development"
        questions={cloudBackendDatabase.faq}
      />
    </section>
  </>
);

export default CloudBackendDevelopment;
