import { stack } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="techStack"
      className="mx-auto max-w-screen-xl flex flex-col justify-center px-4 py-20 h-screen "
    >
      <h2 className="text-3xl font-bold">Tech Stack</h2>

      <ul className="mt-3 w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {stack.map(({ id, src, title, className }) => (
          <li
            key={id}
            className={`shadow-md hover:scale-105 duration-500 justify-center py-2 h-36 flex items-center flex-col rounded-lg ${className}`}
          >
            <Image
              src={src}
              alt={title}
              priority
              height={120}
              width={120}
              className="w-20 mx-auto"
            />
            <p className="mt-4">{title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
