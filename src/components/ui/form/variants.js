import { cn } from "../../../lib/cn";

export function formVariants({
  variant = "default",
  className,
}) {
  const base =
    "w-full rounded-2xl transition-all duration-300";

  const variants = {
    default:
      "space-y-6",

    card:
      "space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950",

    glass:
      "space-y-6 rounded-3xl border border-white/20 bg-white/20 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/10",
  };

  return cn(
    base,
    variants[variant],
    className
  );
}