import { useState } from "react";

import Button from "../ui/button";
import Table from "../ui/table";

const users = Array.from(
  { length: 20 },
  (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role:
      index % 2 === 0
        ? "Admin"
        : "Member",
  })
);

const ITEMS_PER_PAGE = 5;

function PaginationTable() {
  const [page, setPage] =
    useState(1);

  const totalPages = Math.ceil(
    users.length / ITEMS_PER_PAGE
  );

  const visibleUsers = users.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>ID</Table.Head>

            <Table.Head>Name</Table.Head>

            <Table.Head>Role</Table.Head>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {visibleUsers.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>
                {user.id}
              </Table.Cell>

              <Table.Cell>
                {user.name}
              </Table.Cell>

              <Table.Cell>
                {user.role}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div className="mt-6 flex items-center justify-between">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
        >
          Previous
        </Button>

        <span className="text-sm font-medium">
          Page {page} of {totalPages}
        </span>

        <Button
          variant="gradient"
          disabled={
            page === totalPages
          }
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default PaginationTable;