import React from "react";
import styles from "./IconDummy.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Dummy (node 51561:60018)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const DUMMY_PATH =
  "M1 14C1.55228 14 2 14.4477 2 15V18H5C5.55228 18 6 18.4477 6 19C6 19.5523 5.55228 20 5 20H2C0.895431 20 9.65645e-08 19.1046 0 18V15C-1.03508e-09 14.4477 0.447715 14 1 14ZM19 14C19.5523 14 20 14.4477 20 15V18C20 19.1046 19.1046 20 18 20H15C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18H18V15C18 14.4477 18.4477 14 19 14ZM5 0C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2H2V5C2 5.55228 1.55228 6 1 6C0.447715 6 0 5.55228 0 5V2C0 0.89543 0.895431 0 2 0H5ZM18 0C19.1046 0 20 0.89543 20 2V5C20 5.55228 19.5523 6 19 6C18.4477 6 18 5.55228 18 5V2H15C14.4477 2 14 1.55228 14 1C14 0.447715 14.4477 0 15 0H18Z";

export function IconDummy({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconDummy"
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
        d={DUMMY_PATH}
        transform="translate(2 2)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
