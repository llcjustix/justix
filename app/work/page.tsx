import { WorksList } from "@/app/work/components/list";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies – Digital Innovation in Action",
  description:
    "Discover how our solutions have driven real-world success. Explore case studies that showcase how we’ve helped clients achieve digital transformation through innovative technology and strategic execution.",
  openGraph: {
    title: `Case Studies – Digital Innovation in Action | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Explore our portfolio of client success stories. From custom software to full-scale infrastructure projects, see how we turn vision into value.",
    images: [
      {
        url: "/img/processes/develop.webp", // Suggest creating this image if it doesn’t exist yet
        width: 1200,
        height: 630,
        alt: "Case Studies by Justix",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Case Studies – Digital Innovation in Action | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Explore our portfolio of client success stories. From custom software to full-scale infrastructure projects, see how we turn vision into value.",
    images: [
      {
        url: "/img/processes/develop.webp",
        width: 1200,
        height: 630,
        alt: "Case Studies by Justix",
      },
    ],
  },
  keywords: [
    "case studies",
    "digital innovation",
    "client success",
    "technology solutions",
    "software development case study",
    "DevOps success",
    "AI implementation",
    "project portfolio",
    "business transformation",
    "custom development",
    "enterprise IT",
    "Justix work",
    "justix",
    process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  ],
};

const Work = () => (
  <section className="container">
    <div className="mt-24">
      <div className="max-w-3xl">
        <h1 className="font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
          Case Studies
        </h1>
        <p className="text-black text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          See how {process.env.NEXT_PUBLIC_WEBSITE_NAME} has helped its clients achieve their vision
          of digital innovation.
        </p>
      </div>
    </div>
    <WorksList />
  </section>
);

export default Work;
