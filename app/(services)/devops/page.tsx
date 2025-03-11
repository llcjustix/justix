import ServicesHeader from "@/components/services-header";
import { devOpsDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";
import MainImagePage from "@/public/img/services/devops.webp";

const DevOps = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="DevOps Services"
        description={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME}, we accelerate software delivery with cutting-edge DevOps solutions, automating workflows, optimizing infrastructure, and ensuring seamless CI/CD for scalable, resilient, and high-performing systems.`}
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        // src="/img/services/devops.webp"
        src={MainImagePage}
        alt="DevOps"
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
        title="End-to-end DevOps solutions for faster, more reliable software deployment"
        steps={devOpsDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="Agile, automated pipeline"
        description="Our approach to DevOps guarantees smooth integration, continuous monitoring, and proactive system management for peak performance."
        steps={devOpsDatabase.approach}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about DevOps, automation, and infrastructure scalability"
        questions={devOpsDatabase.faq}
      />
    </section>
  </>
);

export default DevOps;
