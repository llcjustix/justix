import { Metadata } from "next";
import { SolutionsAbout } from "../components/about";
import { SolutionsBody } from "../components/body";

export const metadata: Metadata = {
  title: "JustixAI – AI Solutions for Business Transformation",
  description:
    "Explore JustixAI, your gateway to cutting-edge AI services. We specialize in machine learning, generative AI, data forecasting, and intelligent process automation to help businesses thrive in the digital age.",
  openGraph: {
    title: `JustixAI – AI Solutions for Business Transformation | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Discover JustixAI – a hub of AI innovation. From GPT-based systems to custom ML models, we build intelligent tools to automate, optimize, and future-proof your business.",
    images: [
      {
        url: "/img/solutions/justix-ai.jpg", // Already used in the page, ensure the image exists
        width: 1200,
        height: 630,
        alt: "JustixAI – AI Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `JustixAI – AI Solutions for Business Transformation | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Discover JustixAI – a hub of AI innovation. From GPT-based systems to custom ML models, we build intelligent tools to automate, optimize, and future-proof your business.",
    images: [
      {
        url: "/img/solutions/justix-ai.jpg",
        width: 1200,
        height: 630,
        alt: "JustixAI – AI Solutions",
      },
    ],
  },
  keywords: [
    "JustixAI",
    "AI solutions",
    "machine learning",
    "business AI",
    "generative AI",
    "GPT",
    "DALL·E",
    "Stable Diffusion",
    "predictive analytics",
    "AI automation",
    "AI assistants",
    "natural language processing",
    "computer vision",
    "enterprise AI",
    "AI consulting",
  ],
};

const JustixAI = () => (
  <>
    <section className="container">
      <SolutionsAbout
        mainTitle={`${process.env.NEXT_PUBLIC_WEBSITE_NAME} AI`}
        title=" - your guide to the world of AI"
        imagePath="/img/solutions/justix-ai.jpg"
      />
    </section>
    <section className="container">
      <SolutionsBody
        text1={`At ${process.env.NEXT_PUBLIC_WEBSITE_NAME} AI, we develop cutting-edge AI solutions for businesses, helping automate processes, analyze data, and enhance efficiency. Our experts specialize in machine learning, computer vision, natural language processing, and generative models, bringing the future of AI to you today.`}
        text2="We don’t just build AI products—we transform businesses, making them smarter and more competitive."
        text3="🚀 Let’s shape the future together with AI."
        listTitle="Our Expertise"
        list={[
          {
            id: 1,
            text: "AI for Business – Implementing machine learning models to optimize business processes.",
          },
          {
            id: 2,
            text: "Generative AI – Developing solutions powered by GPT, DALL·E, Stable Diffusion, and other advanced technologies.",
          },
          {
            id: 3,
            text: "Data Analysis & Forecasting – Intelligent algorithms for predictive analytics and anomaly detection.",
          },
          {
            id: 4,
            text: "Process Automation – AI assistants, chatbots, and speech recognition systems to streamline operations.",
          },
        ]}
      />
    </section>
  </>
);

export default JustixAI;
