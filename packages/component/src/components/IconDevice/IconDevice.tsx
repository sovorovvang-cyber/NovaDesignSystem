import React from "react";
import styles from "./IconDevice.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Device (node 51561:33510)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

export function IconDevice({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  return (
    <svg
      data-cx-component="IconDevice"
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
        d="M10.3203 0C11.2479 0.00016914 11.9998 0.752097 12 1.67969V15.1201C11.9999 16.0478 11.248 16.7996 10.3203 16.7998H1.67969C0.752032 16.7996 6.27796e-05 16.0478 0 15.1201V1.67969C0.000169124 0.752097 0.752097 0.00016885 1.67969 0H10.3203ZM4.2002 13.1992C3.86895 13.1992 3.6008 13.4676 3.60059 13.7988C3.60059 14.1302 3.86882 14.3994 4.2002 14.3994H7.7998C8.13118 14.3994 8.40039 14.1302 8.40039 13.7988C8.40018 13.4676 8.13105 13.1992 7.7998 13.1992H4.2002Z"
        transform="translate(6 3.6)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
