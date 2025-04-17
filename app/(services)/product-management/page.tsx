import ServicesHeader from "@/components/services-header";
import { productManagementService } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";
import MainImagePath from "@/public/img/services/product-management.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Management Services",
  description:
    "Drive product success from concept to launch with our expert product management services. We offer strategy development, market analysis, roadmap planning, and cross-functional team coordination to bring your vision to life.",
  openGraph: {
    title: `Product Management Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Drive product success from concept to launch with our expert product management services. We offer strategy development, market analysis, roadmap planning, and cross-functional team coordination to bring your vision to life.",
    images: [
      {
        url: "/img/services/product-management.webp", // Be sure to create this image
        width: 1200,
        height: 630,
        alt: "Product Management Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Product Management Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Drive product success from concept to launch with our expert product management services. We offer strategy development, market analysis, roadmap planning, and cross-functional team coordination to bring your vision to life.",
    images: [
      {
        url: "/img/services/product-management.webp", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "Product Management Services",
      },
    ],
  },
  keywords: [
    "product management",
    "product development",
    "product strategy",
    "roadmap planning",
    "market research",
    "customer discovery",
    "agile product management",
    "MVP development",
    "cross-functional collaboration",
    "product lifecycle",
    "user-centered design",
    "go-to-market strategy",
    "product optimization",
  ],
};

const ProductManagement = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="Product Management Services"
        description="We turn ideas into market-leading products by streamlining development, aligning business goals, and optimizing the entire product lifecycle for success."
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        // src="/img/services/product-management.webp"
        src={MainImagePath}
        alt="Product Management"
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
        title="End-to-end product management for innovation and growth"
        steps={productManagementService.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="Turning ideas into success"
        steps={productManagementService.approach}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about product strategy, development, and market success"
        questions={productManagementService.faq}
      />
    </section>
  </>
);

export default ProductManagement;
