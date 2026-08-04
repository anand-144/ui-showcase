import React from "react";
import Card from "../../components/ui/card";

import ProfileCard from "../../components/cards/ProfileCard";
import ProductCard from "../../components/cards/ProductCard";
import BlogCard from "../../components/cards/BlogCard";
import PricingCard from "../../components/cards/PricingCard";
import StatsCard from "../../components/cards/StatsCard";
import FeatureCard from "../../components/cards/FeatureCard";
import TeamCard from "../../components/cards/TeamCard";

import {
  defaultCardUsageCode,
  defaultCardSourceCode,

  outlineCardUsageCode,
  outlineCardSourceCode,

  elevatedCardUsageCode,
  elevatedCardSourceCode,

  glassCardUsageCode,
  glassCardSourceCode,

  gradientCardUsageCode,
  gradientCardSourceCode,

  profileCardUsageCode,
  profileCardSourceCode,

  productCardUsageCode,
  productCardSourceCode,

  blogCardUsageCode,
  blogCardSourceCode,

  pricingCardUsageCode,
  pricingCardSourceCode,

  statsCardUsageCode,
  statsCardSourceCode,

  featureCardUsageCode,
  featureCardSourceCode,

  teamCardUsageCode,
  teamCardSourceCode,

} from "./cardData";

export const cardComponents = [
  {
    id: "default-card",
    category: "cards",
    name: "Default Card",

    component: Card,

    props: {
      children: (
        <>
          <Card.Header>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-xl font-bold text-white">
                UI
              </div>

              <div>
                <Card.Title>
                  UI Showcase
                </Card.Title>

                <Card.Description>
                  Build modern interfaces faster with reusable React components.
                </Card.Description>
              </div>
            </div>
          </Card.Header>

          <Card.Content>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-indigo-50 p-4 text-center dark:bg-indigo-950/30">
                  <h4 className="text-2xl font-bold text-indigo-600">
                    120+
                  </h4>

                  <p className="mt-1 text-xs text-gray-500">
                    Components
                  </p>
                </div>

                <div className="rounded-xl bg-violet-50 p-4 text-center dark:bg-violet-950/30">
                  <h4 className="text-2xl font-bold text-violet-600">
                    10+
                  </h4>

                  <p className="mt-1 text-xs text-gray-500">
                    Categories
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-4 text-center dark:bg-emerald-950/30">
                  <h4 className="text-2xl font-bold text-emerald-600">
                    100%
                  </h4>

                  <p className="mt-1 text-xs text-gray-500">
                    Responsive
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-gray-300 p-5 dark:border-gray-700">
                <h4 className="font-semibold">
                  Why choose UI Showcase?
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  Production-ready components with clean code,
                  accessibility, dark mode, animations and
                  responsive layouts.
                </p>
              </div>
            </div>
          </Card.Content>

          <Card.Footer className="justify-between">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300">
              React + Tailwind
            </span>

            <button className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
              Explore
            </button>
          </Card.Footer>
        </>
      ),
    },

    usageCode: defaultCardUsageCode,
    sourceCode: defaultCardSourceCode,

    tags: ["card", "default"],
  },

  {
    id: "outline-card",
    category: "cards",
    name: "Outline Card",

    component: Card,

    props: {
      variant: "outline",

      children: (
        <>
          <Card.Header>
            <div className="flex items-center justify-between">
              <div>
                <Card.Title>
                  Outline Card
                </Card.Title>

                <Card.Description>
                  Clean bordered layout with subtle styling.
                </Card.Description>
              </div>

              <span className="rounded-full border border-indigo-500 px-3 py-1 text-xs font-semibold text-indigo-600">
                New
              </span>
            </div>
          </Card.Header>

          <Card.Content>
            <div className="space-y-4">
              <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
              <div className="h-3 w-4/5 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div className="h-3 w-3/5 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
          </Card.Content>

          <Card.Footer>
            <button className="rounded-xl border px-4 py-2 text-sm font-medium">
              Learn More
            </button>
          </Card.Footer>
        </>
      ),
    },

    usageCode: outlineCardUsageCode,
    sourceCode: outlineCardSourceCode,

    tags: ["card", "outline"],
  },

  {
    id: "elevated-card",
    category: "cards",
    name: "Elevated Card",

    component: Card,

    props: {
      variant: "elevated",

      children: (
        <>
          <Card.Header>
            <Card.Title>
              Analytics
            </Card.Title>

            <Card.Description>
              Weekly performance overview.
            </Card.Description>
          </Card.Header>

          <Card.Content>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-indigo-100 p-4 text-center dark:bg-indigo-950">
                <h3 className="text-2xl font-bold text-indigo-600">
                  124
                </h3>

                <p className="text-xs text-gray-500">
                  Users
                </p>
              </div>

              <div className="rounded-xl bg-emerald-100 p-4 text-center dark:bg-emerald-950">
                <h3 className="text-2xl font-bold text-emerald-600">
                  89%
                </h3>

                <p className="text-xs text-gray-500">
                  Growth
                </p>
              </div>

              <div className="rounded-xl bg-amber-100 p-4 text-center dark:bg-amber-950">
                <h3 className="text-2xl font-bold text-amber-600">
                  32
                </h3>

                <p className="text-xs text-gray-500">
                  Sales
                </p>
              </div>
            </div>
          </Card.Content>

          <Card.Footer>
            Updated 2 minutes ago
          </Card.Footer>
        </>
      ),
    },

    usageCode: elevatedCardUsageCode,
    sourceCode: elevatedCardSourceCode,

    tags: ["card", "elevated"],
  },

  {
    id: "glass-card",
    category: "cards",
    name: "Glass Card",

    component: Card,

    props: {
      variant: "glass",

      children: (
        <>
          <Card.Header>
            <Card.Title>
              Glass Effect
            </Card.Title>

            <Card.Description>
              Frosted glass UI for modern dashboards.
            </Card.Description>
          </Card.Header>

          <Card.Content>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600" />

                <div>
                  <h4 className="font-semibold">
                    John Anderson
                  </h4>

                  <p className="text-sm text-gray-500">
                    UI Designer
                  </p>
                </div>
              </div>
            </div>
          </Card.Content>

          <Card.Footer>
            <button className="rounded-xl bg-white/20 px-4 py-2 text-sm backdrop-blur">
              View Profile
            </button>
          </Card.Footer>
        </>
      ),
    },

    usageCode: glassCardUsageCode,
    sourceCode: glassCardSourceCode,

    tags: ["card", "glass"],
  },

  {
    id: "gradient-card",
    category: "cards",
    name: "Gradient Card",

    component: Card,

    props: {
      variant: "gradient",

      children: (
        <>
          <Card.Header>
            <Card.Title className="text-white">
              Pro Plan
            </Card.Title>

            <Card.Description className="text-indigo-100">
              Everything you need to build faster.
            </Card.Description>
          </Card.Header>

          <Card.Content>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Components</span>

                <span className="font-bold">
                  120+
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Templates</span>

                <span className="font-bold">
                  35
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Lifetime Access</span>

                <span className="font-bold">
                  ✓
                </span>
              </div>
            </div>
          </Card.Content>

          <Card.Footer>
            <button className="w-full rounded-xl bg-white py-3 font-semibold text-indigo-700 transition hover:bg-gray-100">
              Upgrade
            </button>
          </Card.Footer>
        </>
      ),
    },

    usageCode: gradientCardUsageCode,
    sourceCode: gradientCardSourceCode,

    tags: ["card", "gradient"],
  },

  {
    id: "profile-card",
    category: "cards",
    name: "Profile Card",
    component: ProfileCard,
    usageCode: profileCardUsageCode,
    sourceCode: profileCardSourceCode,
    tags: [
      "profile",
      "card",
      "user",
      "dashboard"
    ],
  },


  {
    id: "product-card",
    category: "cards",
    name: "Product Card",
    component: ProductCard,
    usageCode: productCardUsageCode,
    sourceCode: productCardSourceCode,
    tags: ["product", "ecommerce", "shopping", "card"],
  },

  {
    id: "blog-card",
    category: "cards",
    name: "Blog Card",
    component: BlogCard,
    usageCode: blogCardUsageCode,
    sourceCode: blogCardSourceCode,
    tags: [
      "blog",
      "article",
      "news",
      "card",
    ],
  },

  {
    id: "pricing-card",
    category: "cards",
    name: "Pricing Card",
    component: PricingCard,
    usageCode: pricingCardUsageCode,
    sourceCode: pricingCardSourceCode,
    tags: [
      "pricing",
      "subscription",
      "saas",
      "card",
    ],
  },

  {
    id: "stats-card",
    category: "cards",
    name: "Stats Card",
    component: StatsCard,
    usageCode: statsCardUsageCode,
    sourceCode: statsCardSourceCode,
    tags: [
      "dashboard",
      "analytics",
      "stats",
      "admin",
      "card",
    ],
  },


  {
  id: "feature-card",
  category: "cards",
  name: "Feature Card",
  component: FeatureCard,
  usageCode: featureCardUsageCode,
  sourceCode: featureCardSourceCode,
  tags: [
    "feature",
    "landing",
    "marketing",
    "card",
  ],
},

{
  id: "team-card",
  category: "cards",
  name: "Team Card",
  component: TeamCard,
  usageCode: teamCardUsageCode,
  sourceCode: teamCardSourceCode,
  tags: [
    "team",
    "member",
    "profile",
    "card",
  ],
},

];