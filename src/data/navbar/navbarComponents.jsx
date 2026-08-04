import SimpleNavbar from "../../components/navbars/SimpleNavbar";
import DashboardNavbar from "../../components/navbars/DashboardNavbar";
import EcommerceNavbar from "../../components/navbars/EcommerceNavbar";
import MegaMenuNavbar from "../../components/navbars/MegaMenuNavbar";
import AuthNavbar from "../../components/navbars/AuthNavbar";
import MobileNavbar from "../../components/navbars/MobileNavbar";
import TransparentNavbar from "../../components/navbars/TransparentNavbar";
import StickyNavbar from "../../components/navbars/StickyNavbar";
import SearchNavbar from "../../components/navbars/SearchNavbar";
import CenteredNavbar from "../../components/navbars/CenteredNavbar";

import {
  simpleNavbarUsageCode,
  simpleNavbarSourceCode,

  dashboardNavbarUsageCode,
  dashboardNavbarSourceCode,

  ecommerceNavbarUsageCode,
  ecommerceNavbarSourceCode,

  megaMenuNavbarUsageCode,
  megaMenuNavbarSourceCode,

  authNavbarUsageCode,
  authNavbarSourceCode,

  mobileNavbarUsageCode,
  mobileNavbarSourceCode,

  transparentNavbarUsageCode,
  transparentNavbarSourceCode,

  stickyNavbarUsageCode,
  stickyNavbarSourceCode,

  searchNavbarUsageCode,
  searchNavbarSourceCode,

  centeredNavbarUsageCode,
  centeredNavbarSourceCode,
} from "./navbarData";

export const navbarComponents = [
  {
    id: "simple-navbar",
    name: "Simple Navbar",
    component: SimpleNavbar,
    usageCode: simpleNavbarUsageCode,
    sourceCode: simpleNavbarSourceCode,
    tags: ["navbar", "simple", "marketing"],
  },

  {
    id: "dashboard-navbar",
    name: "Dashboard Navbar",
    component: DashboardNavbar,
    usageCode: dashboardNavbarUsageCode,
    sourceCode: dashboardNavbarSourceCode,
    tags: ["dashboard", "admin", "search"],
  },

  {
    id: "ecommerce-navbar",
    name: "Ecommerce Navbar",
    component: EcommerceNavbar,
    usageCode: ecommerceNavbarUsageCode,
    sourceCode: ecommerceNavbarSourceCode,
    tags: ["ecommerce", "shop", "cart"],
  },

  {
    id: "mega-menu-navbar",
    name: "Mega Menu Navbar",
    component: MegaMenuNavbar,
    usageCode: megaMenuNavbarUsageCode,
    sourceCode: megaMenuNavbarSourceCode,
    tags: ["mega menu", "dropdown", "navigation"],
  },

  {
    id: "auth-navbar",
    name: "Auth Navbar",
    component: AuthNavbar,
    usageCode: authNavbarUsageCode,
    sourceCode: authNavbarSourceCode,
    tags: ["login", "register", "authentication"],
  },

  {
    id: "mobile-navbar",
    name: "Mobile Navbar",
    component: MobileNavbar,
    usageCode: mobileNavbarUsageCode,
    sourceCode: mobileNavbarSourceCode,
    tags: ["mobile", "drawer", "responsive"],
  },

  {
    id: "transparent-navbar",
    name: "Transparent Navbar",
    component: TransparentNavbar,
    usageCode: transparentNavbarUsageCode,
    sourceCode: transparentNavbarSourceCode,
    tags: ["hero", "transparent", "landing"],
  },

  {
    id: "sticky-navbar",
    name: "Sticky Navbar",
    component: StickyNavbar,
    usageCode: stickyNavbarUsageCode,
    sourceCode: stickyNavbarSourceCode,
    tags: ["sticky", "scroll", "header"],
  },

  {
    id: "search-navbar",
    name: "Search Navbar",
    component: SearchNavbar,
    usageCode: searchNavbarUsageCode,
    sourceCode: searchNavbarSourceCode,
    tags: ["search", "documentation", "docs"],
  },

  {
    id: "centered-navbar",
    name: "Centered Navbar",
    component: CenteredNavbar,
    usageCode: centeredNavbarUsageCode,
    sourceCode: centeredNavbarSourceCode,
    tags: ["center", "apple", "navigation"],
  },
];