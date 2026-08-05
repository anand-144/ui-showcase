import { useState } from "react";
import { Check } from "lucide-react";

import Button from "../ui/button";
import Pricing from "../ui/pricing";

const monthly = [
  { name: "Starter", price: 15 },
  { name: "Pro", price: 35 },
  { name: "Business", price: 79 },
];

const yearly = [
  { name: "Starter", price: 12 },
  { name: "Pro", price: 28 },
  { name: "Business", price: 65 },
];

function TogglePricing() {
  const [yearlyBilling, setYearlyBilling] =
    useState(false);

  const plans = yearlyBilling
    ? yearly
    : monthly;

  return (
    <Pricing>
      <Pricing.Header>
        <Pricing.Badge>
          Flexible Pricing
        </Pricing.Badge>

        <Pricing.Title>
          Monthly or Yearly
        </Pricing.Title>

        <Pricing.Description>
          Save up to 20% with yearly billing.
        </Pricing.Description>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() =>
              setYearlyBilling(!yearlyBilling)
            }
            className="flex items-center gap-3 rounded-full bg-gray-200 p-1 dark:bg-gray-800"
          >
            <span
              className={`rounded-full px-4 py-2 text-sm ${
                !yearlyBilling &&
                "bg-white/20 shadow"
              }`}
            >
              Monthly
            </span>

            <span
              className={`rounded-full px-4 py-2 text-sm ${
                yearlyBilling &&
                "bg-white/20 shadow"
              }`}
            >
              Yearly
            </span>
          </button>
        </div>
      </Pricing.Header>

      <Pricing.Grid>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-3xl border bg-white p-8 shadow-sm dark:bg-gray-900"
          >
            <h3 className="text-2xl font-bold">
              {plan.name}
            </h3>

            <div className="my-8">
              <span className="text-5xl font-bold">
                ${plan.price}
              </span>

              <span className="text-gray-500">
                /month
              </span>
            </div>

            <ul className="space-y-4">
              {[
                "Unlimited Projects",
                "Analytics",
                "Priority Support",
                "Team Access",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Check
                    size={18}
                    className="text-green-500"
                  />

                  {item}
                </li>
              ))}
            </ul>

            <Button
              className="mt-10 w-full"
              variant="gradient"
            >
              Choose Plan
            </Button>
          </div>
        ))}
      </Pricing.Grid>
    </Pricing>
  );
}

export default TogglePricing;