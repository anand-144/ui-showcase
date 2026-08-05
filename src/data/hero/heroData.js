const createCode = (name) => `
import ${name} from "@/components/heroes/${name}";

export default function Example() {
  return <${name} />;
}
`;

/* -------------------------------------------------------------------------- */
/*                                 Usage Code                                 */
/* -------------------------------------------------------------------------- */

export const centeredHeroUsageCode = createCode("CenteredHero");
export const splitHeroUsageCode = createCode("SplitHero");
export const gradientHeroUsageCode = createCode("GradientHero");
export const saasHeroUsageCode = createCode("SaaSHero");
export const startupHeroUsageCode = createCode("StartupHero");
export const productHeroUsageCode = createCode("ProductHero");
export const dashboardHeroUsageCode = createCode("DashboardHero");
export const portfolioHeroUsageCode = createCode("PortfolioHero");
export const agencyHeroUsageCode = createCode("AgencyHero");
export const aiHeroUsageCode = createCode("AIHero");
export const videoHeroUsageCode = createCode("VideoHero");
export const animatedBlobHeroUsageCode = createCode("AnimatedBlobHero");
export const glassHeroUsageCode = createCode("GlassHero");
export const threeDHeroUsageCode = createCode("ThreeDHero");
export const particleHeroUsageCode = createCode("ParticleHero");

/* -------------------------------------------------------------------------- */
/*                                Source Code                                 */
/* -------------------------------------------------------------------------- */

import centeredHeroRaw from "../../components/heroes/CenteredHero.jsx?raw";
import splitHeroRaw from "../../components/heroes/SplitHero.jsx?raw";
import gradientHeroRaw from "../../components/heroes/GradientHero.jsx?raw";
import saasHeroRaw from "../../components/heroes/SaaSHero.jsx?raw";
import startupHeroRaw from "../../components/heroes/StartupHero.jsx?raw";
import productHeroRaw from "../../components/heroes/ProductHero.jsx?raw";
import dashboardHeroRaw from "../../components/heroes/DashboardHero.jsx?raw";
import portfolioHeroRaw from "../../components/heroes/PortfolioHero.jsx?raw";
import agencyHeroRaw from "../../components/heroes/AgencyHero.jsx?raw";
import aiHeroRaw from "../../components/heroes/AIHero.jsx?raw";
import videoHeroRaw from "../../components/heroes/VideoHero.jsx?raw";
import animatedBlobHeroRaw from "../../components/heroes/AnimatedBlobHero.jsx?raw";
import glassHeroRaw from "../../components/heroes/GlassHero.jsx?raw";
import threeDHeroRaw from "../../components/heroes/ThreeDHero.jsx?raw";
import particleHeroRaw from "../../components/heroes/ParticleHero.jsx?raw";

export const centeredHeroSourceCode = centeredHeroRaw;
export const splitHeroSourceCode = splitHeroRaw;
export const gradientHeroSourceCode = gradientHeroRaw;
export const saasHeroSourceCode = saasHeroRaw;
export const startupHeroSourceCode = startupHeroRaw;
export const productHeroSourceCode = productHeroRaw;
export const dashboardHeroSourceCode = dashboardHeroRaw;
export const portfolioHeroSourceCode = portfolioHeroRaw;
export const agencyHeroSourceCode = agencyHeroRaw;
export const aiHeroSourceCode = aiHeroRaw;
export const videoHeroSourceCode = videoHeroRaw;
export const animatedBlobHeroSourceCode = animatedBlobHeroRaw;
export const glassHeroSourceCode = glassHeroRaw;
export const threeDHeroSourceCode = threeDHeroRaw;
export const particleHeroSourceCode = particleHeroRaw;