import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Card from "../ui/card";
import Button from "../ui/button";

function FeatureCard() {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
    >
      <Card
        size="full"
        className="group relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl transition duration-500 group-hover:bg-indigo-500/20" />

        <Card.Content>
          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg">
            <Sparkles size={30} />
          </div>

          {/* Title */}
          <h3 className="mt-8 text-2xl font-bold">
            Modern UI Components
          </h3>

          {/* Description */}
          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
            Beautifully crafted React components
            with Tailwind CSS, accessibility,
            responsive layouts and elegant
            animations ready for production.
          </p>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "React",
              "Tailwind",
              "Dark Mode",
              "Animation",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Button
              variant="gradient"
              rightIcon={
                <ArrowRight size={16} />
              }
            >
              Learn More
            </Button>
          </div>
        </Card.Content>
      </Card>
    </motion.div>
  );
}

export default FeatureCard;