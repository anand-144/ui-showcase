import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.6,
      }}
      className="relative"
    >
      {/* Browser Window */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
        {/* Browser Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="rounded-md bg-gray-100 px-4 py-1 text-xs text-gray-500 dark:bg-gray-800">
            ui-showcase.dev
          </div>

          <FaReact className="text-sky-500" size={22} />
        </div>

        {/* Preview Area */}
        <div className="space-y-6 p-8">
          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
              Primary
            </button>

            <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium dark:border-gray-700">
              Outline
            </button>

            <button className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white">
              Gradient
            </button>
          </div>

          <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700">
            <h3 className="font-semibold">
              Profile Card
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Modern reusable card component.
            </p>
          </div>

          <div className="space-y-3">
            <div className="h-10 rounded-lg bg-gray-100 dark:bg-gray-800" />

            <div className="h-10 rounded-lg bg-gray-100 dark:bg-gray-800" />

            <button className="w-full rounded-lg bg-indigo-600 py-3 text-white">
              Login
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroPreview;