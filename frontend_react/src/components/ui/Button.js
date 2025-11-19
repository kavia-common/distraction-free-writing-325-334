import React from "react";
import "./button.css";

/**
 * Button component with variant, size, disabled/loading, and accessibility.
 *
 * PUBLIC_INTERFACE
 * Props:
 * - variant: "primary" | "secondary" | "ghost"
 * - size: "sm" | "md" | "lg"
 * - disabled: boolean
 * - loading: boolean
 * - children: ReactNode
 * - text?: string [NEW] — Button label (rendered if children not present)
 *    - If both text and children are supplied, children take precedence.
 * - onClick: function
 * - type: "button" | "submit" | "reset"
 * - ariaLabel: string (accessible text label)
 * - squared?: boolean (blocky/zero border-radius)
 * - block?: boolean (full width)
 * - elevate?: boolean (shows pronounced lego-like shadow layers)
 * - icon?: ReactNode (icon at left)
 * - iconRight?: ReactNode (icon at right)
 *
 * Precedence: If both children and text are specified, children are rendered.
 */
export const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  children,
  text,
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

  // Determine what to render as label inside the button (children takes precedence)
  let labelContent;
  if (children !== undefined && children !== null) {
    labelContent = children;
  } else if (text !== undefined && text !== null) {
    labelContent = text;
  } else {
    labelContent = null;
  }

  // Use aria-label for accessibility if provided, else use string labelContent for label
  const _ariaLabel = ariaLabel || (typeof labelContent === "string" ? labelContent : undefined);

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
        {labelContent}
      </span>
      {/* Render right icon if present */}
      {iconRight && !loading && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">{iconRight}</span>
      )}
    </button>
  );
};
