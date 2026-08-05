import { Check, X } from "lucide-react";

import Pricing from "../ui/pricing";

function ComparisonPricing() {
  return (
    <Pricing>
      <Pricing.Header>
        <Pricing.Badge>
          Compare Plans
        </Pricing.Badge>

        <Pricing.Title>
          Compare Features
        </Pricing.Title>

        <Pricing.Description>
          Find the plan that's right for you.
        </Pricing.Description>
      </Pricing.Header>

      <div className="overflow-x-auto rounded-3xl border">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-900">
            <tr>
              <th className="p-5">
                Features
              </th>
              <th className="p-5">
                Starter
              </th>
              <th className="p-5">
                Pro
              </th>
              <th className="p-5">
                Enterprise
              </th>
            </tr>
          </thead>

          <tbody>
            {[
              ["Projects", "5", "Unlimited", "Unlimited"],
              ["Analytics", false, true, true],
              ["API", false, true, true],
              ["Support", false, true, true],
            ].map((row) => (
              <tr
                key={row[0]}
                className="border-t"
              >
                <td className="p-5 font-medium">
                  {row[0]}
                </td>

                {row.slice(1).map((value, index) => (
                  <td
                    key={index}
                    className="p-5"
                  >
                    {typeof value ===
                    "boolean" ? (
                      value ? (
                        <Check className="text-green-500" />
                      ) : (
                        <X className="text-red-500" />
                      )
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Pricing>
  );
}

export default ComparisonPricing;