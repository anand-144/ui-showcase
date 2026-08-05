import SimpleTable from "../../components/tables/SimpleTable";
import StripedTable from "../../components/tables/StripedTable";
import HoverTable from "../../components/tables/HoverTable";
import BorderedTable from "../../components/tables/BorderedTable";
import CompactTable from "../../components/tables/CompactTable";
import PricingTable from "../../components/tables/PricingTable";
import SortableTable from "../../components/tables/SortableTable";
import SearchTable from "../../components/tables/SearchTable";
import PaginationTable from "../../components/tables/PaginationTable";
import ExpandableTable from "../../components/tables/ExpandableTable";
import ResponsiveTable from "../../components/tables/ResponsiveTable";

import {
  simpleTableUsageCode,
  simpleTableSourceCode,

  stripedTableUsageCode,
  stripedTableSourceCode,

  hoverTableUsageCode,
  hoverTableSourceCode,

  borderedTableUsageCode,
  borderedTableSourceCode,

  compactTableUsageCode,
  compactTableSourceCode,

  pricingTableUsageCode,
  pricingTableSourceCode,

  sortableTableUsageCode,
  sortableTableSourceCode,

  searchTableUsageCode,
  searchTableSourceCode,

  paginationTableUsageCode,
  paginationTableSourceCode,

  expandableTableUsageCode,
  expandableTableSourceCode,

  responsiveTableUsageCode,
  responsiveTableSourceCode,
} from "./tableData";

export const tableComponents = [
  {
    id: "simple-table",
    name: "Simple Table",
    component: SimpleTable,
    usageCode: simpleTableUsageCode,
    sourceCode: simpleTableSourceCode,
    tags: ["table", "basic", "simple"],
  },

  {
    id: "striped-table",
    name: "Striped Table",
    component: StripedTable,
    usageCode: stripedTableUsageCode,
    sourceCode: stripedTableSourceCode,
    tags: ["table", "striped", "rows"],
  },

  {
    id: "hover-table",
    name: "Hover Table",
    component: HoverTable,
    usageCode: hoverTableUsageCode,
    sourceCode: hoverTableSourceCode,
    tags: ["table", "hover", "interactive"],
  },

  {
    id: "bordered-table",
    name: "Bordered Table",
    component: BorderedTable,
    usageCode: borderedTableUsageCode,
    sourceCode: borderedTableSourceCode,
    tags: ["table", "border", "classic"],
  },

  {
    id: "compact-table",
    name: "Compact Table",
    component: CompactTable,
    usageCode: compactTableUsageCode,
    sourceCode: compactTableSourceCode,
    tags: ["table", "compact", "minimal"],
  },

  {
    id: "pricing-table",
    name: "Pricing Table",
    component: PricingTable,
    usageCode: pricingTableUsageCode,
    sourceCode: pricingTableSourceCode,
    tags: ["pricing", "comparison", "plans"],
  },

  {
    id: "sortable-table",
    name: "Sortable Table",
    component: SortableTable,
    usageCode: sortableTableUsageCode,
    sourceCode: sortableTableSourceCode,
    tags: ["table", "sorting", "interactive"],
  },

  {
    id: "search-table",
    name: "Search Table",
    component: SearchTable,
    usageCode: searchTableUsageCode,
    sourceCode: searchTableSourceCode,
    tags: ["table", "search", "filter"],
  },

  {
    id: "pagination-table",
    name: "Pagination Table",
    component: PaginationTable,
    usageCode: paginationTableUsageCode,
    sourceCode: paginationTableSourceCode,
    tags: ["table", "pagination", "data"],
  },

  {
    id: "expandable-table",
    name: "Expandable Table",
    component: ExpandableTable,
    usageCode: expandableTableUsageCode,
    sourceCode: expandableTableSourceCode,
    tags: ["table", "expandable", "details"],
  },

  {
    id: "responsive-table",
    name: "Responsive Table",
    component: ResponsiveTable,
    usageCode: responsiveTableUsageCode,
    sourceCode: responsiveTableSourceCode,
    tags: ["table", "responsive", "mobile"],
  },
];