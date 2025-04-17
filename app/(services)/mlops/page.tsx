import ServicesHeader from "@/components/services-header";
import { mlOpsDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";
import MainImagePath from "@/public/img/services/mlops.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ML Ops Services",
  description:
    "Streamline your machine learning operations with our ML Ops services. We provide end-to-end solutions for deploying, monitoring, and maintaining ML models in production environments.",
  openGraph: {
    title: `ML Ops Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Streamline your machine learning operations with our ML Ops services. We provide end-to-end solutions for deploying, monitoring, and maintaining ML models in production environments.",
    images: [
      {
        url: "/img/services/mlops.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "ML Ops Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `ML Ops Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Streamline your machine learning operations with our ML Ops services. We provide end-to-end solutions for deploying, monitoring, and maintaining ML models in production environments.",
    images: [
      {
        url: "/img/services/mlops.jpg", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "ML Ops Services",
      },
    ],
  },
  keywords: [
    "ML Ops",
    "machine learning operations",
    "ML model deployment",
    "model monitoring",
    "model maintenance",
    "CI/CD for ML",
    "MLOps pipeline",
    "model versioning",
    "machine learning infrastructure",
    "automated ML workflows",
    "ML model optimization",
    "model governance",
    "production ML systems",
  ],
};

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
        // src="/img/services/mlops.jpg"
        src={MainImagePath}
        alt="ML Ops"
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
