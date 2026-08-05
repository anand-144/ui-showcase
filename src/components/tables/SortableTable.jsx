import { useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";

import Table from "../ui/table";

const initialUsers = [
  { name: "John Doe", age: 28, city: "New York" },
  { name: "Alice Smith", age: 24, city: "London" },
  { name: "Michael Lee", age: 31, city: "Tokyo" },
  { name: "Sarah Wilson", age: 26, city: "Sydney" },
];

function SortableTable() {
  const [ascending, setAscending] =
    useState(true);

  const users = useMemo(() => {
    return [...initialUsers].sort((a, b) =>
      ascending
        ? a.age - b.age
        : b.age - a.age
    );
  }, [ascending]);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>

          <Table.Head
            className="cursor-pointer"
            onClick={() =>
              setAscending(!ascending)
            }
          >
            <div className="flex items-center gap-2">
              Age
              <ArrowUpDown size={16} />
            </div>
          </Table.Head>

          <Table.Head>City</Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.name}>
            <Table.Cell>{user.name}</Table.Cell>

            <Table.Cell>{user.age}</Table.Cell>

            <Table.Cell>{user.city}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default SortableTable;