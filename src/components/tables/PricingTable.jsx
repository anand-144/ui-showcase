import { Check, X } from "lucide-react";

import Table from "../ui/table";

const features = [
  {
    feature: "Projects",
    starter: "5",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Storage",
    starter: "10 GB",
    pro: "100 GB",
    enterprise: "Unlimited",
  },
  {
    feature: "Analytics",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Priority Support",
    starter: false,
    pro: true,
    enterprise: true,
  },
];

function PricingTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Feature</Table.Head>

          <Table.Head>Starter</Table.Head>

          <Table.Head>Pro</Table.Head>

          <Table.Head>Enterprise</Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {features.map((row) => (
          <Table.Row key={row.feature}>
            <Table.Cell>
              {row.feature}
            </Table.Cell>

            {[
              row.starter,
              row.pro,
              row.enterprise,
            ].map((value, index) => (
              <Table.Cell key={index}>
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
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default PricingTable;