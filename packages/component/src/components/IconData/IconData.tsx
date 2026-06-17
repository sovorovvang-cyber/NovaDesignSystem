import React from "react";
import styles from "./IconData.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Data (node 51561:33512)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const DATA_PATH =
  "M11.5195 0C12.4473 0 13.2 0.751993 13.2002 1.67969V12.7197C13.2002 13.6476 12.4474 14.4004 11.5195 14.4004H11.2803C10.3524 14.4004 9.59961 13.6476 9.59961 12.7197V1.67969C9.59978 0.751993 10.3525 0 11.2803 0H11.5195ZM1.91992 7.19922C2.84766 7.19922 3.59944 7.95121 3.59961 8.87891V12.7188C3.59961 13.6466 2.84776 14.3994 1.91992 14.3994H1.67969C0.751993 14.3992 0 13.6465 0 12.7188V8.87891C0.000169526 7.95132 0.752097 7.19939 1.67969 7.19922H1.91992ZM6.71973 3.59961C7.64746 3.59961 8.40022 4.3516 8.40039 5.2793V12.7197C8.40033 13.6475 7.64753 14.3994 6.71973 14.3994H6.47949C5.5519 14.3992 4.79987 13.6474 4.7998 12.7197V5.2793C4.79997 4.35176 5.55197 3.59986 6.47949 3.59961H6.71973Z";

export function IconData({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconData"
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
        d={DATA_PATH}
        transform="translate(5.4 4.8)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
