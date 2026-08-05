import { cn } from "../../../lib/cn";

export function tableVariants({
  variant = "default",
  className,
}) {
  const base =
    "w-full overflow-hidden rounded-2xl transition-all duration-300";

  const variants = {
    default:
      "border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",

    striped:
      "border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",

    bordered:
      "border-2 border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",

    glass:
      "border border-white/20 bg-white/10 backdrop-blur-xl",

    dark:
      "border border-gray-800 bg-gray-950 text-white",
  };

  return cn(
    base,
    variants[variant],
    className
  );
}