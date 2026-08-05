import { Check } from "lucide-react";

import Button from "../ui/button";
import Pricing from "../ui/pricing";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for individuals getting started.",
    features: [
      "1 Project",
      "10 GB Storage",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    popular: true,
    description: "Best choice for growing teams.",
    features: [
      "10 Projects",
      "100 GB Storage",
      "Advanced Analytics",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For businesses that need more.",
    features: [
      "Unlimited Projects",
      "Unlimited Storage",
      "Team Collaboration",
      "24/7 Support",
    ],
  },
];

function SimplePricing() {
  return (
    <Pricing>
      <Pricing.Header>
        <Pricing.Badge>
          Pricing
        </Pricing.Badge>

        <Pricing.Title>
          Simple, Transparent Pricing
        </Pricing.Title>

        <Pricing.Description>
          Choose the perfect plan for your
          business. Upgrade anytime.
        </Pricing.Description>
      </Pricing.Header>

      <Pricing.Grid>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900 ${
              plan.popular
                ? "border-indigo-600 ring-2 ring-indigo-600"
                : "border-gray-200 dark:border-gray-800"
            }`}
          >
            {plan.popular && (
              <span className="mb-5 inline-flex rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold">
              {plan.name}
            </h3>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {plan.description}
            </p>

            <div className="mt-8">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>

              <span className="text-gray-500">
                /month
              </span>
            </div>

            <ul className="mt-8 space-y-4">
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
              Choose Plan
            </Button>
          </div>
        ))}
      </Pricing.Grid>
    </Pricing>
  );
}

export default SimplePricing;