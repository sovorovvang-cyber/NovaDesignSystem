import React from "react";
import styles from "./IconShare.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Share (node 54127:37018)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const SHARE_PATH =
  "M17 9.06812C17.5523 9.06812 18 9.51584 18 10.0681V14.0681C17.9999 15.7249 16.6568 17.0681 15 17.0681H3C1.34322 17.0681 0.000126783 15.7249 0 14.0681V10.0681C0 9.51584 0.447715 9.06812 1 9.06812C1.55228 9.06812 2 9.51584 2 10.0681V14.0681C2.00013 14.6203 2.44779 15.0681 3 15.0681H15C15.5522 15.0681 15.9999 14.6203 16 14.0681V10.0681C16 9.51584 16.4477 9.06812 17 9.06812ZM8.36914 0.224375C8.76191 -0.0959755 9.34092 -0.0733815 9.70703 0.292734L13.707 4.29273C14.0974 4.68327 14.0975 5.31631 13.707 5.7068C13.3165 6.09716 12.6835 6.09716 12.293 5.7068L10 3.41383V10.0681C9.99987 10.6203 9.55221 11.0681 9 11.0681C8.44779 11.0681 8.00013 10.6203 8 10.0681V3.41383L5.70703 5.7068C5.31654 6.09716 4.68346 6.09716 4.29297 5.7068C3.90248 5.31631 3.90256 4.68327 4.29297 4.29273L8.29297 0.292734L8.36914 0.224375Z";

export function IconShare({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconShare"
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
        d={SHARE_PATH}
        transform="translate(3 3.47)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
