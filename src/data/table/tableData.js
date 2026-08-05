const createCode = (name) => `
import ${name} from "@/components/tables/${name}";

export default function Example() {
  return <${name} />;
}
`;

export const simpleTableUsageCode = createCode("SimpleTable");
export const simpleTableSourceCode = simpleTableUsageCode;

export const stripedTableUsageCode = createCode("StripedTable");
export const stripedTableSourceCode = stripedTableUsageCode;

export const hoverTableUsageCode = createCode("HoverTable");
export const hoverTableSourceCode = hoverTableUsageCode;

export const borderedTableUsageCode = createCode("BorderedTable");
export const borderedTableSourceCode = borderedTableUsageCode;

export const compactTableUsageCode = createCode("CompactTable");
export const compactTableSourceCode = compactTableUsageCode;

export const pricingTableUsageCode = createCode("PricingTable");
export const pricingTableSourceCode = pricingTableUsageCode;

export const sortableTableUsageCode = createCode("SortableTable");
export const sortableTableSourceCode = sortableTableUsageCode;

export const searchTableUsageCode = createCode("SearchTable");
export const searchTableSourceCode = searchTableUsageCode;

export const paginationTableUsageCode = createCode("PaginationTable");
export const paginationTableSourceCode = paginationTableUsageCode;

export const expandableTableUsageCode = createCode("ExpandableTable");
export const expandableTableSourceCode = expandableTableUsageCode;

export const responsiveTableUsageCode = createCode("ResponsiveTable");
export const responsiveTableSourceCode = responsiveTableUsageCode;