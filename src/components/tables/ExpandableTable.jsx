import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import Table from "../ui/table";

const employees = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    email: "john@example.com",
    phone: "+1 234 567 890",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI Designer",
    email: "jane@example.com",
    phone: "+1 456 789 123",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Project Manager",
    email: "alex@example.com",
    phone: "+1 987 654 321",
  },
];

function ExpandableTable() {
  const [openRow, setOpenRow] =
    useState(null);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head></Table.Head>

          <Table.Head>Name</Table.Head>

          <Table.Head>Role</Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {employees.map((employee) => (
          <>
            <Table.Row key={employee.id}>
              <Table.Cell>
                <button
                  onClick={() =>
                    setOpenRow(
                      openRow === employee.id
                        ? null
                        : employee.id
                    )
                  }
                >
                  {openRow === employee.id ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
              </Table.Cell>

              <Table.Cell>
                {employee.name}
              </Table.Cell>

              <Table.Cell>
                {employee.role}
              </Table.Cell>
            </Table.Row>

            {openRow === employee.id && (
              <Table.Row>
                <Table.Cell colSpan={3}>
                  <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
                    <p>
                      <strong>Email:</strong>{" "}
                      {employee.email}
                    </p>

                    <p className="mt-2">
                      <strong>Phone:</strong>{" "}
                      {employee.phone}
                    </p>
                  </div>
                </Table.Cell>
              </Table.Row>
            )}
          </>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ExpandableTable;