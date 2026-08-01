import { motion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-400">
        🚀 100+ Reusable Components
      </span>

      <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
        Build Beautiful
        <span className="block bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
          React Interfaces
        </span>
        Faster.
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400">
        A curated collection of modern, reusable React components built
        with Tailwind CSS, Framer Motion, and accessibility in mind.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
          Browse Components

          <FaArrowRight />
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
          <FaGithub />

          GitHub
        </button>
      </div>
    </motion.div>
  );
}

export default HeroContent;