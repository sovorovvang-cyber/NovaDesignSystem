import React from "react";
import styles from "./IconMenu.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Menu (node 51578:64957)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const MENU_PATH =
  "M15 13C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H1C0.447715 15 0 14.5523 0 14C0 13.4477 0.447715 13 1 13H15ZM15 6.5C15.5523 6.5 16 6.94772 16 7.5C16 8.05228 15.5523 8.5 15 8.5H1C0.447715 8.5 0 8.05228 0 7.5C0 6.94772 0.447715 6.5 1 6.5H15ZM15 0C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H15Z";

export function IconMenu({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconMenu"
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
        d={MENU_PATH}
        transform="translate(4 4.5)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
