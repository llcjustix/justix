import ClientsList from "@/app/about/clients/components/clients-list";
import { Metadata } from "next";
import ClientsHeader from "./components/clients-header";

export const metadata: Metadata = {
  title: "Our Clients – Partners in Innovation",
  description:
    "Meet the companies and organizations that trust us to bring their ideas to life. Our clients span diverse industries, all united by a drive for digital innovation and impact.",
  openGraph: {
    title: `Our Clients – Partners in Innovation | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Explore the trusted partners we've collaborated with to build forward-thinking solutions. See who we’ve worked with and how we’ve helped them innovate.",
    images: [
      {
        url: process.env.NEXT_PUBLIC_LOGO as string, // Recommend adding a relevant thumbnail if it doesn't exist
        width: 1200,
        height: 630,
        alt: "Our Clients",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Clients – Partners in Innovation | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description:
      "Explore the trusted partners we've collaborated with to build forward-thinking solutions. See who we’ve worked with and how we’ve helped them innovate.",
    images: [
      {
        url: process.env.NEXT_PUBLIC_LOGO as string,
        width: 1200,
        height: 630,
        alt: "Our Clients",
      },
    ],
  },
  keywords: [
    "our clients",
    "client portfolio",
    "companies we work with",
    "trusted partners",
    "digital transformation clients",
    "innovative brands",
    "collaboration",
    "industry partners",
    "client success",
    "technology partnerships",
    "justix",
    process.env.NEXT_PUBLIC_WEBSITE_NAME as string,
  ],
};

const Clients = () => (
  <>
    <section className="container">
      <ClientsHeader />
    </section>
    <section className="container">
      <ClientsList />
    </section>
  </>
);

export default Clients;
