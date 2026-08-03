import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

import Card from "../ui/card";
import Button from "../ui/button";

const features = [
  "120+ UI Components",
  "Lifetime Updates",
  "Dark Mode Support",
  "Responsive Design",
  "Copy Source Code",
  "Premium Templates",
];

function PricingCard() {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <Card
        size="full"
        className="relative overflow-hidden border-2 border-indigo-500 shadow-2xl"
      >
        {/* Popular Badge */}
        <div className="absolute right-5 top-5">
          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
            <Sparkles size={14} />
            Most Popular
          </span>
        </div>

        <Card.Content>
          {/* Plan */}
          <div className="text-center">
            <h3 className="text-3xl font-bold">
              Pro Plan
            </h3>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Everything you need to build modern
              web applications.
            </p>

            {/* Price */}
            <div className="mt-8">
              <span className="text-6xl font-extrabold">
                $29
              </span>

              <span className="text-lg text-gray-500">
                /month
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200 dark:border-gray-800" />

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                  <Check
                    size={16}
                    className="text-emerald-600"
                  />
                </div>

                <span>{feature}</span>
              </div>
            ))}
          </div>
        </Card.Content>

        <Card.Footer className="justify-center">
          <Button
            variant="gradient"
            fullWidth
          >
            Get Started
          </Button>
        </Card.Footer>
      </Card>
    </motion.div>
  );
}

export default PricingCard;