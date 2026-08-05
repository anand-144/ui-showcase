import Table from "../ui/table";

const files = [
  {
    name: "Invoice.pdf",
    size: "2.4 MB",
    type: "PDF",
  },
  {
    name: "Presentation.pptx",
    size: "8.9 MB",
    type: "PowerPoint",
  },
  {
    name: "Report.docx",
    size: "1.3 MB",
    type: "Word",
  },
];

function CompactTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head className="px-3 py-2">
            File
          </Table.Head>

          <Table.Head className="px-3 py-2">
            Size
          </Table.Head>

          <Table.Head className="px-3 py-2">
            Type
          </Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {files.map((file) => (
          <Table.Row key={file.name}>
            <Table.Cell className="px-3 py-2">
              {file.name}
            </Table.Cell>

            <Table.Cell className="px-3 py-2">
              {file.size}
            </Table.Cell>

            <Table.Cell className="px-3 py-2">
              {file.type}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default CompactTable;