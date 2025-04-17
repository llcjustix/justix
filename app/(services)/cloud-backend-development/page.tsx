import ServicesHeader from "@/components/services-header";
import { cloudBackendDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";
import MainImagePath from "@/public/img/services/cloud-backend.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud & Backend Services",
  description:
    "Enterprise-grade cloud and backend solutions for your business. We deliver scalable cloud infrastructure, serverless applications, database optimization, and robust API development.",
  openGraph: {
    title: `Cloud & Backend Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Enterprise-grade cloud and backend solutions for your business. We deliver scalable cloud infrastructure, serverless applications, database optimization, and robust API development.",
    images: [
      {
        url: "/img/services/cloud-backend.webp", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Cloud & Backend Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Cloud & Backend Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Enterprise-grade cloud and backend solutions for your business. We deliver scalable cloud infrastructure, serverless applications, database optimization, and robust API development.",
    images: [
      {
        url: "/img/services/cloud-backend.webp", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "Cloud & Backend Services",
      },
    ],
  },
  keywords: [
    "cloud services",
    "backend development",
    "cloud infrastructure",
    "serverless applications",
    "database optimization",
    "API development",
    "microservices",
    "AWS",
    "Azure",
    "Google Cloud",
    "cloud migration",
    "DevOps",
    "scalable solutions",
  ],
};

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
        // src="/img/services/cloud-backend.webp"
        src={MainImagePath}
        alt="Cloud & Backend Development"
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
