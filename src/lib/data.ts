import { Project, Stack } from "../types/project";
import html from "../../public/assets/html.png";
import css from "../../public/assets/css.png";
import javascript from "../../public/assets/javascript.png";
import react from "../../public/assets/react.png";
import node from "../../public/assets/node.png";
import angular from "../../public/assets/angular.png";
import nextJs from "../../public/assets/nextJs.png";
import tailwind from "../../public/assets/tailwind.png";
import playwright from "../../public/assets/playwright.png";

export const projects: Project[] = [
  {
    title: "SaaS Landing Page",
    description:
      "Responsive, SEO-optimized landing page with Tailwind + Next.js.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image: "/images/saas-landing.png",
    live: "https://example.com",
    repo: "https://github.com/you/saas-landing",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather data with charts.",
    tags: ["Next.js", "API", "Chart.js"],
    image: "/images/weather.png",
    live: "https://example.com",
    repo: "https://github.com/you/weather-dashboard",
  },
  {
    title: "About Japan",
    description: "Real-time weather data with charts.",
    tags: ["Next.js", "API", "Chart.js"],
    image: "/images/weather.png",
    live: "https://example.com",
    repo: "https://github.com/you/weather-dashboard",
  },
];

export const stack: Stack[] = [
  {
    id: 1,
    src: html,
    title: "HTML",
    className: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    className: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    className: "shadow-yellow-500",
  },
  {
    id: 4,
    src: react,
    title: "React",
    className: "shadow-blue-600",
  },
  {
    id: 5,
    src: node,
    title: "Node.js",
    className: "shadow-green-500",
  },
  {
    id: 6,
    src: angular,
    title: "Angular",
    className: "shadow-red-500",
  },
  {
    id: 7,
    src: nextJs,
    title: "Next.js",
    className: "shadow-white",
  },
  {
    id: 8,
    src: tailwind,
    title: "Tailwind CSS",
    className: "shadow-blue-400",
  },
  {
    id: 9,
    src: playwright,
    title: "Playwright",
    className: "shadow-slate-500",
  },
];
