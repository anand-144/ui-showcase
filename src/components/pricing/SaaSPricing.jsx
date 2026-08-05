import {
  Check,
  Sparkles,
} from "lucide-react";

import Button from "../ui/button";
import Pricing from "../ui/pricing";

const plans = [
  {
    name: "Free",
    price: "$0",
    users: "1 User",
  },
  {
    name: "Growth",
    price: "$29",
    users: "10 Users",
    popular: true,
  },
  {
    name: "Scale",
    price: "$99",
    users: "Unlimited Users",
  },
];

function SaaSPricing() {
  return (
    <Pricing className="bg-slate-50 dark:bg-gray-950">
      <Pricing.Header>
        <Pricing.Badge>
          SaaS Pricing
        </Pricing.Badge>

        <Pricing.Title>
          Everything Your Business Needs
        </Pricing.Title>

        <Pricing.Description>
          Flexible pricing for startups and
          growing companies.
        </Pricing.Description>
      </Pricing.Header>

      <Pricing.Grid>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-2 dark:bg-gray-900 ${
              plan.popular
                ? "border-indigo-600"
                : "border-gray-200 dark:border-gray-800"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2 text-sm font-semibold text-white">
                <Sparkles
                  size={14}
                  className="mr-1 inline"
                />
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold">
              {plan.name}
            </h3>

            <p className="mt-2 text-gray-500">
              {plan.users}
            </p>

            <div className="my-8">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>

              {plan.price !== "$0" && (
                <span className="text-gray-500">
                  /month
                </span>
              )}
            </div>

            <ul className="space-y-4">
              {[
                "Unlimited Projects",
                "Analytics Dashboard",
                "Priority Support",
                "API Access",
                "Team Collaboration",
              ].map((feature) => (
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
              Start Now
            </Button>
          </div>
        ))}
      </Pricing.Grid>
    </Pricing>
  );
}

export default SaaSPricing;