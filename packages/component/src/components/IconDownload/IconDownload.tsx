import React from "react";
import styles from "./IconDownload.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Download (node 51561:33427)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const DOWNLOAD_PATH =
  "M15 14C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15C0 14.4477 0.447715 14 1 14H15ZM8 0C8.55222 8.1299e-05 9 0.447765 9 1V8.58594L12.293 5.29297C12.6835 4.90252 13.3165 4.90247 13.707 5.29297C14.0975 5.68347 14.0975 6.31653 13.707 6.70703L8.70703 11.707C8.66052 11.7536 8.60862 11.7944 8.55371 11.8311C8.5146 11.8572 8.47426 11.8804 8.43262 11.9004C8.38715 11.9223 8.33999 11.9412 8.29102 11.9561L8.19336 11.9805C8.18629 11.9819 8.17897 11.9822 8.17188 11.9834C8.11596 11.9931 8.05869 12 8 12C7.94338 12 7.88803 11.9934 7.83398 11.9844C7.82361 11.9826 7.81306 11.9816 7.80273 11.9795C7.79126 11.9772 7.77989 11.9744 7.76855 11.9717C7.74801 11.9668 7.7273 11.9622 7.70703 11.9561C7.6584 11.9412 7.61157 11.9222 7.56641 11.9004C7.52663 11.8812 7.48767 11.8597 7.4502 11.835C7.39355 11.7976 7.34077 11.7548 7.29297 11.707L2.29297 6.70703C1.90244 6.31651 1.90244 5.68349 2.29297 5.29297C2.6835 4.90252 3.31653 4.90247 3.70703 5.29297L7 8.58594V1C7 0.447716 7.44772 -2.41411e-08 8 0Z";

export function IconDownload({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconDownload"
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
        d={DOWNLOAD_PATH}
        transform="translate(4 4)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
