import { Check } from "lucide-react";

import Button from "../ui/button";
import Pricing from "../ui/pricing";

const plans = [
  {
    name: "Basic",
    price: "$12",
    description: "For personal projects",
    features: [
      "3 Projects",
      "5 GB Storage",
      "Community Support",
    ],
  },
  {
    name: "Pro",
    price: "$39",
    popular: true,
    description: "Perfect for professionals",
    features: [
      "Unlimited Projects",
      "100 GB Storage",
      "Priority Support",
      "Advanced Analytics",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited Everything",
      "Dedicated Manager",
      "24/7 Support",
      "Custom Integrations",
    ],
  },
];

function ThreeTierPricing() {
  return (
    <Pricing className="bg-slate-50 dark:bg-gray-950">
      <Pricing.Header>
        <Pricing.Badge>
          Pricing Plans
        </Pricing.Badge>

        <Pricing.Title>
          Choose Your Plan
        </Pricing.Title>

        <Pricing.Description>
          Scale as your business grows with flexible pricing.
        </Pricing.Description>
      </Pricing.Header>

      <Pricing.Grid>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-2 dark:bg-gray-900 ${
              plan.popular
                ? "scale-105 border-indigo-600"
                : "border-gray-200 dark:border-gray-800"
            }`}
          >
            {plan.popular && (
              <span className="mb-6 inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </span>
            )}

            <h3 className="text-3xl font-bold">
              {plan.name}
            </h3>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {plan.description}
            </p>

            <div className="my-8">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>

              {plan.price !== "Custom" && (
                <span className="text-gray-500">
                  /mo
                </span>
              )}
            </div>

            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <Check
                    size={18}
                    className="text-green-500"
                  />

                  {feature}
                </li>
              ))}
            </ul>

            <Button
              className="mt-10 w-full"
              variant={
                plan.popular
                  ? "gradient"
                  : "outline"
              }
            >
              Get Started
            </Button>
          </div>
        ))}
      </Pricing.Grid>
    </Pricing>
  );
}

export default ThreeTierPricing;