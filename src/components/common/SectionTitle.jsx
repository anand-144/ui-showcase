import { cn } from "../../lib/cn";

function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={cn(
        "mb-12 flex flex-col",
        alignment[align],
        className
      )}
    >
      {badge && (
        <span className="mb-4 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-400">
          {badge}
        </span>
      )}

      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;