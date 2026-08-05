import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19/mo",
    features: [
      "3 Projects",
      "5 GB Storage",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "$49/mo",
    features: [
      "Unlimited Projects",
      "Analytics",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Everything",
      "Dedicated Manager",
      "24/7 Support",
    ],
  },
];

function PricingAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {plans.map((plan, index) => (
        <div
          key={plan.name}
          className="overflow-hidden rounded-2xl border"
        >
          <button
            onClick={() =>
              setOpen(open === index ? -1 : index)
            }
            className="flex w-full items-center justify-between p-5"
          >
            <div>
              <h3 className="text-left text-lg font-semibold">
                {plan.name}
              </h3>

              <p className="text-sm text-indigo-600">
                {plan.price}
              </p>
            </div>

            {open === index ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </button>

          {open === index && (
            <div className="border-t p-5">
              <ul className="space-y-3">
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
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PricingAccordion;