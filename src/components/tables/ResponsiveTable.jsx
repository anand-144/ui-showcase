import Table from "../ui/table";

const orders = [
  {
    id: "#1001",
    customer: "John Doe",
    amount: "$240",
    status: "Completed",
  },
  {
    id: "#1002",
    customer: "Sarah Wilson",
    amount: "$180",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Michael Lee",
    amount: "$520",
    status: "Completed",
  },
];

function ResponsiveTable() {
  return (
    <>
      {/* Desktop */}

      <div className="hidden md:block">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>
                Order ID
              </Table.Head>

              <Table.Head>
                Customer
              </Table.Head>

              <Table.Head>
                Amount
              </Table.Head>

              <Table.Head>
                Status
              </Table.Head>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {orders.map((order) => (
              <Table.Row key={order.id}>
                <Table.Cell>
                  {order.id}
                </Table.Cell>

                <Table.Cell>
                  {order.customer}
                </Table.Cell>

                <Table.Cell>
                  {order.amount}
                </Table.Cell>

                <Table.Cell>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      order.status ===
                      "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Mobile */}

      <div className="space-y-4 md:hidden">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border bg-white p-5 shadow-sm dark:bg-gray-900"
          >
            <h3 className="font-semibold">
              {order.id}
            </h3>

            <p className="mt-2 text-sm">
              <strong>Customer:</strong>{" "}
              {order.customer}
            </p>

            <p className="mt-1 text-sm">
              <strong>Amount:</strong>{" "}
              {order.amount}
            </p>

            <span
              className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                order.status ===
                "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ResponsiveTable;