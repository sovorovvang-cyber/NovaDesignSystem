import React from "react";
import styles from "./IconPlus.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Plus (node 51578:64866)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const PLUS_PATH =
  "M7.99512 0C8.5474 0 8.99512 0.447715 8.99512 1V7.00391H15C15.5523 7.00391 16 7.45162 16 8.00391C16 8.55619 15.5523 9.00391 15 9.00391H8.99512V15C8.99512 15.5523 8.5474 16 7.99512 16C7.44283 16 6.99512 15.5523 6.99512 15V9.00391H1C0.447715 9.00391 2.41411e-08 8.55619 0 8.00391C-5.17737e-10 7.45162 0.447715 7.00391 1 7.00391H6.99512V1C6.99512 0.447715 7.44283 0 7.99512 0Z";

export function IconPlus({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconPlus"
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
        d={PLUS_PATH}
        transform="translate(4 4)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
