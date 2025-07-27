export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-20">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Have a project in mind? Let’s talk.
      </p>

      {/* Replace action with your Formspree / EmailJS endpoint or own API route */}
      <form
        action="https://formspree.io/f/your-id"
        method="POST"
        className="mt-8 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}
