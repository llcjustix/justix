import ServicesHeader from "@/components/services-header";
import { uiUxDesignDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";
import MainImagePath from "@/public/img/services/ui-ux-design.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services",
  description:
    "Create intuitive and engaging digital experiences with our UI/UX design services. We deliver user-centered design solutions that boost user satisfaction and drive business results.",
  openGraph: {
    title: `UI/UX Design Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Create intuitive and engaging digital experiences with our UI/UX design services. We deliver user-centered design solutions that boost user satisfaction and drive business results.",
    images: [
      {
        url: "/img/services/ui-ux-design.webp", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `UI/UX Design Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Create intuitive and engaging digital experiences with our UI/UX design services. We deliver user-centered design solutions that boost user satisfaction and drive business results.",
    images: [
      {
        url: "/img/services/ui-ux-design.webp", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services",
      },
    ],
  },
  keywords: [
    "UI/UX design",
    "user interface design",
    "user experience design",
    "interaction design",
    "wireframing",
    "prototyping",
    "visual design",
    "usability testing",
    "user research",
    "design systems",
    "responsive design",
    "accessibility",
    "mobile design",
  ],
};

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
        // src="/img/services/ui-ux-design.webp"
        src={MainImagePath}
        alt="UI/UX Design"
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
        title="Comprehensive UI/UX solutions for engaging, user-friendly digital products"
        steps={uiUxDesignDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="Crafting Impactful Designs"
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
