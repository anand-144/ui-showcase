import { cn } from "../../../lib/cn";

export function heroVariants({
  variant = "default",
  className,
}) {
  const base =
    "relative isolate overflow-hidden w-full transition-all duration-300";

  const variants = {
    default: "bg-white dark:bg-gray-950",

    gradient:
      "bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white",

    dark:
      "bg-gray-950 text-white",

    glass:
      "border border-white/20 bg-white/10 backdrop-blur-xl",

    light:
      "bg-gray-50 dark:bg-gray-900",
  };

  return cn(
    base,
    variants[variant],
    className
  );
}