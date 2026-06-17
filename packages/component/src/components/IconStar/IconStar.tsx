import React from "react";
import styles from "./IconStar.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Star (node 55189:65238)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const STAR_PATH =
  "M7.73721 0.706511C8.33678 -0.235504 9.66371 -0.235504 10.2633 0.706511L12.3676 4.01267C12.569 4.32911 12.873 4.55935 13.2239 4.66124L16.8905 5.72582C17.9352 6.02915 18.3452 7.3447 17.6711 8.23022L15.305 11.3381C15.0786 11.6356 14.9624 12.0081 14.9779 12.3875L15.1397 16.3516C15.1858 17.4811 14.1123 18.2942 13.0961 17.8994L9.52949 16.5141C9.18812 16.3815 8.81236 16.3815 8.471 16.5141L4.9044 17.8994C3.88818 18.2942 2.81468 17.4811 2.86077 16.3516L3.02255 12.3875C3.03804 12.0081 2.92192 11.6356 2.69546 11.3381L0.329406 8.23022C-0.344749 7.3447 0.065295 6.02915 1.11 5.72582L4.77658 4.66124C5.12752 4.55935 5.43151 4.32911 5.63292 4.01267L7.73721 0.706511Z";

export function IconStar({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconStar"
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
        d={STAR_PATH}
        transform="translate(3 3)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
