import React from "react";
import styles from "./IconCategory.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Category (node 51561:33508)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const CATEGORY_PATH =
  "M5.09961 8.40039C5.92804 8.40039 6.59961 9.07196 6.59961 9.90039V13.5C6.59961 14.3284 5.92804 15 5.09961 15H1.5C0.671573 15 0 14.3284 0 13.5V9.90039C0 9.07196 0.671573 8.40039 1.5 8.40039H5.09961ZM13.5 8.40039C14.3284 8.40044 15 9.072 15 9.90039V13.5C15 14.3284 14.3284 14.9999 13.5 15H9.89941C9.07121 14.9997 8.40039 14.3283 8.40039 13.5V9.90039C8.40039 9.07196 9.07196 8.40039 9.90039 8.40039H13.5ZM5.09961 0C5.92804 0 6.59961 0.671573 6.59961 1.5V5.09961C6.59961 5.92804 5.92804 6.59961 5.09961 6.59961H1.5C0.671573 6.59961 0 5.92804 0 5.09961V1.5C0 0.671573 0.671573 6.55968e-08 1.5 0H5.09961ZM13.5 0C14.3284 5.20417e-05 15 0.671605 15 1.5V5.09961C15 5.928 14.3284 6.59956 13.5 6.59961H9.89941C9.07121 6.59935 8.40039 5.92787 8.40039 5.09961V1.5C8.40039 0.671573 9.07196 0 9.90039 0H13.5Z";

export function IconCategory({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconCategory"
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
        d={CATEGORY_PATH}
        transform="translate(4.5 4.5)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
