const createCode = (name) => `
import ${name} from "@/components/loaders/${name}";

export default function Example() {
  return <${name} />;
}
`;

/* -------------------------------------------------------------------------- */
/*                                 Usage Code                                 */
/* -------------------------------------------------------------------------- */

export const spinnerLoaderUsageCode = createCode("SpinnerLoader");
export const dotsLoaderUsageCode = createCode("DotsLoader");
export const pulseLoaderUsageCode = createCode("PulseLoader");
export const skeletonLoaderUsageCode = createCode("SkeletonLoader");
export const progressLoaderUsageCode = createCode("ProgressLoader");
export const circularProgressLoaderUsageCode = createCode(
  "CircularProgressLoader"
);
export const orbitLoaderUsageCode = createCode("OrbitLoader");
export const barsLoaderUsageCode = createCode("BarsLoader");
export const gradientLoaderUsageCode = createCode("GradientLoader");
export const cardSkeletonLoaderUsageCode = createCode(
  "CardSkeletonLoader"
);
export const pageLoaderUsageCode = createCode("PageLoader");

/* -------------------------------------------------------------------------- */
/*                                Source Code                                 */
/* -------------------------------------------------------------------------- */

import spinnerLoaderRaw from "../../components/loaders/SpinnerLoader.jsx?raw";
import dotsLoaderRaw from "../../components/loaders/DotsLoader.jsx?raw";
import pulseLoaderRaw from "../../components/loaders/PulseLoader.jsx?raw";
import skeletonLoaderRaw from "../../components/loaders/SkeletonLoader.jsx?raw";
import progressLoaderRaw from "../../components/loaders/ProgressLoader.jsx?raw";
import circularProgressLoaderRaw from "../../components/loaders/CircularProgressLoader.jsx?raw";
import orbitLoaderRaw from "../../components/loaders/OrbitLoader.jsx?raw";
import barsLoaderRaw from "../../components/loaders/BarsLoader.jsx?raw";
import gradientLoaderRaw from "../../components/loaders/GradientLoader.jsx?raw";
import cardSkeletonLoaderRaw from "../../components/loaders/CardSkeletonLoader.jsx?raw";
import pageLoaderRaw from "../../components/loaders/PageLoader.jsx?raw";

export const spinnerLoaderSourceCode = spinnerLoaderRaw;
export const dotsLoaderSourceCode = dotsLoaderRaw;
export const pulseLoaderSourceCode = pulseLoaderRaw;
export const skeletonLoaderSourceCode = skeletonLoaderRaw;
export const progressLoaderSourceCode = progressLoaderRaw;
export const circularProgressLoaderSourceCode =
  circularProgressLoaderRaw;
export const orbitLoaderSourceCode = orbitLoaderRaw;
export const barsLoaderSourceCode = barsLoaderRaw;
export const gradientLoaderSourceCode = gradientLoaderRaw;
export const cardSkeletonLoaderSourceCode =
  cardSkeletonLoaderRaw;
export const pageLoaderSourceCode = pageLoaderRaw;