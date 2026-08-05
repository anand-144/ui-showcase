import { cn } from "../../../lib/cn";

export function timelineVariants({
  variant = "default",
  className,
}) {
  const base =
    "relative w-full transition-all duration-300";

  const variants = {
    default: "",

    left: "",

    center: "",

    minimal: "",

    gradient: "",
  };

  return cn(
    base,
    variants[variant],
    className
  );
}