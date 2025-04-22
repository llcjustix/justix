import { MetadataRoute } from "next";

const webSiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL as string;

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: `${webSiteUrl}/sitemap.xml`,
});

export default robots;
