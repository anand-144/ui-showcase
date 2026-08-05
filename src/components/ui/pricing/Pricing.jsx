import { cn } from "../../../lib/cn";
import { pricingVariants } from "./variants";

function Pricing({
  children,
  variant = "default",
  className,
}) {
  return (
    <section
      className={cn(
        pricingVariants({
          variant,
          className,
        })
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        {children}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Header                                    */
/* -------------------------------------------------------------------------- */

function Header({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "mx-auto mb-16 max-w-3xl text-center",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Badge                                    */
/* -------------------------------------------------------------------------- */

function Badge({
  children,
  className,
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-600",
        className
      )}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Title                                    */
/* -------------------------------------------------------------------------- */

function Title({
  children,
  className,
}) {
  return (
    <h2
      className={cn(
        "mt-6 text-4xl font-bold md:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Description                                 */
/* -------------------------------------------------------------------------- */

function Description({
  children,
  className,
}) {
  return (
    <p
      className={cn(
        "mt-4 text-lg text-gray-600 dark:text-gray-300",
        className
      )}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Grid                                     */
/* -------------------------------------------------------------------------- */

function Grid({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

Pricing.Header = Header;
Pricing.Badge = Badge;
Pricing.Title = Title;
Pricing.Description = Description;
Pricing.Grid = Grid;

export default Pricing;