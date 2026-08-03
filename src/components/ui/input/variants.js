import { cn } from "../../../lib/cn";

export function inputVariants({
  variant = "default",
  size = "md",
  className,
}) {
  const base =
    "w-full rounded-xl border transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-gray-400";

  const variants = {
    default:
      "border-gray-300 bg-white text-gray-900 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:ring-indigo-900",

    filled:
      "border-transparent bg-gray-100 text-gray-900 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:bg-gray-900 dark:text-white dark:focus:bg-gray-950 dark:focus:ring-indigo-900",

    outline:
      "border-2 border-gray-300 bg-transparent text-gray-900 focus:border-indigo-500 dark:border-gray-700 dark:text-white",

    ghost:
      "border-transparent bg-transparent text-gray-900 focus:border-gray-300 dark:text-white dark:focus:border-gray-600",

    underline:
      "rounded-none border-0 border-b-2 border-gray-300 bg-transparent px-0 focus:border-indigo-500 dark:border-gray-700",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-base",
    lg: "h-13 px-5 text-lg",
  };

  return cn(
    base,
    variants[variant],
    sizes[size],
    className
  );
}