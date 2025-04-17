import ServicesHeader from "@/components/services-header";
import Image from "next/image";
import SolutionsComponent from "@/components/solutions";
import { web3DevelopmentDatabase } from "@/database/services";
import ExperienceComponent from "@/components/experience";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import MainImagePath from "@/public/img/services/web3.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web3.0 Services",
  description:
    "Cutting-edge Web3.0 solutions for forward-thinking businesses. We specialize in blockchain development, smart contracts, decentralized applications (dApps), and cryptocurrency integration.",
  openGraph: {
    title: `Web3.0 Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Cutting-edge Web3.0 solutions for forward-thinking businesses. We specialize in blockchain development, smart contracts, decentralized applications (dApps), and cryptocurrency integration.",
    images: [
      {
        url: "/img/services/web3.webp", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Web3.0 Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Web3.0 Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Cutting-edge Web3.0 solutions for forward-thinking businesses. We specialize in blockchain development, smart contracts, decentralized applications (dApps), and cryptocurrency integration.",
    images: [
      {
        url: "/img/services/web3.webp", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "Web3.0 Services",
      },
    ],
  },
  keywords: [
    "Web3.0",
    "blockchain",
    "smart contracts",
    "decentralized applications",
    "dApps",
    "cryptocurrency",
    "tokenization",
    "NFT",
    "DeFi solutions",
    "blockchain consulting",
    "web3 development",
  ],
};

const Web3DevelopmentService = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="Next-Gen Web3 Development Company"
        description={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME}, we help you take the next step in the new era of the internet with our personalized Web3 development services.`}
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        // src="/img/services/web3.webp"
        src={MainImagePath}
        alt="Web-3.0 Development Services"
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
        title="Our comprehensive web3 development services"
        steps={web3DevelopmentDatabase.solutions}
      />
    </section>
    <section className="container">
      <ExperienceComponent
        title="Why choose our web3 development services"
        description="With a decade of experience, our Web3 solutions are designed to future-proof your business in an evolving decentralized landscape."
        experience={web3DevelopmentDatabase.experience}
        technologies={web3DevelopmentDatabase.experienceTechnologies}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="Our web3 development process"
        steps={web3DevelopmentDatabase.approach}
      />
    </section>
    <section className="container">
      <FAQComponent title="Frequently asked questions" questions={web3DevelopmentDatabase.faq} />
    </section>
  </>
);

export default Web3DevelopmentService;
