import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import { categories } from "../../data/categories";

function CategoriesSection() {
  return (
    <Section
      id="categories"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <SectionTitle
        badge="Categories"
        title="Browse Components by Category"
        description="Everything you need to build modern React interfaces."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
              }}
            >
              <Link
                to={item.path}
                className="group relative block overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${item.color} p-4 text-white transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                    {item.total} Components
                  </span>

                  <ArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-2"
                    size={22}
                  />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export default CategoriesSection;