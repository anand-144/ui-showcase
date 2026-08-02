import Button from "../components/ui/button";

import {
  primaryButtonCode,
  secondaryButtonCode,
  outlineButtonCode,
  ghostButtonCode,
  gradientButtonCode,
  glassButtonCode,
  successButtonCode,
  dangerButtonCode,
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
    code: primaryButtonCode,
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
    code: secondaryButtonCode,
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
    code: outlineButtonCode,
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
    code: ghostButtonCode,
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
    code: gradientButtonCode,
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
    code: glassButtonCode,
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
    code: successButtonCode,
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
    code: dangerButtonCode,
    tags: ["button", "danger"],
  },
];