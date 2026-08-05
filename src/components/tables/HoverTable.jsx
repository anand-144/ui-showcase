import Table from "../ui/table";

const orders = [
  {
    id: "#1001",
    customer: "John Doe",
    status: "Completed",
  },
  {
    id: "#1002",
    customer: "Sarah Wilson",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Michael Lee",
    status: "Cancelled",
  },
];

function HoverTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Order ID</Table.Head>
          <Table.Head>Customer</Table.Head>
          <Table.Head>Status</Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {orders.map((order) => (
          <Table.Row
            key={order.id}
            className="cursor-pointer transition-colors hover:bg-indigo-50 dark:hover:bg-indigo-950"
          >
            <Table.Cell>{order.id}</Table.Cell>

            <Table.Cell>
              {order.customer}
            </Table.Cell>

            <Table.Cell>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  order.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {order.status}
              </span>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default HoverTable;