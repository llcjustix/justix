import ServicesHeader from "@/components/services-header";
import { devSecOpsDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";
import MainImagePath from "@/public/img/services/devsecops.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevSecOps Services",
  description:
    "Integrate security throughout your software development lifecycle with our DevSecOps services. We implement automated security testing, vulnerability management, and compliance frameworks.",
  openGraph: {
    title: `DevSecOps Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Integrate security throughout your software development lifecycle with our DevSecOps services. We implement automated security testing, vulnerability management, and compliance frameworks.",
    images: [
      {
        url: "/img/services/devsecops.jpeg",
        width: 1200,
        height: 630,
        alt: "DevSecOps Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `DevSecOps Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Integrate security throughout your software development lifecycle with our DevSecOps services. We implement automated security testing, vulnerability management, and compliance frameworks.",
    images: [
      {
        url: "/img/services/devsecops.jpeg", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "DevSecOps Services",
      },
    ],
  },
  keywords: [
    "DevSecOps",
    "security automation",
    "secure software development",
    "application security",
    "infrastructure security",
    "vulnerability management",
    "threat modeling",
    "compliance automation",
    "security testing",
    "SAST",
    "DAST",
    "security monitoring",
    "security as code",
    "justix",
    process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  ],
};

const DevSecOps = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="DevSecOps Services"
        description="At Justix, we integrate security into every phase of development, delivering DevSecOps solutions that automate threat detection, ensure compliance, and fortify your infrastructure—without slowing down innovation."
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        // src="/img/services/devsecops.jpeg"
        src={MainImagePath}
        alt="DevSecOps"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
      />
    </section>
    <section className="container">
      <SolutionsComponent
        title="End-to-end DevSecOps solutions for secure, scalable, and high-performing applications"
        steps={devSecOpsDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="Seamless security integration"
        description="Proactive risk management with continuous monitoring and automation"
        steps={devSecOpsDatabase.approach}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about DevSecOps, security automation, and compliance best practices"
        questions={devSecOpsDatabase.faq}
      />
    </section>
  </>
);

export default DevSecOps;
