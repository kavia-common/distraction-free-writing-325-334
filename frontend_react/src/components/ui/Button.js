import React from "react";
import "./button.css";

// PUBLIC_INTERFACE
/**
 * Button component with variant, size, disabled/loading, and accessibility.
 *
 * Props:
 * - variant: "primary" | "secondary" | "ghost"
 * - size: "sm" | "md" | "lg"
 * - disabled: boolean
 * - loading: boolean
 * - children: ReactNode
 * - onClick: function
 * - type: "button" | "submit" | "reset"
 * - ariaLabel: string (accessible text label)
 */
export const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  children,
  onClick,
  type = "button",
  ariaLabel,
  ...rest
}) => {
  const isDisabled = disabled || loading;
  const classes = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    isDisabled ? "btn--disabled" : "",
    loading ? "btn--loading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      aria-label={ariaLabel}
      tabIndex={0}
      {...rest}
      onClick={isDisabled ? undefined : onClick}
    >
      {loading && (
        <span className="btn__spinner" aria-hidden="true">
          <span className="btn__spinner-circle" />
        </span>
      )}
      <span className="btn__content" style={{ opacity: loading ? 0.5 : 1 }}>
        {children}
      </span>
    </button>
  );
};
