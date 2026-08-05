import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import Table from "../ui/table";

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
  },
  {
    name: "Alex Johnson",
    email: "alex@example.com",
  },
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
  },
];

function SearchTable() {
  const [query, setQuery] =
    useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <div className="relative mb-6 max-w-sm">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Search users..."
          className="w-full rounded-xl border py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Email</Table.Head>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredUsers.map((user) => (
            <Table.Row key={user.email}>
              <Table.Cell>{user.name}</Table.Cell>

              <Table.Cell>
                {user.email}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default SearchTable;