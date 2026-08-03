import { cn } from "../../../lib/cn";

export function cardVariants({
  variant = "default",
  size = "md",
  className,
}) {
  const base =
    "rounded-3xl border transition-all duration-300";

  const variants = {
    default:
      "border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950",

    outline:
      "border-2 border-gray-300 bg-transparent dark:border-gray-700",

    elevated:
      "border-transparent bg-white shadow-xl dark:bg-gray-900",

    glass:
      "border-white/20 bg-white/20 backdrop-blur-xl dark:border-white/10 dark:bg-white/10",

    gradient:
      "border-transparent bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-xl",
  };

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    full: "w-full",
  };

  return cn(
    base,
    variants[variant],
    sizes[size],
    className
  );
}