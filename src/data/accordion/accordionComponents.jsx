import FAQAccordion from "../../components/accordion/FAQAccordion";
import IconAccordion from "../../components/accordion/IconAccordion";
import MultiOpenAccordion from "../../components/accordion/MultiOpenAccordion";
import NestedAccordion from "../../components/accordion/NestedAccordion";
import AnimatedAccordion from "../../components/accordion/AnimatedAccordion";
import GlassAccordion from "../../components/accordion/GlassAccordion";
import TimelineAccordion from "../../components/accordion/TimelineAccordion";
import SettingsAccordion from "../../components/accordion/SettingsAccordion";
import PricingAccordion from "../../components/accordion/PricingAccordion";
import DocumentationAccordion from "../../components/accordion/DocumentationAccordion";
import ProductAccordion from "../../components/accordion/ProductAccordion";

import {
  faqAccordionUsageCode,
  faqAccordionSourceCode,

  iconAccordionUsageCode,
  iconAccordionSourceCode,

  multiOpenAccordionUsageCode,
  multiOpenAccordionSourceCode,

  nestedAccordionUsageCode,
  nestedAccordionSourceCode,

  animatedAccordionUsageCode,
  animatedAccordionSourceCode,

  glassAccordionUsageCode,
  glassAccordionSourceCode,

  timelineAccordionUsageCode,
  timelineAccordionSourceCode,

  settingsAccordionUsageCode,
  settingsAccordionSourceCode,

  pricingAccordionUsageCode,
  pricingAccordionSourceCode,

  documentationAccordionUsageCode,
  documentationAccordionSourceCode,

  productAccordionUsageCode,
  productAccordionSourceCode,
} from "./accordionData";

export const accordionComponents = [
  {
    id: "faq-accordion",
    name: "FAQ Accordion",
    component: FAQAccordion,
    usageCode: faqAccordionUsageCode,
    sourceCode: faqAccordionSourceCode,
    tags: ["faq", "accordion", "support"],
  },

  {
    id: "icon-accordion",
    name: "Icon Accordion",
    component: IconAccordion,
    usageCode: iconAccordionUsageCode,
    sourceCode: iconAccordionSourceCode,
    tags: ["icons", "settings", "accordion"],
  },

  {
    id: "multi-open-accordion",
    name: "Multi Open Accordion",
    component: MultiOpenAccordion,
    usageCode: multiOpenAccordionUsageCode,
    sourceCode: multiOpenAccordionSourceCode,
    tags: ["multiple", "accordion", "expand"],
  },

  {
    id: "nested-accordion",
    name: "Nested Accordion",
    component: NestedAccordion,
    usageCode: nestedAccordionUsageCode,
    sourceCode: nestedAccordionSourceCode,
    tags: ["nested", "tree", "accordion"],
  },

  {
    id: "animated-accordion",
    name: "Animated Accordion",
    component: AnimatedAccordion,
    usageCode: animatedAccordionUsageCode,
    sourceCode: animatedAccordionSourceCode,
    tags: ["animation", "accordion", "smooth"],
  },

  {
    id: "glass-accordion",
    name: "Glass Accordion",
    component: GlassAccordion,
    usageCode: glassAccordionUsageCode,
    sourceCode: glassAccordionSourceCode,
    tags: ["glass", "glassmorphism", "modern"],
  },

  {
    id: "timeline-accordion",
    name: "Timeline Accordion",
    component: TimelineAccordion,
    usageCode: timelineAccordionUsageCode,
    sourceCode: timelineAccordionSourceCode,
    tags: ["timeline", "history", "accordion"],
  },

  {
    id: "settings-accordion",
    name: "Settings Accordion",
    component: SettingsAccordion,
    usageCode: settingsAccordionUsageCode,
    sourceCode: settingsAccordionSourceCode,
    tags: ["settings", "profile", "security"],
  },

  {
    id: "pricing-accordion",
    name: "Pricing Accordion",
    component: PricingAccordion,
    usageCode: pricingAccordionUsageCode,
    sourceCode: pricingAccordionSourceCode,
    tags: ["pricing", "plans", "features"],
  },

  {
    id: "documentation-accordion",
    name: "Documentation Accordion",
    component: DocumentationAccordion,
    usageCode: documentationAccordionUsageCode,
    sourceCode: documentationAccordionSourceCode,
    tags: ["documentation", "docs", "guide"],
  },

  {
    id: "product-accordion",
    name: "Product Accordion",
    component: ProductAccordion,
    usageCode: productAccordionUsageCode,
    sourceCode: productAccordionSourceCode,
    tags: ["product", "ecommerce", "details"],
  },
];