import {
  House,
  MousePointer2,
  CreditCard,
  FileText,
  LayoutTemplate,
  PanelTopDashed  ,
  Table,
  Timeline,
  ChevronDownSquare,
  LoaderCircle,
  PanelsTopLeft,
  RectangleEllipsis ,
} from "lucide-react";

export const sidebarLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
    icon: House,
  },
  {
    id: "navbarpage",
    title: "Navbar",
    path: "/navbarpage",
    icon: PanelTopDashed  ,
  },
  {
    id: "buttons",
    title: "Buttons",
    path: "/buttons",
    icon: MousePointer2,
  },
  {
    id: "cards",
    title: "Cards",
    path: "/cards",
    icon: CreditCard,
  },
  {
    id: "inputs",
    title: "Inputs",
    path: "/inputs",
    icon: RectangleEllipsis,
  },
  {
    id: "forms",
    title: "Forms",
    path: "/forms",
    icon: FileText,
  },
  {
    id: "hero",
    title: "Hero",
    path: "/hero",
    icon: PanelsTopLeft,
  },
  {
    id: "pricing",
    title: "Pricing",
    path: "/pricing",
    icon: LayoutTemplate,
  },
  {
    id: "tables",
    title: "Tables",
    path: "/tables",
    icon: Table,
  },
  {
    id: "timeline",
    title: "Timeline",
    path: "/timeline",
    icon: Timeline,
  },
  {
    id: "accordion",
    title: "Accordion",
    path: "/accordion",
    icon: ChevronDownSquare,
  },
  {
    id: "loaders",
    title: "Loaders",
    path: "/loaders",
    icon: LoaderCircle,
  },
];