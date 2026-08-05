import { Check } from "lucide-react";

import Button from "../ui/button";
import Pricing from "../ui/pricing";

function GlassPricing() {
  return (
    <Pricing className="bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500">
      <Pricing.Header>
        <Pricing.Badge className="border-white/20 bg-white/10 text-white">
          Glass Pricing
        </Pricing.Badge>

        <Pricing.Title className="text-white">
          Modern Glassmorphism
        </Pricing.Title>

        <Pricing.Description className="text-white/80">
          Elegant pricing cards with glass effects.
        </Pricing.Description>
      </Pricing.Header>

      <Pricing.Grid>
        {[29, 59, 129].map((price) => (
          <div
            key={price}
            className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white">
              Premium
            </h3>

            <div className="my-8">
              <span className="text-5xl font-bold text-white">
                ${price}
              </span>

              <span className="text-white/70">
                /month
              </span>
            </div>

            <ul className="space-y-4 text-white">
              {[
                "Unlimited Projects",
                "Cloud Storage",
                "Premium Analytics",
                "24/7 Support",
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
              className="mt-10 w-full bg-pink-500 hover:bg-violet-500"
              
            >
              Get Started
            </Button>
          </div>
        ))}
      </Pricing.Grid>
    </Pricing>
  );
}

export default GlassPricing;