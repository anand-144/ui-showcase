import Table from "../ui/table";

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
  },
  {
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "User",
  },
];

function SimpleTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Email</Table.Head>
          <Table.Head>Role</Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.email}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default SimpleTable;