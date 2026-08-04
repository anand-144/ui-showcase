import Button from "../../components/ui/button";

import {
  primaryButtonPreviewCode,
  primaryButtonSourceCode,
  secondaryButtonPreviewCode,
  secondaryButtonSourceCode,
  outlineButtonPreviewCode,
  outlineButtonSourceCode,
  ghostButtonPreviewCode,
  ghostButtonSourceCode,
  gradientButtonPreviewCode,
  gradientButtonSourceCode,
  glassButtonPreviewCode,
  glassButtonSourceCode,
  successButtonPreviewCode,
  successButtonSourceCode,
  dangerButtonPreviewCode,
  dangerButtonSourceCode,
} from "./buttonData";

export const buttonComponents = [
  {
    id: "primary-button",
    category: "buttons",
    name: "Primary Button",
    component: Button,
    props: {
      children: "Primary Button",
    },
    usageCode: primaryButtonPreviewCode,
    sourceCode: primaryButtonSourceCode,
    tags: ["button", "primary", "cta"],
  },

  {
    id: "secondary-button",
    category: "buttons",
    name: "Secondary Button",
    component: Button,
    props: {
      variant: "secondary",
      children: "Secondary Button",
    },
    usageCode: secondaryButtonPreviewCode,
    sourceCode: secondaryButtonSourceCode,
    tags: ["button", "secondary"],
  },

  {
    id: "outline-button",
    category: "buttons",
    name: "Outline Button",
    component: Button,
    props: {
      variant: "outline",
      children: "Outline Button",
    },
    usageCode: outlineButtonPreviewCode,
    sourceCode: outlineButtonSourceCode,
    tags: ["button", "outline"],
  },

  {
    id: "ghost-button",
    category: "buttons",
    name: "Ghost Button",
    component: Button,
    props: {
      variant: "ghost",
      children: "Ghost Button",
    },
    usageCode: ghostButtonPreviewCode,
    sourceCode: ghostButtonSourceCode,
    tags: ["button", "ghost"],
  },

  {
    id: "gradient-button",
    category: "buttons",
    name: "Gradient Button",
    component: Button,
    props: {
      variant: "gradient",
      children: "Gradient Button",
    },
    usageCode: gradientButtonPreviewCode,
    sourceCode: gradientButtonSourceCode,
    tags: ["button", "gradient"],
  },

  {
    id: "glass-button",
    category: "buttons",
    name: "Glass Button",
    component: Button,
    props: {
      variant: "glass",
      children: "Glass Button",
    },
    usageCode: glassButtonPreviewCode,
    sourceCode: glassButtonSourceCode,
    tags: ["button", "glass"],
  },

  {
    id: "success-button",
    category: "buttons",
    name: "Success Button",
    component: Button,
    props: {
      variant: "success",
      children: "Success Button",
    },
    usageCode: successButtonPreviewCode,
    sourceCode: successButtonSourceCode,
    tags: ["button", "success"],
  },

  {
    id: "danger-button",
    category: "buttons",
    name: "Danger Button",
    component: Button,
    props: {
      variant: "danger",
      children: "Danger Button",
    },
    usageCode: dangerButtonPreviewCode,
    sourceCode: dangerButtonSourceCode,
    tags: ["button", "danger"],
  },
];
