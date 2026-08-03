import { cn } from "../../../lib/cn";
import { formVariants } from "./variants";

function Form({
  children,
  variant = "default",
  className,
  ...props
}) {
  return (
    <form
      className={cn(
        formVariants({
          variant,
          className,
        })
      )}
      {...props}
    >
      {children}
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Form Header                                  */
/* -------------------------------------------------------------------------- */

function Header({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "space-y-2",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Form Title                                  */
/* -------------------------------------------------------------------------- */

function Title({
  children,
  className,
}) {
  return (
    <h2
      className={cn(
        "text-2xl font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
}

/* -------------------------------------------------------------------------- */
/*                             Form Description                               */
/* -------------------------------------------------------------------------- */

function Description({
  children,
  className,
}) {
  return (
    <p
      className={cn(
        "text-sm text-gray-500 dark:text-gray-400",
        className
      )}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Form Body                                   */
/* -------------------------------------------------------------------------- */

function Body({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "space-y-5",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Form Actions                                  */
/* -------------------------------------------------------------------------- */

function Actions({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-3 pt-2",
        className
      )}
    >
      {children}
    </div>
  );
}

Form.Header = Header;
Form.Title = Title;
Form.Description = Description;
Form.Body = Body;
Form.Actions = Actions;

export default Form;