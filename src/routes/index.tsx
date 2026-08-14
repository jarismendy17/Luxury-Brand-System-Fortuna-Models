import { createFileRoute } from "@tanstack/react-router";
import bannerAsset from "@/assets/Banner_de_facebook.jpg.asset.json";
import { BrandApp } from "@/components/brand/BrandApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FORTUNA MODELS — Digital Brand System" },
      { name: "description", content: "Interactive brand guidelines and design system documentation for FORTUNA MODELS — a dark luxury modeling agency." },
      { property: "og:title", content: "FORTUNA MODELS — Digital Brand System" },
      { property: "og:description", content: "Dark luxury brand book: identity, typography, color, social systems and applications." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: bannerAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: bannerAsset.url },
    ],
  }),
  component: BrandApp,
});
