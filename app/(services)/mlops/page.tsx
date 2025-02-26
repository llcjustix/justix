import ServicesHeader from "@/components/services-header";
import { mlOpsDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";

const MLOps = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="ML Ops Services"
        description={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME}, we specialize in ML Ops solutions that streamline and automate machine learning workflows, ensuring scalable, reliable, and efficient deployment, monitoring, and management of your models in production.`}
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        src="/img/services/mlops.jpg"
        alt="ML Ops"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
      />
    </section>
    <section className="container">
      <SolutionsComponent
        title="Comprehensive ML Ops solutions for seamless model deployment and management"
        steps={mlOpsDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="How we bring your ML models from development to production"
        description="Our approach to ML Ops ensures every model is deployed, monitored, and maintained with precision and care."
        steps={mlOpsDatabase.approach}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about ML Ops and model lifecycle management"
        questions={mlOpsDatabase.faq}
      />
    </section>
  </>
);

export default MLOps;
