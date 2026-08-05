const createCode = (name) => `
import ${name} from "@/components/accordions/${name}";

export default function Example() {
  return <${name} />;
}
`;

/* -------------------------------------------------------------------------- */
/*                                 Usage Code                                 */
/* -------------------------------------------------------------------------- */

export const faqAccordionUsageCode = createCode("FAQAccordion");
export const iconAccordionUsageCode = createCode("IconAccordion");
export const multiOpenAccordionUsageCode = createCode("MultiOpenAccordion");
export const nestedAccordionUsageCode = createCode("NestedAccordion");
export const animatedAccordionUsageCode = createCode("AnimatedAccordion");
export const glassAccordionUsageCode = createCode("GlassAccordion");
export const timelineAccordionUsageCode = createCode("TimelineAccordion");
export const settingsAccordionUsageCode = createCode("SettingsAccordion");
export const pricingAccordionUsageCode = createCode("PricingAccordion");
export const documentationAccordionUsageCode = createCode("DocumentationAccordion");
export const productAccordionUsageCode = createCode("ProductAccordion");

/* -------------------------------------------------------------------------- */
/*                                Source Code                                 */
/* -------------------------------------------------------------------------- */

import faqAccordionRaw from "../../components/accordion/FAQAccordion.jsx?raw";
import iconAccordionRaw from "../../components/accordion/IconAccordion.jsx?raw";
import multiOpenAccordionRaw from "../../components/accordion/MultiOpenAccordion.jsx?raw";
import nestedAccordionRaw from "../../components/accordion/NestedAccordion.jsx?raw";
import animatedAccordionRaw from "../../components/accordion/AnimatedAccordion.jsx?raw";
import glassAccordionRaw from "../../components/accordion/GlassAccordion.jsx?raw";
import timelineAccordionRaw from "../../components/accordion/TimelineAccordion.jsx?raw";
import settingsAccordionRaw from "../../components/accordion/SettingsAccordion.jsx?raw";
import pricingAccordionRaw from "../../components/accordion/PricingAccordion.jsx?raw";
import documentationAccordionRaw from "../../components/accordion/DocumentationAccordion.jsx?raw";
import productAccordionRaw from "../../components/accordion/ProductAccordion.jsx?raw";

export const faqAccordionSourceCode = faqAccordionRaw;
export const iconAccordionSourceCode = iconAccordionRaw;
export const multiOpenAccordionSourceCode = multiOpenAccordionRaw;
export const nestedAccordionSourceCode = nestedAccordionRaw;
export const animatedAccordionSourceCode = animatedAccordionRaw;
export const glassAccordionSourceCode = glassAccordionRaw;
export const timelineAccordionSourceCode = timelineAccordionRaw;
export const settingsAccordionSourceCode = settingsAccordionRaw;
export const pricingAccordionSourceCode = pricingAccordionRaw;
export const documentationAccordionSourceCode = documentationAccordionRaw;
export const productAccordionSourceCode = productAccordionRaw;