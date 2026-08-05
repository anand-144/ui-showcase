const createCode = (name) => `
import ${name} from "@/components/cards/${name}";

export default function Example() {
  return <${name} />;
}
`;

/* -------------------------------------------------------------------------- */
/*                                 Usage Code                                 */
/* -------------------------------------------------------------------------- */

export const defaultCardUsageCode = createCode("DefaultCard");
export const outlineCardUsageCode = createCode("OutlineCard");
export const elevatedCardUsageCode = createCode("ElevatedCard");
export const glassCardUsageCode = createCode("GlassCard");
export const gradientCardUsageCode = createCode("GradientCard");
export const profileCardUsageCode = createCode("ProfileCard");
export const productCardUsageCode = createCode("ProductCard");
export const blogCardUsageCode = createCode("BlogCard");
export const pricingCardUsageCode = createCode("PricingCard");
export const statsCardUsageCode = createCode("StatsCard");
export const featureCardUsageCode = createCode("FeatureCard");
export const teamCardUsageCode = createCode("TeamCard");

/* -------------------------------------------------------------------------- */
/*                                Source Code                                 */
/* -------------------------------------------------------------------------- */

import defaultCardRaw from "../../components/cards/DefaultCard.jsx?raw";
import outlineCardRaw from "../../components/cards/OutlineCard.jsx?raw";
import elevatedCardRaw from "../../components/cards/ElevatedCard.jsx?raw";
import glassCardRaw from "../../components/cards/GlassCard.jsx?raw";
import gradientCardRaw from "../../components/cards/GradientCard.jsx?raw";
import profileCardRaw from "../../components/cards/ProfileCard.jsx?raw";
import productCardRaw from "../../components/cards/ProductCard.jsx?raw";
import blogCardRaw from "../../components/cards/BlogCard.jsx?raw";
import pricingCardRaw from "../../components/cards/PricingCard.jsx?raw";
import statsCardRaw from "../../components/cards/StatsCard.jsx?raw";
import featureCardRaw from "../../components/cards/FeatureCard.jsx?raw";
import teamCardRaw from "../../components/cards/TeamCard.jsx?raw";

export const defaultCardSourceCode = defaultCardRaw;
export const outlineCardSourceCode = outlineCardRaw;
export const elevatedCardSourceCode = elevatedCardRaw;
export const glassCardSourceCode = glassCardRaw;
export const gradientCardSourceCode = gradientCardRaw;
export const profileCardSourceCode = profileCardRaw;
export const productCardSourceCode = productCardRaw;
export const blogCardSourceCode = blogCardRaw;
export const pricingCardSourceCode = pricingCardRaw;
export const statsCardSourceCode = statsCardRaw;
export const featureCardSourceCode = featureCardRaw;
export const teamCardSourceCode = teamCardRaw;