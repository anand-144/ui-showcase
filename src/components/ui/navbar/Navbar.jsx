import { cn } from "../../../lib/cn";
import { navbarVariants } from "./variants";

function Navbar({
  children,
  variant = "default",
  className,
}) {
  return (
    <nav
      className={cn(
        navbarVariants({
          variant,
          className,
        })
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {children}
      </div>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Logo                                       */
/* -------------------------------------------------------------------------- */

function Logo({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "text-xl font-bold",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Links                                      */
/* -------------------------------------------------------------------------- */

function Links({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "hidden items-center gap-8 md:flex",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Actions                                     */
/* -------------------------------------------------------------------------- */

function Actions({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        className
      )}
    >
      {children}
    </div>
  );
}

Navbar.Logo = Logo;
Navbar.Links = Links;
Navbar.Actions = Actions;

export default Navbar;