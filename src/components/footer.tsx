export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS.
    </footer>
  );
}
