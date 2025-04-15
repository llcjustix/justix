import ServicesHeader from "@/components/services-header";
import Image from "next/image";
import SolutionsComponent from "@/components/solutions";
import { webDevelopmentDatabase } from "@/database/services";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import MainImagePath from "@/public/img/services/web.webp";

const WebDevelopment = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="Web Development Services"
        description={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME}, we specialize in creating powerful and effective web solutions that help your business stand out online by creating user-friendly websites.`}
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        // src="/img/services/web.webp"
        src={MainImagePath}
        alt="Web Development"
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
        title="Comprehensive web development services"
        steps={webDevelopmentDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="How we make your vision a reality"
        description="Our approach to web development ensures every project is handled with precision and care."
        steps={webDevelopmentDatabase.approach}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about web development"
        questions={webDevelopmentDatabase.faq}
      />
    </section>
  </>
);

export default WebDevelopment;
