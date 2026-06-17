import React from "react";
import styles from "./IconMovie.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Movie (node 51561:33504)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const MOVIE_PATH =
  "M16.2108 12.8104C16.2108 13.4731 15.6733 14.0106 15.0106 14.0106H1.41096C0.748222 14.0106 0.210768 13.4731 0.210768 12.8104V5.01056H16.2108V12.8104ZM2.81038 11.0106C2.47932 11.0108 2.21098 11.2791 2.21077 11.6102C2.21077 11.9414 2.47919 12.2105 2.81038 12.2108H13.6112C13.9424 12.2105 14.2108 11.9414 14.2108 11.6102C14.2106 11.2791 13.9422 11.0108 13.6112 11.0106H2.81038ZM14.3856 0.01837C15.0381 -0.0965281 15.6601 0.33951 15.7752 0.992003L15.9842 2.17364L0.22737 4.95196L0.0183855 3.77032C-0.096571 3.11778 0.339512 2.49583 0.992018 2.38067L14.3856 0.01837Z";

export function IconMovie({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconMovie"
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
        d={MOVIE_PATH}
        transform="translate(3.9 5)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
