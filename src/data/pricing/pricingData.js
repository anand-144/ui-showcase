const createCode = (name) => `
import ${name} from "@/components/pricing/${name}";

export default function Example() {
  return <${name} />;
}
`;

/* -------------------------------------------------------------------------- */
/*                                 Usage Code                                 */
/* -------------------------------------------------------------------------- */

export const simplePricingUsageCode = createCode("SimplePricing");
export const threeTierPricingUsageCode = createCode("ThreeTierPricing");
export const togglePricingUsageCode = createCode("TogglePricing");
export const popularPricingUsageCode = createCode("PopularPricing");
export const gradientPricingUsageCode = createCode("GradientPricing");
export const glassPricingUsageCode = createCode("GlassPricing");
export const darkPricingUsageCode = createCode("DarkPricing");
export const saasPricingUsageCode = createCode("SaaSPricing");
export const enterprisePricingUsageCode = createCode("EnterprisePricing");
export const comparisonPricingUsageCode = createCode("ComparisonPricing");
export const faqPricingUsageCode = createCode("FAQPricing");

/* -------------------------------------------------------------------------- */
/*                                Source Code                                 */
/* -------------------------------------------------------------------------- */

import simplePricingRaw from "../../components/pricing/SimplePricing.jsx?raw";
import threeTierPricingRaw from "../../components/pricing/ThreeTierPricing.jsx?raw";
import togglePricingRaw from "../../components/pricing/TogglePricing.jsx?raw";
import popularPricingRaw from "../../components/pricing/PopularPricing.jsx?raw";
import gradientPricingRaw from "../../components/pricing/GradientPricing.jsx?raw";
import glassPricingRaw from "../../components/pricing/GlassPricing.jsx?raw";
import darkPricingRaw from "../../components/pricing/DarkPricing.jsx?raw";
import saasPricingRaw from "../../components/pricing/SaaSPricing.jsx?raw";
import enterprisePricingRaw from "../../components/pricing/EnterprisePricing.jsx?raw";
import comparisonPricingRaw from "../../components/pricing/ComparisonPricing.jsx?raw";
import faqPricingRaw from "../../components/pricing/FAQPricing.jsx?raw";

export const simplePricingSourceCode = simplePricingRaw;
export const threeTierPricingSourceCode = threeTierPricingRaw;
export const togglePricingSourceCode = togglePricingRaw;
export const popularPricingSourceCode = popularPricingRaw;
export const gradientPricingSourceCode = gradientPricingRaw;
export const glassPricingSourceCode = glassPricingRaw;
export const darkPricingSourceCode = darkPricingRaw;
export const saasPricingSourceCode = saasPricingRaw;
export const enterprisePricingSourceCode = enterprisePricingRaw;
export const comparisonPricingSourceCode = comparisonPricingRaw;
export const faqPricingSourceCode = faqPricingRaw;