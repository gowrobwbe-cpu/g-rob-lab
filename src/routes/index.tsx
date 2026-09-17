import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gowrob Dash | Electronics & Robotics Enthusiast" },
      { name: "description", content: "Gowrob Dash is an Electronics student and G-Robotics enthusiast exploring Arduino, ESP32, embedded systems, robotics and AI technology content." },
      { name: "keywords", content: "Gowrob Dash, G-Robotics, Electronics, Robotics, Arduino, ESP32, ESP32-S3, Embedded Systems, Sylhet Polytechnic Institute, Electronics Student, Robotics Projects, AI Technology Content" },
      { property: "og:title", content: "Gowrob Dash | Electronics & Robotics Enthusiast" },
      { property: "og:description", content: "Explore Gowrob Dash’s interactive electronics and robotics lab, projects, skills and AI technology content." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});
