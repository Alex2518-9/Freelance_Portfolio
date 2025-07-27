export default function Services() {
  const services = [
    {
      title: "Landing Pages",
      desc: "High-converting, responsive pages for your product.",
    },
    {
      title: "React/Next.js Apps",
      desc: "Modern SPAs and SSR apps with performance and accessibility in mind.",
    },
    {
      title: "UI Engineering",
      desc: "Component libraries, design systems, and DX tooling.",
    },
  ];

  return (
    <section
      id="services"
      className="mx-auto max-w-full flex justify-center px-4 py-20"
    >
      <div className="max-w-screen-xl">
        <h2 className="text-3xl font-bold">Services</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className="rounded-xl border border-gray-200 dark:border-gray-800 p-6"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {s.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
