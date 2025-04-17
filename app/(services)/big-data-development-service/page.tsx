import Image from "next/image";
import FAQComponent from "@/components/faq";
import { bigDataDatabase } from "@/database/services";
import ApproachComponent from "@/components/approach";
import ExperienceComponent from "@/components/experience";
import SolutionsComponent from "@/components/solutions";
import ServicesHeader from "@/components/services-header";
import MainImagePath from "@/public/img/services/big-data.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Big Data Services",
  description:
    "Harness the power of Big Data for your business. We provide comprehensive data analytics, processing, and visualization solutions to unlock valuable insights from your data.",
  openGraph: {
    title: `Big Data Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Harness the power of Big Data for your business. We provide comprehensive data analytics, processing, and visualization solutions to unlock valuable insights from your data.",
    images: [
      {
        url: "/img/services/big-data.webp", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Big Data Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Big Data Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Harness the power of Big Data for your business. We provide comprehensive data analytics, processing, and visualization solutions to unlock valuable insights from your data.",
    images: [
      {
        url: "/img/services/big-data.webp", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "Big Data Services",
      },
    ],
  },
  keywords: [
    "big data",
    "data analytics",
    "data processing",
    "data visualization",
    "business intelligence",
    "data warehousing",
    "data mining",
    "predictive analytics",
    "data-driven solutions",
  ],
};

const BigDataDevelopmentService = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="Big Data Development Services"
        description={`Turn your raw data into valuable business insights with 
          ${process.env.NEXT_PUBLIC_WEBSITE_NAME} custom big data solutions, built to improve
          decision-making and efficiency.`}
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        // src="/img/services/big-data.webp"
        src={MainImagePath}
        alt="Big Data Development Services"
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
        title="Comprehensive big data solutions"
        steps={bigDataDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="How we build your big data solution"
        description="Every project follows a clear, step-by-step process to ensure your big data solution is
            delivered on time and meets your business goals."
        steps={bigDataDatabase.approach}
      />
    </section>
    <section className="container">
      <ExperienceComponent
        title={`Why choose ${process.env.NEXT_PUBLIC_WEBSITE_NAME} for AI development?`}
        description="Our experience and skills in AI allow us to create custom solutions that meet your
          business needs."
        experience={bigDataDatabase.experience}
        technologies={bigDataDatabase.experienceTechnologies}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about big data development"
        questions={bigDataDatabase.faq}
      />
    </section>
  </>
);
export default BigDataDevelopmentService;
