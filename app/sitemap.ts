import { MetadataRoute } from "next";

const webSiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL as string;

export default (): MetadataRoute.Sitemap => [
  {
    url: webSiteUrl,
    lastModified: new Date(),
    changeFrequency: "always",
    priority: 1,
  },
];
