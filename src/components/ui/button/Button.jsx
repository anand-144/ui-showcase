import { forwardRef } from "react";
import { motion } from "framer-motion";

import { buttonVariants } from "./buttonVariants";

const MotionButton = motion.button;

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      rounded = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className,
      disabled = false,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <MotionButton
        ref={ref}
        type={type}
        disabled={disabled}
        whileTap={{ scale: 0.97 }}
        className={buttonVariants({
          variant,
          size,
          rounded,
          fullWidth,
          className,
        })}
        {...props}
      >
        {leftIcon && (
          <span className="flex items-center">
            {leftIcon}
          </span>
        )}

        <span>{children}</span>

        {rightIcon && (
          <span className="flex items-center">
            {rightIcon}
          </span>
        )}
      </MotionButton>
    );
  }
);

Button.displayName = "Button";

export default Button;