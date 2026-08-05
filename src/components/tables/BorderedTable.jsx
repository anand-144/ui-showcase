import Table from "../ui/table";

const employees = [
  {
    id: "EMP001",
    name: "John Doe",
    department: "Engineering",
    salary: "$6,500",
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    department: "Design",
    salary: "$5,800",
  },
  {
    id: "EMP003",
    name: "Alex Johnson",
    department: "Marketing",
    salary: "$5,200",
  },
];

function BorderedTable() {
  return (
    <Table variant="bordered">
      <Table.Header>
        <Table.Row>
          <Table.Head className="border">
            Employee ID
          </Table.Head>

          <Table.Head className="border">
            Name
          </Table.Head>

          <Table.Head className="border">
            Department
          </Table.Head>

          <Table.Head className="border">
            Salary
          </Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {employees.map((employee) => (
          <Table.Row key={employee.id}>
            <Table.Cell className="border">
              {employee.id}
            </Table.Cell>

            <Table.Cell className="border">
              {employee.name}
            </Table.Cell>

            <Table.Cell className="border">
              {employee.department}
            </Table.Cell>

            <Table.Cell className="border">
              {employee.salary}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default BorderedTable;