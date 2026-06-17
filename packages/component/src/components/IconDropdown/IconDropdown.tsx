import React from "react";
import styles from "./IconDropdown.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Dropdown (node 51578:64728)

interface Props {
  size?: number;
  color?: string;
  className?: string;
  variant?: "DropdownDown" | "DropdownUp";
}

const DROPDOWN_DOWN_PATH =
  "M4.85959 6.45116C5.25299 6.85999 5.90735 6.85999 6.30075 6.45115L10.8789 1.69337C11.4902 1.05807 11.04 0 10.1583 0H1.00199C0.120333 0 -0.329904 1.05807 0.281417 1.69338L4.85959 6.45116Z";

export function IconDropdown({ size = 24, color = "currentColor", className, variant = "DropdownDown" }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  const isUp = variant === "DropdownUp";
  return (
    <svg
      data-cx-component="IconDropdown"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={DROPDOWN_DOWN_PATH}
        transform={isUp ? "translate(6.42 9.6) rotate(180 5.58 3.38)" : "translate(6.42 9.6)"}
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
