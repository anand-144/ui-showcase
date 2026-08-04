/* -------------------------------------------------------------------------- */
/*                               Default Card                                 */
/* -------------------------------------------------------------------------- */

export const defaultCardUsageCode = `
<Card>
  <Card.Header>
    <Card.Title>
      Default Card
    </Card.Title>

    <Card.Description>
      A simple reusable card component.
    </Card.Description>
  </Card.Header>

  <Card.Content>
    Card content goes here.
  </Card.Content>

  <Card.Footer>
    Footer
  </Card.Footer>
</Card>
`;

export const defaultCardSourceCode = `
import Card from "@/components/ui/card";

export default function DefaultCard() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Default Card
        </Card.Title>

        <Card.Description>
          A simple reusable card component.
        </Card.Description>
      </Card.Header>

      <Card.Content>
        Card content goes here.
      </Card.Content>

      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                               Outline Card                                 */
/* -------------------------------------------------------------------------- */

export const outlineCardUsageCode = `
<Card variant="outline">
  <Card.Content>
    Outline Card
  </Card.Content>
</Card>
`;

export const outlineCardSourceCode = `
import Card from "@/components/ui/card";

export default function OutlineCard() {
  return (
    <Card variant="outline">
      <Card.Content>
        Outline Card
      </Card.Content>
    </Card>
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                              Elevated Card                                 */
/* -------------------------------------------------------------------------- */

export const elevatedCardUsageCode = `
<Card variant="elevated">
  <Card.Content>
    Elevated Card
  </Card.Content>
</Card>
`;

export const elevatedCardSourceCode = `
import Card from "@/components/ui/card";

export default function ElevatedCard() {
  return (
    <Card variant="elevated">
      <Card.Content>
        Elevated Card
      </Card.Content>
    </Card>
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                                Glass Card                                  */
/* -------------------------------------------------------------------------- */

export const glassCardUsageCode = `
<Card variant="glass">
  <Card.Content>
    Glass Card
  </Card.Content>
</Card>
`;

export const glassCardSourceCode = `
import Card from "@/components/ui/card";

export default function GlassCard() {
  return (
    <Card variant="glass">
      <Card.Content>
        Glass Card
      </Card.Content>
    </Card>
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                              Gradient Card                                 */
/* -------------------------------------------------------------------------- */

export const gradientCardUsageCode = `
<Card variant="gradient">
  <Card.Content>
    Gradient Card
  </Card.Content>
</Card>
`;

export const gradientCardSourceCode = `
import Card from "@/components/ui/card";

export default function GradientCard() {
  return (
    <Card variant="gradient">
      <Card.Content>
        Gradient Card
      </Card.Content>
    </Card>
  );
}
`;

/* -------------------------------------------------------------------------- */
/*                              Profile Card                                  */
/* -------------------------------------------------------------------------- */

export const profileCardUsageCode = `
import ProfileCard from "@/components/cards/ProfileCard";

export default function Example() {
  return <ProfileCard />;
}
`;

export const profileCardSourceCode = `
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import {
  MapPin,
  Briefcase,
} from "lucide-react";

import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function ProfileCard() {
  return (
    <Card size="full">
      {/* Complete ProfileCard source */}
    </Card>
  );
}
`;


/* -------------------------------------------------------------------------- */
/*                              Product Card                                  */
/* -------------------------------------------------------------------------- */

export const productCardUsageCode = `
import ProductCard from "@/components/cards/ProductCard";

export default function Example() {
  return <ProductCard />;
}
`;

export const productCardSourceCode = `
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function ProductCard() {
  return (
    // Paste your complete ProductCard.jsx code here
  );
}
`;


/* -------------------------------------------------------------------------- */
/*                               Blog Card                                    */
/* -------------------------------------------------------------------------- */

export const blogCardUsageCode = `
import BlogCard from "@/components/cards/BlogCard";

export default function Example() {
  return <BlogCard />;
}
`;

export const blogCardSourceCode = `
import BlogCard from "@/components/cards/BlogCard";

export default function Example() {
  return <BlogCard />;
}
`;

/* -------------------------------------------------------------------------- */
/*                              Pricing Card                                  */
/* -------------------------------------------------------------------------- */

export const pricingCardUsageCode = `
import PricingCard from "@/components/cards/PricingCard";

export default function Example() {
  return <PricingCard />;
}
`;

export const pricingCardSourceCode = `
import PricingCard from "@/components/cards/PricingCard";

export default function Example() {
  return <PricingCard />;
}
`;

/* -------------------------------------------------------------------------- */
/*                                Stats Card                                  */
/* -------------------------------------------------------------------------- */

export const statsCardUsageCode = `
import StatsCard from "@/components/cards/StatsCard";

export default function Example() {
  return <StatsCard />;
}
`;

export const statsCardSourceCode = `
import StatsCard from "@/components/cards/StatsCard";

export default function Example() {
  return <StatsCard />;
}
`;

/* -------------------------------------------------------------------------- */
/*                              Feature Card                                  */
/* -------------------------------------------------------------------------- */

export const featureCardUsageCode = `
import FeatureCard from "@/components/cards/FeatureCard";

export default function Example() {
  return <FeatureCard />;
}
`;

export const featureCardSourceCode = `
import FeatureCard from "@/components/cards/FeatureCard";

export default function Example() {
  return <FeatureCard />;
}
`;


/* -------------------------------------------------------------------------- */
/*                                Team Card                                   */
/* -------------------------------------------------------------------------- */

export const teamCardUsageCode = `
import TeamCard from "@/components/cards/TeamCard";

export default function Example() {
  return <TeamCard />;
}
`;

export const teamCardSourceCode = `
import TeamCard from "@/components/cards/TeamCard";

export default function Example() {
  return <TeamCard />;
}
`;