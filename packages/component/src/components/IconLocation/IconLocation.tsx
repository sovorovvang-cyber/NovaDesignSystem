import React from "react";
import styles from "./IconLocation.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Location (node 51578:64788)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const LOCATION_PATH =
  "M6.59961 0C8.34996 0 10.0289 0.718277 11.2666 1.99707C12.5043 3.27586 13.1992 5.01086 13.1992 6.81934C13.1989 10.7336 8.47661 16.2162 7.02148 17.8125C6.79308 18.0631 6.40614 18.0631 6.17773 17.8125C4.7225 16.216 0.000345605 10.7335 0 6.81934C0 5.01091 0.695006 3.27585 1.93262 1.99707C3.17028 0.718303 4.84929 2.83431e-05 6.59961 0ZM6.60059 4.19922C5.2751 4.19922 4.2002 5.27413 4.2002 6.59961C4.20041 7.92491 5.27523 8.99902 6.60059 8.99902C7.92576 8.99881 8.99979 7.92478 9 6.59961C9 5.27426 7.92589 4.19943 6.60059 4.19922Z";

export function IconLocation({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconLocation"
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
        d={LOCATION_PATH}
        transform="translate(5.4 3)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
