import { Metadata } from "next";
import ProcessHeader from "./components/process-header";
import ProcessFlow from "./components/process-flow";

export const metadata: Metadata = {
  title: "Our Process – From Idea to Impact",
  description:
    "Explore our step-by-step process designed to turn your ideas into successful digital products. From IP protection and discovery to agile development and long-term support—we’ve got you covered.",
  openGraph: {
    title: `Our Process – From Idea to Impact | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "See how we bring your vision to life with a proven process. We start with NDAs, strategy workshops, and UI/UX design, then move into agile development, QA, deployment, and long-term support.",
    images: [
      {
        url: "/img/about/strategy.webp",
        width: 1200,
        height: 630,
        alt: "Our Agile Development Process",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Process – From Idea to Impact | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Learn about our complete digital product lifecycle—from IP protection and discovery workshops to agile development, QA testing, and continuous support.",
    images: [
      {
        url: "/img/about/strategy.webp",
        width: 1200,
        height: 630,
        alt: "Our Agile Development Process",
      },
    ],
  },
  keywords: [
    "development process",
    "agile development",
    "UI/UX design process",
    "IP protection",
    "project discovery",
    "strategy workshops",
    "sprint planning",
    "QA and testing",
    "maintenance and support",
    "deployment strategy",
    "custom software development",
    "Justix process",
    "justix",
    process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  ],
};

const AboutProcess = () => (
  <>
    <section className="container">
      <ProcessHeader />
    </section>
    <section className="container">
      <ProcessFlow />
    </section>
  </>
);

export default AboutProcess;
