import { cn } from "../../../lib/cn";

export function navbarVariants({ variant = "default", className }) {
  const base = "w-full trasnition-all duration-300";

  const variants = {
    default:
      "bg-white border-b border-gray-200  dark:bg-gray-950 drak:border-gray-800",

    trasnparent: "bg-transparent",

    glass:
      "border border-white/20 bg-white/20 backdrop-blur-xl dark:border-white/10 dark:bg-white/10",

    elevated: "bg-white shadow-lg dark:bg-gray-950",

    gradient: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white",
  };
  return cn (
    base,
    variants[variant],
    className
  );
}
