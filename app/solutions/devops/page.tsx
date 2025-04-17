import { Metadata } from "next";
import { SolutionsAbout } from "../components/about";
import { SolutionsBody } from "../components/body";

export const metadata: Metadata = {
  title: "Justix DevOps – Scalable & Secure Infrastructure Solutions",
  description:
    "Streamline deployment, boost reliability, and secure your systems with Justix DevOps. We provide CI/CD automation, cloud infrastructure management, container orchestration, and DevSecOps practices for modern enterprises.",
  openGraph: {
    title: `Justix DevOps – Scalable & Secure Infrastructure Solutions | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Accelerate your infrastructure with Justix DevOps. From CI/CD to Kubernetes, we deliver automation, scalability, and reliability tailored to your business needs.",
    images: [
      {
        url: "/img/solutions/justix-ai.jpg", // Consider replacing with a unique image for DevOps
        width: 1200,
        height: 630,
        alt: "Justix DevOps Infrastructure Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Justix DevOps – Scalable & Secure Infrastructure Solutions | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Accelerate your infrastructure with Justix DevOps. From CI/CD to Kubernetes, we deliver automation, scalability, and reliability tailored to your business needs.",
    images: [
      {
        url: "/img/solutions/justix-ai.jpg", // Same image as OpenGraph for consistency
        width: 1200,
        height: 630,
        alt: "Justix DevOps Infrastructure Solutions",
      },
    ],
  },
  keywords: [
    "DevOps",
    "Justix DevOps",
    "CI/CD pipelines",
    "cloud infrastructure",
    "on-premise management",
    "Kubernetes",
    "containerization",
    "infrastructure automation",
    "DevSecOps",
    "system observability",
    "real-time monitoring",
    "infrastructure security",
    "deployment automation",
    "compliance solutions",
    "justix",
    process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  ],
};

const DevOps = () => (
  <>
    <section className="container">
      <SolutionsAbout
        mainTitle={`${process.env.NEXT_PUBLIC_WEBSITE_NAME} DevOps`}
        title=" Scalable & Secure Infrastructure"
        imagePath="/img/solutions/justix-ai.jpg"
      />
    </section>
    <section className="container">
      <SolutionsBody
        text1={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME} DevOps, we provide end-to-end automation and infrastructure management solutions, helping businesses accelerate deployment, minimize risks, and enhance service reliability.`}
        text2="We build robust, scalable, and secure DevOps platforms to keep your business running smoothly."
        text3={`🚀 Optimize your infrastructure with ${process.env.NEXT_PUBLIC_WEBSITE_NAME} DevOps.`}
        listTitle="Our Expertise"
        list={[
          {
            id: 1,
            text: "CI/CD – Setting up and optimizing delivery pipelines for faster development.",
          },
          {
            id: 2,
            text: "Cloud & On-Prem – Managing cloud and on-premise infrastructure, migration, and scaling.",
          },
          {
            id: 3,
            text: "Kubernetes & Containerization – Deployment, orchestration, and support for containerized applications.",
          },
          {
            id: 4,
            text: "Observability & Monitoring – Logging, alerting, and real-time monitoring for system stability.",
          },
          {
            id: 5,
            text: "Security & Compliance – Infrastructure security, secret management, and regulatory compliance.",
          },
        ]}
      />
    </section>
  </>
);

export default DevOps;
