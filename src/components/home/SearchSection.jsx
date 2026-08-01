import { motion } from "framer-motion";
import { Search } from "lucide-react";

import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const tags = [
  "Buttons",
  "Cards",
  "Forms",
  "Hero",
  "Pricing",
  "Tables",
  "Timeline",
  "Accordion",
  "Loaders",
];

function SearchSection() {
  return (
    <Section
      id="search"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <SectionTitle
        badge="Search Library"
        title="Find the Perfect Component"
        description="Search through our growing collection of beautifully crafted React UI components."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
        className="mx-auto mt-14 max-w-3xl"
      >
        <div className="rounded-3xl border border-white/30 bg-white/70 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/70">
          <div className="relative">
            <Search
              size={22}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Buttons, Cards, Forms..."
              className="h-16 w-full rounded-2xl bg-transparent pl-16 pr-6 text-lg outline-none"
            />
          </div>
        </div>

        {/* Popular Searches */}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white dark:border-gray-700 dark:bg-gray-900 dark:hover:border-indigo-500"
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export default SearchSection;