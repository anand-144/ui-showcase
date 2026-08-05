import SpinnerLoader from "../../components/loaders/SpinnerLoader";
import DotsLoader from "../../components/loaders/DotsLoader";
import PulseLoader from "../../components/loaders/PulseLoader";
import SkeletonLoader from "../../components/loaders/SkeletonLoader";
import ProgressLoader from "../../components/loaders/ProgressLoader";
import CircularProgressLoader from "../../components/loaders/CircularProgressLoader";
import OrbitLoader from "../../components/loaders/OrbitLoader";
import BarsLoader from "../../components/loaders/BarsLoader";
import GradientLoader from "../../components/loaders/GradientLoader";
import CardSkeletonLoader from "../../components/loaders/CardSkeletonLoader";
import PageLoader from "../../components/loaders/PageLoader";

import {
  spinnerLoaderUsageCode,
  spinnerLoaderSourceCode,

  dotsLoaderUsageCode,
  dotsLoaderSourceCode,

  pulseLoaderUsageCode,
  pulseLoaderSourceCode,

  skeletonLoaderUsageCode,
  skeletonLoaderSourceCode,

  progressLoaderUsageCode,
  progressLoaderSourceCode,

  circularProgressLoaderUsageCode,
  circularProgressLoaderSourceCode,

  orbitLoaderUsageCode,
  orbitLoaderSourceCode,

  barsLoaderUsageCode,
  barsLoaderSourceCode,

  gradientLoaderUsageCode,
  gradientLoaderSourceCode,

  cardSkeletonLoaderUsageCode,
  cardSkeletonLoaderSourceCode,

  pageLoaderUsageCode,
  pageLoaderSourceCode,
} from "./loaderData";

export const loaderComponents = [
  {
    id: "spinner-loader",
    name: "Spinner Loader",
    component: SpinnerLoader,
    usageCode: spinnerLoaderUsageCode,
    sourceCode: spinnerLoaderSourceCode,
    tags: ["spinner", "loading", "api"],
  },

  {
    id: "dots-loader",
    name: "Dots Loader",
    component: DotsLoader,
    usageCode: dotsLoaderUsageCode,
    sourceCode: dotsLoaderSourceCode,
    tags: ["dots", "typing", "chat"],
  },

  {
    id: "pulse-loader",
    name: "Pulse Loader",
    component: PulseLoader,
    usageCode: pulseLoaderUsageCode,
    sourceCode: pulseLoaderSourceCode,
    tags: ["pulse", "loading", "simple"],
  },

  {
    id: "skeleton-loader",
    name: "Skeleton Loader",
    component: SkeletonLoader,
    usageCode: skeletonLoaderUsageCode,
    sourceCode: skeletonLoaderSourceCode,
    tags: ["skeleton", "content", "loading"],
  },

  {
    id: "progress-loader",
    name: "Progress Loader",
    component: ProgressLoader,
    usageCode: progressLoaderUsageCode,
    sourceCode: progressLoaderSourceCode,
    tags: ["progress", "upload", "download"],
  },

  {
    id: "circular-progress-loader",
    name: "Circular Progress Loader",
    component: CircularProgressLoader,
    usageCode: circularProgressLoaderUsageCode,
    sourceCode: circularProgressLoaderSourceCode,
    tags: ["progress", "circle", "percentage"],
  },

  {
    id: "orbit-loader",
    name: "Orbit Loader",
    component: OrbitLoader,
    usageCode: orbitLoaderUsageCode,
    sourceCode: orbitLoaderSourceCode,
    tags: ["orbit", "animation", "modern"],
  },

  {
    id: "bars-loader",
    name: "Bars Loader",
    component: BarsLoader,
    usageCode: barsLoaderUsageCode,
    sourceCode: barsLoaderSourceCode,
    tags: ["bars", "equalizer", "music"],
  },

  {
    id: "gradient-loader",
    name: "Gradient Loader",
    component: GradientLoader,
    usageCode: gradientLoaderUsageCode,
    sourceCode: gradientLoaderSourceCode,
    tags: ["gradient", "premium", "modern"],
  },

  {
    id: "card-skeleton-loader",
    name: "Card Skeleton Loader",
    component: CardSkeletonLoader,
    usageCode: cardSkeletonLoaderUsageCode,
    sourceCode: cardSkeletonLoaderSourceCode,
    tags: ["cards", "skeleton", "dashboard"],
  },

  {
    id: "page-loader",
    name: "Page Loader",
    component: PageLoader,
    usageCode: pageLoaderUsageCode,
    sourceCode: pageLoaderSourceCode,
    tags: ["page", "fullscreen", "loading"],
  },
];