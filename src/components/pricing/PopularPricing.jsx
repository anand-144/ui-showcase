import { Check } from "lucide-react";

import Button from "../ui/button";
import Pricing from "../ui/pricing";

function PopularPricing() {
  return (
    <Pricing>
      <Pricing.Header>
        <Pricing.Badge>🔥 Most Popular</Pricing.Badge>

        <Pricing.Title>
          One Plan That Fits Most Teams
        </Pricing.Title>

        <Pricing.Description>
          Everything you need to build and scale your
          business.
        </Pricing.Description>
      </Pricing.Header>

      <div className="mx-auto max-w-lg rounded-3xl border-2 border-indigo-600 bg-white p-10 shadow-2xl dark:bg-gray-900">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-3xl font-bold">
            Professional
          </h3>

          <span className="rounded-full bg-indigo-600 px-4 py-1 text-sm font-medium text-white">
            Best Value
          </span>
        </div>

        <div className="mb-8">
          <span className="text-6xl font-bold">
            $49
          </span>

          <span className="text-gray-500">
            /month
          </span>
        </div>

        <ul className="space-y-5">
          {[
            "Unlimited Projects",
            "Unlimited Team Members",
            "Advanced Analytics",
            "Priority Support",
            "API Access",
            "Custom Domains",
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
          variant="gradient"
        >
          Start Free Trial
        </Button>
      </div>
    </Pricing>
  );
}

export default PopularPricing;