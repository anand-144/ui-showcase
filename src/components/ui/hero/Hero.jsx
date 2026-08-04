import { cn } from "../../../lib/cn";
import { heroVariants } from "./variants";

function Hero({
  children,
  variant = "default",
  className,
}) {
  return (
    <section
      className={cn(
        heroVariants({
          variant,
          className,
        })
      )}
    >
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-20">
        {children}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Content                                   */
/* -------------------------------------------------------------------------- */

function Content({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
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
    <h1
      className={cn(
        "mt-6 text-5xl font-extrabold leading-tight md:text-6xl",
        className
      )}
    >
      {children}
    </h1>
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
        "mt-6 text-lg text-gray-600 dark:text-gray-300",
        className
      )}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Actions                                   */
/* -------------------------------------------------------------------------- */

function Actions({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "mt-8 flex flex-wrap gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Media                                   */
/* -------------------------------------------------------------------------- */

function Media({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "hidden flex-1 justify-center lg:flex",
        className
      )}
    >
      {children}
    </div>
  );
}

Hero.Content = Content;
Hero.Badge = Badge;
Hero.Title = Title;
Hero.Description = Description;
Hero.Actions = Actions;
Hero.Media = Media;

export default Hero;