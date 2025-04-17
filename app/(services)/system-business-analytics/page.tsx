import ServicesHeader from "@/components/services-header";
import { systemBusinessAnalyticsDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";
import MainImagePath from "@/public/img/services/system-business-analytics.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "System & Business Analytics Services",
  description:
    "Transform your data into actionable insights with our comprehensive business analytics services. We provide data analysis, business intelligence solutions, and strategic recommendations to optimize your operations.",
  openGraph: {
    title: `System & Business Analytics Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Transform your data into actionable insights with our comprehensive business analytics services. We provide data analysis, business intelligence solutions, and strategic recommendations to optimize your operations.",
    images: [
      {
        url: "/img/services/system-business-analytics.webp", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "System & Business Analytics Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `System & Business Analytics Services | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Transform your data into actionable insights with our comprehensive business analytics services. We provide data analysis, business intelligence solutions, and strategic recommendations to optimize your operations.",
    images: [
      {
        url: "/img/services/system-business-analytics.webp", // Same image as for OpenGraph
        width: 1200,
        height: 630,
        alt: "System & Business Analytics Services",
      },
    ],
  },
  keywords: [
    "business analytics",
    "system analytics",
    "data analysis",
    "business intelligence",
    "data visualization",
    "performance metrics",
    "predictive analytics",
    "statistical analysis",
    "business process optimization",
    "reporting systems",
    "KPI management",
    "decision support systems",
    "operational intelligence",
    "justix",
    process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  ],
};

const SystemBusinessAnalytics = () => (
  <>
    <section className="container">
      <ServicesHeader
        title="System/Business Analytics Services"
        description={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME}, we turn data into actionable insights, helping you optimize operations, enhance decision-making, and drive business growth with advanced analytics.`}
      />
    </section>
    <section className="w-screen relative lg:mt-40 mt-8">
      <Image
        // src="/img/services/system-business-analytics.webp"
        src={MainImagePath}
        alt="System/Business Analytics"
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
        title="Comprehensive analytics solutions for data-driven business success"
        steps={systemBusinessAnalyticsDatabase.solutions}
      />
    </section>
    <section className="container">
      <ApproachComponent
        title="Data-driven insights"
        steps={systemBusinessAnalyticsDatabase.approach}
      />
    </section>
    <section className="container">
      <FAQComponent
        title="Common questions about system and business analytics, data insights, and strategy optimization"
        questions={systemBusinessAnalyticsDatabase.faq}
      />
    </section>
  </>
);

export default SystemBusinessAnalytics;
