const createCode = (name) => `
import ${name} from "@/components/loaders/${name}";

export default function Example() {
  return <${name} />;
}
`;

export const spinnerLoaderUsageCode = createCode("SpinnerLoader");
export const spinnerLoaderSourceCode = spinnerLoaderUsageCode;

export const dotsLoaderUsageCode = createCode("DotsLoader");
export const dotsLoaderSourceCode = dotsLoaderUsageCode;

export const pulseLoaderUsageCode = createCode("PulseLoader");
export const pulseLoaderSourceCode = pulseLoaderUsageCode;

export const skeletonLoaderUsageCode = createCode("SkeletonLoader");
export const skeletonLoaderSourceCode = skeletonLoaderUsageCode;

export const progressLoaderUsageCode = createCode("ProgressLoader");
export const progressLoaderSourceCode = progressLoaderUsageCode;

export const circularProgressLoaderUsageCode = createCode("CircularProgressLoader");
export const circularProgressLoaderSourceCode =
  circularProgressLoaderUsageCode;

export const orbitLoaderUsageCode = createCode("OrbitLoader");
export const orbitLoaderSourceCode = orbitLoaderUsageCode;

export const barsLoaderUsageCode = createCode("BarsLoader");
export const barsLoaderSourceCode = barsLoaderUsageCode;

export const gradientLoaderUsageCode = createCode("GradientLoader");
export const gradientLoaderSourceCode = gradientLoaderUsageCode;

export const cardSkeletonLoaderUsageCode = createCode(
  "CardSkeletonLoader"
);
export const cardSkeletonLoaderSourceCode =
  cardSkeletonLoaderUsageCode;

export const pageLoaderUsageCode = createCode("PageLoader");
export const pageLoaderSourceCode = pageLoaderUsageCode;