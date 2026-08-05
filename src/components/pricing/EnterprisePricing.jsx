import { Check, PhoneCall } from "lucide-react";

import Button from "../ui/button";
import Pricing from "../ui/pricing";

function EnterprisePricing() {
  return (
    <Pricing>
      <Pricing.Header>
        <Pricing.Badge>
          Enterprise
        </Pricing.Badge>

        <Pricing.Title>
          Custom Solutions For Large Businesses
        </Pricing.Title>

        <Pricing.Description>
          Tailored pricing with dedicated support,
          security and onboarding.
        </Pricing.Description>
      </Pricing.Header>

      <div className="mx-auto max-w-5xl rounded-3xl border bg-white p-10 shadow-xl dark:bg-gray-900">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-4xl font-bold">
              Enterprise
            </h3>

            <p className="mt-4 text-gray-500">
              Contact us for a custom quote that
              fits your organization.
            </p>

            <Button
              className="mt-8"
              variant="gradient"
            >
              <PhoneCall size={18} />
              Contact Sales
            </Button>
          </div>

          <div className="grid gap-4">
            {[
              "Unlimited Everything",
              "Dedicated Success Manager",
              "Custom Integrations",
              "99.99% SLA",
              "24/7 Priority Support",
              "Advanced Security",
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
        </div>
      </div>
    </Pricing>
  );
}

export default EnterprisePricing;