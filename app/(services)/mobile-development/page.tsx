import ServicesHeader from "@/components/services-header";
import Image from "next/image";
import SolutionsComponent from "@/components/solutions";
import { mobileDevelopmentDatabase } from "@/database/services";
import ApproachComponent from "@/components/approach";
import ExperienceComponent from "@/components/experience";
import FAQComponent from "@/components/faq";
import MainImagePath from "@/public/img/services/mobile-development.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description:
    "Custom mobile application development for iOS and Android. We build intuitive, high-performance mobile apps that engage users and drive business growth.",
  openGraph: {
    title: `Mobile App Development Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Custom mobile application development for iOS and Android. We build intuitive, high-performance mobile apps that engage users and drive business growth.",
    images: [
      {
        url: "/img/services/mobile-development.webp", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Mobile App Development Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Custom mobile application development for iOS and Android. We build intuitive, high-performance mobile apps that engage users and drive business growth.",
    images: [
      {
        url: "/img/services/mobile-development.webp", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services",
      },
    ],
  },
  keywords: [
    "mobile app development",
    "iOS development",
    "Android development",
    "React Native",
    "Flutter",
    "cross-platform apps",
    "native app development",
    "mobile UI/UX design",
    "app store optimization",
    "enterprise mobile apps",
    "mobile app testing",
    "app maintenance",
    "mobile app strategy",
    "justix",
    process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  ],
};

const MobileDevelopment = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="Mobile App Development Services"
        description="We build custom mobile app solutions that boost engagement, brand value, and revenue while delivering experiences that ensure users keep coming back."
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        // src="/img/services/mobile-development.webp"
        src={MainImagePath}
        alt="Mobile App Development"
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
        title="Our full-cycle mobile app development services"
        steps={mobileDevelopmentDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent title="Our approach" steps={mobileDevelopmentDatabase.approach} />
    </section>
    <section className="container">
      <ExperienceComponent
        title="Why Justix for mobile application development?"
        description="Gain the competitive edge required to meet changing global technology trends and overcome challenges while consistently exceeding customer expectations with our custom mobile app solutions."
        experience={mobileDevelopmentDatabase.experience}
        technologies={mobileDevelopmentDatabase.experienceTechnologies}
      />
    </section>
    <section className="container">
      <FAQComponent title="Frequently asked questions" questions={mobileDevelopmentDatabase.faq} />
    </section>
  </>
);

export default MobileDevelopment;
