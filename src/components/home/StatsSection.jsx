import { motion } from "framer-motion";
import {
  Blocks,
  Layers3,
  Copy,
  MoonStar,
} from "lucide-react";

import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const stats = [
  {
    title: "Components",
    value: "120+",
    icon: Blocks,
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Categories",
    value: "10+",
    icon: Layers3,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Copy Code",
    value: "1 Click",
    icon: Copy,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Dark Mode",
    value: "100%",
    icon: MoonStar,
    color: "from-emerald-500 to-green-500",
  },
];

function StatsSection() {
  return (
    <Section
      id="stats"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <SectionTitle
        badge="Statistics"
        title="Built for Modern Developers"
        description="Everything you need to build beautiful interfaces faster."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition duration-300 group-hover:opacity-10`}
              />

              <div
                className={`inline-flex rounded-2xl bg-gradient-to-br ${item.color} p-4 text-white`}
              >
                <Icon size={28} />
              </div>

              <h2 className="mt-8 text-5xl font-black">
                {item.value}
              </h2>

              <p className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-400">
                {item.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export default StatsSection;