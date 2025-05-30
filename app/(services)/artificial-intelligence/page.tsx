import Image from "next/image";
import FAQComponent from "@/components/faq";
import { artificialIntelligenceDatabase } from "@/database/services";
import ApproachComponent from "@/components/approach";
import ExperienceComponent from "@/components/experience";
import SolutionsComponent from "@/components/solutions";
import ServicesHeader from "@/components/services-header";
import MainImagePath from "@/public/img/services/artificial-intelligence.webp";
import { Metadata } from "next";
import Benefits from "./components/benefits";
import AiModels from "./components/ai-models";

export const metadata: Metadata = {
  title: "Artificial Intelligence Services",
  description:
    "Expert AI solutions to transform your business. We deliver cutting-edge machine learning, natural language processing, and computer vision solutions.",
  openGraph: {
    title: `Artificial Intelligence Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Expert AI solutions to transform your business. We deliver cutting-edge machine learning, natural language processing, and computer vision solutions.",
    images: [
      {
        url: "/img/services/artificial-intelligence.webp", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "AI Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Artificial Intelligence Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Expert AI solutions to transform your business. We deliver cutting-edge machine learning, natural language processing, and computer vision solutions.",
    images: [
      {
        url: "/img/services/artificial-intelligence.webp", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "AI Services",
      },
    ],
  },
  keywords: [
    "artificial intelligence",
    "AI services",
    "machine learning",
    "natural language processing",
    "computer vision",
    "business AI solutions",
    "AI consulting",
    "AI integration",
    "justix",
    process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  ],
};

const ArtificialIntelligence = () => (
  <div className="bg-black w-full h-full py-24">
    <section className="container">
      <ServicesHeader
        color="white"
        title="Artificial Intelligence Development Services"
        description="At Justix, we deliver AI solutions that help your business
          grow and run more efficiently. Our team is here to help you use AI to improve your
          operations and stay ahead in the market."
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        // src="/img/services/artificial-intelligence.webp"
        src={MainImagePath}
        placeholder="blur"
        alt="Artificial Intelligence Development Services"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
      />
    </section>
    <section className="container">
      <ExperienceComponent
        title="Why choose Justix for AI development?"
        description="Our experience and skills in AI allow us to create custom solutions that meet your
          business needs."
        color="white"
        experience={artificialIntelligenceDatabase.experience}
        technologies={artificialIntelligenceDatabase.experienceTechnologies}
      />
    </section>
    <section className="container">
      <SolutionsComponent
        color="white"
        title="Our AI development services"
        steps={artificialIntelligenceDatabase.developmentServices}
      />
    </section>
    <section className="container">
      <div className="mt-14 md:mt-40">
        <Benefits />
      </div>
    </section>
    <section className="container">
      <ApproachComponent
        title="Our proven approach"
        steps={artificialIntelligenceDatabase.approach}
        color="white"
      />
    </section>
    <section className="container">
      <div className="mt-14 md:mt-40">
        <AiModels />
      </div>
    </section>
    <section className="container">
      <FAQComponent
        title="Frequently Asked Questions"
        questions={artificialIntelligenceDatabase.faq}
        color="white"
      />
    </section>
  </div>
);

export default ArtificialIntelligence;
