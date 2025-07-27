import { projects } from "../lib/data";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-screen-xl px-4 py-20">
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        A few things I’ve built recently.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
