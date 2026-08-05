import { Check } from "lucide-react";

import Button from "../ui/button";
import Pricing from "../ui/pricing";

const plans = [
  {
    name: "Starter",
    price: "$19",
  },
  {
    name: "Pro",
    price: "$49",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
  },
];

function DarkPricing() {
  return (
    <Pricing variant="dark">
      <Pricing.Header>
        <Pricing.Badge className="border-white/20 bg-white/10 text-white">
          Dark Pricing
        </Pricing.Badge>

        <Pricing.Title className="text-white">
          Powerful Plans For Every Team
        </Pricing.Title>

        <Pricing.Description className="text-gray-400">
          Designed for startups, agencies and
          enterprises.
        </Pricing.Description>
      </Pricing.Header>

      <Pricing.Grid>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl border p-8 transition hover:-translate-y-2 ${
              plan.popular
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-gray-800 bg-gray-900 text-white"
            }`}
          >
            {plan.popular && (
              <span className="mb-5 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600">
                Recommended
              </span>
            )}

            <h3 className="text-2xl font-bold">
              {plan.name}
            </h3>

            <div className="my-8">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>

              <span className="text-gray-300">
                /month
              </span>
            </div>

            <ul className="space-y-4">
              {[
                "Unlimited Projects",
                "Cloud Storage",
                "Analytics",
                "Premium Support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Check size={18} />

                  {item}
                </li>
              ))}
            </ul>

            <Button
              className="mt-10 w-full"
              variant={
                plan.popular
                  ? "secondary"
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

export default DarkPricing;