import CenteredHero from "../../components/heroes/CenteredHero";
import SplitHero from "../../components/heroes/SplitHero";
import GradientHero from "../../components/heroes/GradientHero";
import SaaSHero from "../../components/heroes/SaaSHero";
import StartupHero from "../../components/heroes/StartupHero";
import ProductHero from "../../components/heroes/ProductHero";
import DashboardHero from "../../components/heroes/DashboardHero";
import PortfolioHero from "../../components/heroes/PortfolioHero";
import AgencyHero from "../../components/heroes/AgencyHero";
import AIHero from "../../components/heroes/AIHero";
import VideoHero from "../../components/heroes/VideoHero";
import AnimatedBlobHero from "../../components/heroes/AnimatedBlobHero";
import GlassHero from "../../components/heroes/GlassHero";
import ThreeDHero from "../../components/heroes/ThreeDHero";
import ParticleHero from "../../components/heroes/ParticleHero";

import {
  centeredHeroUsageCode,
  centeredHeroSourceCode,

  splitHeroUsageCode,
  splitHeroSourceCode,

  gradientHeroUsageCode,
  gradientHeroSourceCode,

  saasHeroUsageCode,
  saasHeroSourceCode,

  startupHeroUsageCode,
  startupHeroSourceCode,

  productHeroUsageCode,
  productHeroSourceCode,

  dashboardHeroUsageCode,
  dashboardHeroSourceCode,

  portfolioHeroUsageCode,
  portfolioHeroSourceCode,

  agencyHeroUsageCode,
  agencyHeroSourceCode,

  aiHeroUsageCode,
  aiHeroSourceCode,

  videoHeroUsageCode,
  videoHeroSourceCode,

  animatedBlobHeroUsageCode,
  animatedBlobHeroSourceCode,

  glassHeroUsageCode,
  glassHeroSourceCode,

  threeDHeroUsageCode,
  threeDHeroSourceCode,

  particleHeroUsageCode,
  particleHeroSourceCode,
} from "./heroData";

export const heroComponents = [
  {
    id: "centered-hero",
    name: "Centered Hero",
    component: CenteredHero,
    usageCode: centeredHeroUsageCode,
    sourceCode: centeredHeroSourceCode,
    tags: ["landing", "centered", "marketing"],
  },

  {
    id: "split-hero",
    name: "Split Hero",
    component: SplitHero,
    usageCode: splitHeroUsageCode,
    sourceCode: splitHeroSourceCode,
    tags: ["split", "image", "saas"],
  },

  {
    id: "gradient-hero",
    name: "Gradient Hero",
    component: GradientHero,
    usageCode: gradientHeroUsageCode,
    sourceCode: gradientHeroSourceCode,
    tags: ["gradient", "landing", "modern"],
  },

  {
    id: "saas-hero",
    name: "SaaS Hero",
    component: SaaSHero,
    usageCode: saasHeroUsageCode,
    sourceCode: saasHeroSourceCode,
    tags: ["saas", "startup", "product"],
  },

  {
    id: "startup-hero",
    name: "Startup Hero",
    component: StartupHero,
    usageCode: startupHeroUsageCode,
    sourceCode: startupHeroSourceCode,
    tags: ["startup", "business", "landing"],
  },

  {
    id: "product-hero",
    name: "Product Hero",
    component: ProductHero,
    usageCode: productHeroUsageCode,
    sourceCode: productHeroSourceCode,
    tags: ["product", "showcase", "landing"],
  },

  {
    id: "dashboard-hero",
    name: "Dashboard Hero",
    component: DashboardHero,
    usageCode: dashboardHeroUsageCode,
    sourceCode: dashboardHeroSourceCode,
    tags: ["dashboard", "analytics", "admin"],
  },

  {
    id: "portfolio-hero",
    name: "Portfolio Hero",
    component: PortfolioHero,
    usageCode: portfolioHeroUsageCode,
    sourceCode: portfolioHeroSourceCode,
    tags: ["portfolio", "developer", "personal"],
  },

  {
    id: "agency-hero",
    name: "Agency Hero",
    component: AgencyHero,
    usageCode: agencyHeroUsageCode,
    sourceCode: agencyHeroSourceCode,
    tags: ["agency", "creative", "business"],
  },

  {
    id: "ai-hero",
    name: "AI Hero",
    component: AIHero,
    usageCode: aiHeroUsageCode,
    sourceCode: aiHeroSourceCode,
    tags: ["ai", "machine learning", "future"],
  },

  {
    id: "video-hero",
    name: "Video Hero",
    component: VideoHero,
    usageCode: videoHeroUsageCode,
    sourceCode: videoHeroSourceCode,
    tags: ["video", "background", "landing"],
  },

  {
    id: "animated-blob-hero",
    name: "Animated Blob Hero",
    component: AnimatedBlobHero,
    usageCode: animatedBlobHeroUsageCode,
    sourceCode: animatedBlobHeroSourceCode,
    tags: ["blob", "animation", "modern"],
  },

  {
    id: "glass-hero",
    name: "Glass Hero",
    component: GlassHero,
    usageCode: glassHeroUsageCode,
    sourceCode: glassHeroSourceCode,
    tags: ["glass", "glassmorphism", "modern"],
  },

  {
    id: "three-d-hero",
    name: "3D Hero",
    component: ThreeDHero,
    usageCode: threeDHeroUsageCode,
    sourceCode: threeDHeroSourceCode,
    tags: ["3d", "landing", "interactive"],
  },

  {
    id: "particle-hero",
    name: "Particle Hero",
    component: ParticleHero,
    usageCode: particleHeroUsageCode,
    sourceCode: particleHeroSourceCode,
    tags: ["particles", "animation", "landing"],
  },
];