import React from "react";
import styles from "./IconBack.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Back (node 51578:64852)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const BACK_PATH =
  "M8.29292 0.292894C8.68345 -0.0976314 9.31646 -0.0976311 9.70699 0.292894C10.0974 0.683425 10.0975 1.31646 9.70699 1.70696L2.414 8.99994L9.70699 16.2929C10.0974 16.6835 10.0975 17.3165 9.70699 17.707C9.31649 18.0975 8.68345 18.0974 8.29292 17.707L0.292894 9.70698C-0.0976312 9.31645 -0.0976315 8.68344 0.292894 8.29291L8.29292 0.292894Z";

export function IconBack({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconBack"
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
        d={BACK_PATH}
        transform="translate(4 3)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
