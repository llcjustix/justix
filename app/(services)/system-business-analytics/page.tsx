import ServicesHeader from "@/components/services-header";
import { systemBusinessAnalyticsDatabase } from "@/database/services";
import SolutionsComponent from "@/components/solutions";
import ApproachComponent from "@/components/approach";
import FAQComponent from "@/components/faq";
import Image from "next/image";

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
        src="/img/services/system-business-analytics.webp"
        alt="System/Business Analytics"
        layout="responsive"
        width={700}
        height={475}
        className="object-contain object-center"
        priority
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
