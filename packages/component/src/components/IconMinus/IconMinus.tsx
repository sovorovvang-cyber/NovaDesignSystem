import React from "react";
import styles from "./IconMinus.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Minus (node 55427:103894)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const MINUS_PATH =
  "M15 0C15.5523 -5.17773e-10 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 2.41411e-08 1.55228 0 1C-5.17737e-10 0.447715 0.447715 2.41411e-08 1 0H15Z";

export function IconMinus({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconMinus"
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
        d={MINUS_PATH}
        transform="translate(4 11)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
