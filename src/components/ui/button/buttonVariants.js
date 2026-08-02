import { cn } from "../../../lib/cn";

export function buttonVariants({
  variant = "primary",
  size = "md",
  rounded = false,
  fullWidth = false,
  className,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md",

    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900",

    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800",

    ghost:
      "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",

    gradient:
      "bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:opacity-90 shadow-lg",

    glass:
      "border border-white/20 bg-white/20 backdrop-blur-xl hover:bg-white/30 dark:bg-white/10",

    success:
      "bg-emerald-600 text-white hover:bg-emerald-700",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    xs: "h-8 px-3 text-xs",
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
    xl: "h-14 px-8 text-lg",
  };

  return cn(
    base,
    variants[variant],
    sizes[size],
    rounded ? "rounded-full" : "rounded-xl",
    fullWidth && "w-full",
    className
  );
}