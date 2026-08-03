import { forwardRef } from "react";

import { cardVariants } from "./variants";

const Card = forwardRef(
  (
    {
      children,
      variant = "default",
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cardVariants({
          variant,
          size,
          className,
        })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

/* -------------------------------- */
/* Header                           */
/* -------------------------------- */

function CardHeader({
  children,
  className = "",
}) {
  return (
    <div
      className={`border-b border-gray-200 p-6 dark:border-gray-800 ${className}`}
    >
      {children}
    </div>
  );
}

/* -------------------------------- */
/* Title                            */
/* -------------------------------- */

function CardTitle({
  children,
  className = "",
}) {
  return (
    <h3
      className={`text-xl font-bold ${className}`}
    >
      {children}
    </h3>
  );
}

/* -------------------------------- */
/* Description                      */
/* -------------------------------- */

function CardDescription({
  children,
  className = "",
}) {
  return (
    <p
      className={`mt-2 text-sm text-gray-500 dark:text-gray-400 ${className}`}
    >
      {children}
    </p>
  );
}

/* -------------------------------- */
/* Content                          */
/* -------------------------------- */

function CardContent({
  children,
  className = "",
}) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

/* -------------------------------- */
/* Footer                           */
/* -------------------------------- */

function CardFooter({
  children,
  className = "",
}) {
  return (
    <div
      className={`flex items-center justify-end gap-3 border-t border-gray-200 p-6 dark:border-gray-800 ${className}`}
    >
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description =
  CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;