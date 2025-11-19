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
 * - squared?: boolean (blocky/zero border-radius)
 * - block?: boolean (full width)
 * - elevate?: boolean (shows pronounced lego-like shadow layers)
 * - icon?: ReactNode (icon at left)
 * - iconRight?: ReactNode (icon at right)
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
  squared = false,
  block = false,
  elevate = false,
  icon,
  iconRight,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  const classes = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    squared ? "btn--squared" : "",
    block ? "btn--block" : "",
    elevate ? "btn--elevate" : "",
    isDisabled ? "btn--disabled" : "",
    loading ? "btn--loading" : "",
    icon ? "btn--hasIcon" : "",
    iconRight ? "btn--hasIconRight" : "",
  ]
    .filter(Boolean)
    .join(" ");

  // Use aria-label for accessibility if provided, else use children as content label
  const _ariaLabel = ariaLabel || (typeof children === "string" ? children : undefined);

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      aria-label={_ariaLabel}
      tabIndex={0}
      {...rest}
      onClick={isDisabled ? undefined : onClick}
    >
      {/* Layered shadows for lego effect using pseudo-element fallback */}
      {loading && (
        <span className="btn__spinner" aria-hidden="true">
          <span className="btn__spinner-circle" />
        </span>
      )}
      {/* Render left icon if present */}
      {icon && !loading && (
        <span className="btn__icon" aria-hidden="true">{icon}</span>
      )}
      <span className="btn__content" style={{ opacity: loading ? 0.5 : 1 }}>
        {children}
      </span>
      {/* Render right icon if present */}
      {iconRight && !loading && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">{iconRight}</span>
      )}
    </button>
  );
};
