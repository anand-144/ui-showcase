import { cn } from "../../../lib/cn";
import { timelineVariants } from "./variants";

function Timeline({
  children,
  variant = "default",
  className,
}) {
  return (
    <div
      className={cn(
        timelineVariants({
          variant,
          className,
        })
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Item                                      */
/* -------------------------------------------------------------------------- */

function Item({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "relative flex gap-6 pb-10",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Marker                                    */
/* -------------------------------------------------------------------------- */

function Marker({
  children,
  className,
}) {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className={cn(
          "z-10 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg",
          className
        )}
      >
        {children}
      </div>

      <div className="mt-2 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Content                                    */
/* -------------------------------------------------------------------------- */

function Content({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "flex-1 rounded-2xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Title                                     */
/* -------------------------------------------------------------------------- */

function Title({
  children,
  className,
}) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold",
        className
      )}
    >
      {children}
    </h3>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Date                                      */
/* -------------------------------------------------------------------------- */

function Date({
  children,
  className,
}) {
  return (
    <p
      className={cn(
        "mt-1 text-sm text-indigo-600",
        className
      )}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Description                                  */
/* -------------------------------------------------------------------------- */

function Description({
  children,
  className,
}) {
  return (
    <p
      className={cn(
        "mt-3 text-gray-600 dark:text-gray-300",
        className
      )}
    >
      {children}
    </p>
  );
}

Timeline.Item = Item;
Timeline.Marker = Marker;
Timeline.Content = Content;
Timeline.Title = Title;
Timeline.Date = Date;
Timeline.Description = Description;

export default Timeline;