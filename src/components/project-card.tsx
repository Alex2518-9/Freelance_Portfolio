import { Project } from "../types/project";
import Image from "next/image";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-150 hover:ring-2 hover:ring-white">
      {p.image && (
        <Image
          src={p.image}
          alt={p.title}
          width={800}
          height={450}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {p.description}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <li
              key={tag}
              className="rounded bg-gray-100 text-slate-900 dark:bg-gray-800 px-2 py-1 text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-3 pt-5">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Live
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
