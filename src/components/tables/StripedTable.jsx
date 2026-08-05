import Table from "../ui/table";

const products = [
  {
    name: "MacBook Pro",
    category: "Laptop",
    price: "$1999",
  },
  {
    name: "iPhone 16",
    category: "Mobile",
    price: "$999",
  },
  {
    name: "AirPods Pro",
    category: "Accessories",
    price: "$249",
  },
];

function StripedTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Product</Table.Head>
          <Table.Head>Category</Table.Head>
          <Table.Head>Price</Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {products.map((product, index) => (
          <Table.Row
            key={product.name}
            className={
              index % 2 === 0
                ? "bg-gray-50 dark:bg-gray-900"
                : ""
            }
          >
            <Table.Cell>
              {product.name}
            </Table.Cell>

            <Table.Cell>
              {product.category}
            </Table.Cell>

            <Table.Cell>
              {product.price}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default StripedTable;