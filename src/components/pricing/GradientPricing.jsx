import { Check } from "lucide-react";

import Button from "../ui/button";
import Pricing from "../ui/pricing";

function GradientPricing() {
  return (
    <Pricing variant="gradient">
      <Pricing.Header>
        <Pricing.Badge className="border-white/20 bg-white/10 text-white">
          Pricing
        </Pricing.Badge>

        <Pricing.Title className="text-white">
          Premium Plans
        </Pricing.Title>

        <Pricing.Description className="text-white/80">
          Flexible pricing for individuals and teams.
        </Pricing.Description>
      </Pricing.Header>

      <Pricing.Grid>
        {[
          "Starter",
          "Professional",
          "Enterprise",
        ].map((plan, index) => (
          <div
            key={plan}
            className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white">
              {plan}
            </h3>

            <div className="my-8">
              <span className="text-5xl font-bold text-white">
                $
                {[19, 49, 99][index]}
              </span>

              <span className="text-white/70">
                /month
              </span>
            </div>

            <ul className="space-y-4 text-white">
              {[
                "Unlimited Projects",
                "Analytics",
                "Premium Support",
                "Cloud Backup",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <Check size={18} />

                  {feature}
                </li>
              ))}
            </ul>

            <Button
              className="mt-10 w-full"
              variant="secondary"
            >
              Choose Plan
            </Button>
          </div>
        ))}
      </Pricing.Grid>
    </Pricing>
  );
}

export default GradientPricing;