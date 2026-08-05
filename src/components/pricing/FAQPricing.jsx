import { Check } from "lucide-react";

import Button from "../ui/button";
import Pricing from "../ui/pricing";

function FAQPricing() {
  return (
    <Pricing>
      <Pricing.Header>
        <Pricing.Badge>
          Pricing + FAQ
        </Pricing.Badge>

        <Pricing.Title>
          Frequently Asked Questions
        </Pricing.Title>

        <Pricing.Description>
          Everything you need to know before
          purchasing.
        </Pricing.Description>
      </Pricing.Header>

      <div className="mx-auto max-w-4xl rounded-3xl border bg-white p-8 shadow-xl dark:bg-gray-900">
        <div className="mb-10 text-center">
          <h3 className="text-5xl font-bold">
            $39
          </h3>

          <p className="mt-2 text-gray-500">
            Professional Plan
          </p>

          <Button
            className="mt-8"
            variant="gradient"
          >
            Get Started
          </Button>
        </div>

        <div className="mb-10 grid gap-4">
          {[
            "Unlimited Projects",
            "Priority Support",
            "Cloud Backup",
            "API Access",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <Check
                size={18}
                className="text-green-500"
              />

              {feature}
            </div>
          ))}
        </div>

        <div className="space-y-6 border-t pt-8">
          <div>
            <h4 className="font-semibold">
              Can I cancel anytime?
            </h4>

            <p className="mt-2 text-gray-500">
              Yes, you can cancel your subscription
              whenever you want.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Do you offer refunds?
            </h4>

            <p className="mt-2 text-gray-500">
              We offer a 14-day money-back guarantee.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Can I upgrade later?
            </h4>

            <p className="mt-2 text-gray-500">
              Absolutely! You can upgrade your plan
              anytime.
            </p>
          </div>
        </div>
      </div>
    </Pricing>
  );
}

export default FAQPricing;