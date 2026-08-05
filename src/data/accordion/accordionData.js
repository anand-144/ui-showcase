const createCode = (name) => `
import ${name} from "@/components/accordions/${name}";

export default function Example() {
  return <${name} />;
}
`;

export const faqAccordionUsageCode = createCode("FAQAccordion");
export const faqAccordionSourceCode = faqAccordionUsageCode;

export const iconAccordionUsageCode = createCode("IconAccordion");
export const iconAccordionSourceCode = iconAccordionUsageCode;

export const multiOpenAccordionUsageCode = createCode("MultiOpenAccordion");
export const multiOpenAccordionSourceCode = multiOpenAccordionUsageCode;

export const nestedAccordionUsageCode = createCode("NestedAccordion");
export const nestedAccordionSourceCode = nestedAccordionUsageCode;

export const animatedAccordionUsageCode = createCode("AnimatedAccordion");
export const animatedAccordionSourceCode = animatedAccordionUsageCode;

export const glassAccordionUsageCode = createCode("GlassAccordion");
export const glassAccordionSourceCode = glassAccordionUsageCode;

export const timelineAccordionUsageCode = createCode("TimelineAccordion");
export const timelineAccordionSourceCode = timelineAccordionUsageCode;

export const settingsAccordionUsageCode = createCode("SettingsAccordion");
export const settingsAccordionSourceCode = settingsAccordionUsageCode;

export const pricingAccordionUsageCode = createCode("PricingAccordion");
export const pricingAccordionSourceCode = pricingAccordionUsageCode;

export const documentationAccordionUsageCode = createCode("DocumentationAccordion");
export const documentationAccordionSourceCode = documentationAccordionUsageCode;

export const productAccordionUsageCode = createCode("ProductAccordion");
export const productAccordionSourceCode = productAccordionUsageCode;