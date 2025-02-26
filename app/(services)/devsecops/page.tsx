import ServicesHeader from "@/components/services-header";
import { devSecOpsDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";

const DevSecOps = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="DevSecOps Services"
        description={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME}, we integrate security into every phase of development, delivering DevSecOps solutions that automate threat detection, ensure compliance, and fortify your infrastructure—without slowing down innovation.`}
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        src="/img/services/devsecops.jpeg"
        alt="DevSecOps"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
      />
    </section>
    <section className="container">
      <SolutionsComponent
        title="End-to-end DevSecOps solutions for secure, scalable, and high-performing applications"
        steps={devSecOpsDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="Seamless security integration"
        description="Proactive risk management with continuous monitoring and automation"
        steps={devSecOpsDatabase.approach}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about DevSecOps, security automation, and compliance best practices"
        questions={devSecOpsDatabase.faq}
      />
    </section>
  </>
);

export default DevSecOps;
