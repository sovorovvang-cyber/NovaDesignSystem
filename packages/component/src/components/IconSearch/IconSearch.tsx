import React from "react";
import styles from "./IconSearch.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Search (node 51578:64591)

interface Props {
  size?: number;
  color?: string;
  className?: string;
  variant?: "line" | "fill";
}

const SEARCH_PATH =
  "M7.80078 0C12.1083 0.000263871 15.6005 3.49224 15.6006 7.7998C15.6006 9.26688 15.1936 10.6384 14.4893 11.8105L19.002 15.2549C19.6881 15.7786 19.7886 16.7739 19.2217 17.4248C18.6562 18.0735 17.6614 18.1114 17.0479 17.5078L13.0459 13.5713C11.6607 14.831 9.8207 15.5995 7.80078 15.5996C3.49305 15.5995 0 12.1076 0 7.7998C0.000105654 3.49214 3.49311 0.000105657 7.80078 0ZM7.80078 2C4.59768 2.00011 2.00108 4.59671 2.00098 7.7998C2.00098 11.003 4.59762 13.5995 7.80078 13.5996C11.0038 13.5993 13.6006 11.0029 13.6006 7.7998C13.6005 4.59681 11.0037 2.00026 7.80078 2Z";

export function IconSearch({ size = 24, color = "currentColor", className, variant = "line" }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconSearch"
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
        d={SEARCH_PATH}
        transform="translate(2 3)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
