const createCode = (name) => `
import ${name} from "@/components/tables/${name}";

export default function Example() {
  return <${name} />;
}
`;

/* -------------------------------------------------------------------------- */
/*                                 Usage Code                                 */
/* -------------------------------------------------------------------------- */

export const simpleTableUsageCode = createCode("SimpleTable");
export const stripedTableUsageCode = createCode("StripedTable");
export const hoverTableUsageCode = createCode("HoverTable");
export const borderedTableUsageCode = createCode("BorderedTable");
export const compactTableUsageCode = createCode("CompactTable");
export const pricingTableUsageCode = createCode("PricingTable");
export const sortableTableUsageCode = createCode("SortableTable");
export const searchTableUsageCode = createCode("SearchTable");
export const paginationTableUsageCode = createCode("PaginationTable");
export const expandableTableUsageCode = createCode("ExpandableTable");
export const responsiveTableUsageCode = createCode("ResponsiveTable");

/* -------------------------------------------------------------------------- */
/*                                Source Code                                 */
/* -------------------------------------------------------------------------- */

import simpleTableRaw from "../../components/tables/SimpleTable.jsx?raw";
import stripedTableRaw from "../../components/tables/StripedTable.jsx?raw";
import hoverTableRaw from "../../components/tables/HoverTable.jsx?raw";
import borderedTableRaw from "../../components/tables/BorderedTable.jsx?raw";
import compactTableRaw from "../../components/tables/CompactTable.jsx?raw";
import pricingTableRaw from "../../components/tables/PricingTable.jsx?raw";
import sortableTableRaw from "../../components/tables/SortableTable.jsx?raw";
import searchTableRaw from "../../components/tables/SearchTable.jsx?raw";
import paginationTableRaw from "../../components/tables/PaginationTable.jsx?raw";
import expandableTableRaw from "../../components/tables/ExpandableTable.jsx?raw";
import responsiveTableRaw from "../../components/tables/ResponsiveTable.jsx?raw";

export const simpleTableSourceCode = simpleTableRaw;
export const stripedTableSourceCode = stripedTableRaw;
export const hoverTableSourceCode = hoverTableRaw;
export const borderedTableSourceCode = borderedTableRaw;
export const compactTableSourceCode = compactTableRaw;
export const pricingTableSourceCode = pricingTableRaw;
export const sortableTableSourceCode = sortableTableRaw;
export const searchTableSourceCode = searchTableRaw;
export const paginationTableSourceCode = paginationTableRaw;
export const expandableTableSourceCode = expandableTableRaw;
export const responsiveTableSourceCode = responsiveTableRaw;