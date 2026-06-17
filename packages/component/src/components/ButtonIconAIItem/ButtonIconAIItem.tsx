import React from "react";
import styles from "./ButtonIconAIItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .ButtonIconAIItem (node 55216:179427)

interface Props {
  "aria-label"?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}

export function ButtonIconAIItem({
  "aria-label": ariaLabel = "AI",
  onClick,
  className,
  children,
}: Props) {
  return (
    <button
      type="button"
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="ButtonIconAIItem"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span className={styles.iconWrapper} aria-hidden="true">
        {children ?? (
          <svg
            className={styles.icon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.3" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        )}
      </span>
    </button>
  );
}
