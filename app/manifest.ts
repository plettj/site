import { THEME_BACKGROUND, THEME_LIGHT_PRIMARY } from "@/lib/constants";
import { MetadataRoute } from "next";

// Docs for this file: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest#generate-a-manifest-file
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Josiah Plett's Personal Website",
    short_name: "Josiah Plett",
    description:
      "Josiah's personal website, covering his professional and hobbyist interests, writing, photography, and more.",
    categories: [
      "personal",
      "entrepreneurship",
      "business",
      "finance",
      "games",
      "software",
      "lifestyle",
      "photo",
      "productivity",
      "social",
      "travel",
    ],
    start_url: "/",
    display: "browser", // Default.
    background_color: THEME_BACKGROUND,
    theme_color: THEME_LIGHT_PRIMARY,
    lang: "en",
    icons: [
      {
        src: "/icons/favicon32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icons/favicon256.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
