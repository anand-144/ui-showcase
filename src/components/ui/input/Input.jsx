import { forwardRef } from "react";
import { cn } from "../../../lib/cn";
import { inputVariants } from "./variants";

const Input = forwardRef(
  (
    {
      label,
      variant = "default",
      size = "md",
      className,
      startIcon,
      endIcon,
      error = false,
      helperText,
      id,
      ...props
    },
    ref
  ) => {
    const inputId =
      id || props.name || Math.random().toString(36).slice(2);

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {startIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {startIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputVariants({
                variant,
                size,
              }),
              startIcon && "pl-10",
              endIcon && "pr-10",
              error &&
                "border-red-500 focus:border-red-500 focus:ring-red-100 dark:focus:ring-red-900",
              className
            )}
            {...props}
          />

          {endIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              {endIcon}
            </span>
          )}
        </div>

        {(helperText || error) && (
          <p
            className={cn(
              "text-sm",
              error
                ? "text-red-500"
                : "text-gray-500 dark:text-gray-400"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;