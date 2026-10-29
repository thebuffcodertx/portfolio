import cloudJourney from "./articles/my-cloud-journey.md?raw";

export const posts = [
  {
    slug: "my-cloud-journey",
    title: "Why I'm Pursuing AI Cloud Engineering & DevOps",
    date: "2026-10-29",
    category: "My Journey",
    excerpt:
      "My journey from military service and web development into AI Cloud Engineering and DevOps.",
    readingTime: "3 min read",
    content: cloudJourney,
  },
];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}