import { motion } from "framer-motion";

import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const featured = [
  {
    title: "Primary Button",
    category: "Buttons",
  },
  {
    title: "Profile Card",
    category: "Cards",
  },
  {
    title: "Login Form",
    category: "Forms",
  },
];

function FeaturedSection() {
  return (
    <Section
      id="featured"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <SectionTitle
        badge="Featured"
        title="Popular Components"
        description="Explore some of our most loved UI components."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {featured.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
          >
            {/* Preview */}
            <div className="flex h-64 items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              {item.category === "Buttons" && (
                <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white">
                  Primary Button
                </button>
              )}

              {item.category === "Cards" && (
                <div className="w-60 rounded-2xl border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-4 h-14 w-14 rounded-full bg-indigo-500" />

                  <h4 className="font-bold">
                    John Doe
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Frontend Developer
                  </p>
                </div>
              )}

              {item.category === "Forms" && (
                <div className="w-full max-w-xs space-y-3">
                  <div className="h-11 rounded-lg bg-white dark:bg-gray-700" />

                  <div className="h-11 rounded-lg bg-white dark:bg-gray-700" />

                  <button className="w-full rounded-lg bg-indigo-600 py-3 text-white">
                    Login
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-6 dark:border-gray-800">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                {item.category}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-500">
                Live Preview • Copy Code • View Code
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default FeaturedSection;