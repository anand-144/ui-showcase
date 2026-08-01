import { cn } from "../../lib/cn";

function Section({
  as: Component = "section",
  id,
  children,
  className,
  containerClassName,
}) {
  return (
    <Component
      id={id}
      className={cn("py-16 lg:py-24", className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}

export default Section;