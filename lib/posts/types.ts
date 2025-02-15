export type Post = {
  /** Post url slug. It is the name of the post file, minus .md */
  slug: string;
  /** Full post title */
  title: string;
  /** Subtitle for display on the post's page */
  subtitle?: string;
  /** OpenGraph description */
  preview: string;
  /** Keywords of the post, used in OpenGraph metadata */
  tags: string[];
  /** Original publish date of the post, in Date and Time UTC format */
  date: string;
  /** Full markdown-formatted content of the post */
  content: string;
  /** File location of an image for display on the post's page */
  coverImage?: string;
  /** File location of an image for OpenGraph previews */
  ogImage?: string;
  /** Latitude of location for GeoRSS */
  lat?: number;
  /** Longitude of location for GeoRSS */
  long?: number;
};

export type Author = {
  name: string;
  url?: string | URL;
};
