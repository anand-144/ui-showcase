import SimplePricing from "../../components/pricing/SimplePricing";
import ThreeTierPricing from "../../components/pricing/ThreeTierPricing";
import TogglePricing from "../../components/pricing/TogglePricing";
import PopularPricing from "../../components/pricing/PopularPricing";
import GradientPricing from "../../components/pricing/GradientPricing";
import GlassPricing from "../../components/pricing/GlassPricing";
import DarkPricing from "../../components/pricing/DarkPricing";
import SaaSPricing from "../../components/pricing/SaaSPricing";
import EnterprisePricing from "../../components/pricing/EnterprisePricing";
import ComparisonPricing from "../../components/pricing/ComparisonPricing";
import FAQPricing from "../../components/pricing/FAQPricing";

import {
  simplePricingUsageCode,
  simplePricingSourceCode,

  threeTierPricingUsageCode,
  threeTierPricingSourceCode,

  togglePricingUsageCode,
  togglePricingSourceCode,

  popularPricingUsageCode,
  popularPricingSourceCode,

  gradientPricingUsageCode,
  gradientPricingSourceCode,

  glassPricingUsageCode,
  glassPricingSourceCode,

  darkPricingUsageCode,
  darkPricingSourceCode,

  saasPricingUsageCode,
  saasPricingSourceCode,

  enterprisePricingUsageCode,
  enterprisePricingSourceCode,

  comparisonPricingUsageCode,
  comparisonPricingSourceCode,

  faqPricingUsageCode,
  faqPricingSourceCode,
} from "./pricingData";

export const pricingComponents = [
  {
    id: "simple-pricing",
    name: "Simple Pricing",
    component: SimplePricing,
    usageCode: simplePricingUsageCode,
    sourceCode: simplePricingSourceCode,
    tags: ["pricing", "cards", "simple"],
  },

  {
    id: "three-tier-pricing",
    name: "Three Tier Pricing",
    component: ThreeTierPricing,
    usageCode: threeTierPricingUsageCode,
    sourceCode: threeTierPricingSourceCode,
    tags: ["pricing", "three tier", "plans"],
  },

  {
    id: "toggle-pricing",
    name: "Toggle Pricing",
    component: TogglePricing,
    usageCode: togglePricingUsageCode,
    sourceCode: togglePricingSourceCode,
    tags: ["pricing", "monthly", "yearly"],
  },

  {
    id: "popular-pricing",
    name: "Popular Pricing",
    component: PopularPricing,
    usageCode: popularPricingUsageCode,
    sourceCode: popularPricingSourceCode,
    tags: ["pricing", "featured", "popular"],
  },

  {
    id: "gradient-pricing",
    name: "Gradient Pricing",
    component: GradientPricing,
    usageCode: gradientPricingUsageCode,
    sourceCode: gradientPricingSourceCode,
    tags: ["pricing", "gradient", "modern"],
  },

  {
    id: "glass-pricing",
    name: "Glass Pricing",
    component: GlassPricing,
    usageCode: glassPricingUsageCode,
    sourceCode: glassPricingSourceCode,
    tags: ["pricing", "glass", "glassmorphism"],
  },

  {
    id: "dark-pricing",
    name: "Dark Pricing",
    component: DarkPricing,
    usageCode: darkPricingUsageCode,
    sourceCode: darkPricingSourceCode,
    tags: ["pricing", "dark", "premium"],
  },

  {
    id: "saas-pricing",
    name: "SaaS Pricing",
    component: SaaSPricing,
    usageCode: saasPricingUsageCode,
    sourceCode: saasPricingSourceCode,
    tags: ["pricing", "saas", "startup"],
  },

  {
    id: "enterprise-pricing",
    name: "Enterprise Pricing",
    component: EnterprisePricing,
    usageCode: enterprisePricingUsageCode,
    sourceCode: enterprisePricingSourceCode,
    tags: ["pricing", "enterprise", "business"],
  },

  {
    id: "comparison-pricing",
    name: "Comparison Pricing",
    component: ComparisonPricing,
    usageCode: comparisonPricingUsageCode,
    sourceCode: comparisonPricingSourceCode,
    tags: ["pricing", "comparison", "table"],
  },

  {
    id: "faq-pricing",
    name: "FAQ Pricing",
    component: FAQPricing,
    usageCode: faqPricingUsageCode,
    sourceCode: faqPricingSourceCode,
    tags: ["pricing", "faq", "support"],
  },
];