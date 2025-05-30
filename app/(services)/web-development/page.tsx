import ServicesHeader from "@/components/services-header";
import Image from "next/image";
import SolutionsComponent from "@/components/solutions";
import { webDevelopmentDatabase } from "@/database/services";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import MainImagePath from "@/public/img/services/web.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "Professional web development solutions for businesses of all sizes. We create responsive, modern websites and web applications using the latest technologies and best practices.",
  openGraph: {
    title: `Web Development Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Professional web development solutions for businesses of all sizes. We create responsive, modern websites and web applications using the latest technologies and best practices.",
    images: [
      {
        url: "/img/services/web.webp", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Web Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Web Development Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Professional web development solutions for businesses of all sizes. We create responsive, modern websites and web applications using the latest technologies and best practices.",
    images: [
      {
        url: "/img/services/web.webp", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "Web Development Services",
      },
    ],
  },
  keywords: [
    "web development",
    "website design",
    "web applications",
    "responsive design",
    "frontend development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "e-commerce solutions",
    "CMS development",
    "progressive web apps",
    "SEO optimization",
    "justix",
    process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  ],
};

const WebDevelopment = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="Web Development Services"
        description="At Justix, we specialize in creating powerful and effective web solutions that help your business stand out online by creating user-friendly websites."
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
