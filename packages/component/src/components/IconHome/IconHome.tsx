import React from "react";
import styles from "./IconHome.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Home (node 54127:37011)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const HOME_PATH =
  "M7.39355 0.334018C8.06405 -0.111339 8.93595 -0.111339 9.60645 0.334018L16.1064 4.65238C16.6644 5.02305 17 5.64856 17 6.3184V13.5987L16.9893 13.8028C16.8938 14.7443 16.1457 15.4925 15.2041 15.588L15 15.5987H2L1.7959 15.588C0.854346 15.4925 0.1062 14.7443 0.0107422 13.8028L0 13.5987V6.3184C0 5.69049 0.294536 5.10123 0.791016 4.72465L0.893555 4.65238L7.39355 0.334018ZM2 6.3184V13.5987H7.5V10.5987C7.5 10.0464 7.94772 9.59868 8.5 9.59868C9.05228 9.59868 9.5 10.0464 9.5 10.5987V13.5987H15V6.3184L8.5 2.00004L2 6.3184Z";

export function IconHome({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconHome"
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
        d={HOME_PATH}
        transform="translate(3.5 4.2)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
