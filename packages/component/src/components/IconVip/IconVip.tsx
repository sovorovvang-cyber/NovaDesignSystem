import React from "react";
import styles from "./IconVip.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Vip (node 51561:33502)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const VIP_PATH =
  "M7.74617 0.26718C7.98367 -0.0890599 8.5077 -0.08906 8.7452 0.26718L11.4434 4.31503C11.6521 4.62804 12.0947 4.67408 12.3634 4.41073L15.4718 1.36386C15.8715 0.972469 16.5418 1.29317 16.4884 1.85019L15.7579 9.46249C15.5805 11.3087 14.0297 12.7183 12.1749 12.7184H4.31649C2.46179 12.7182 0.910878 11.3087 0.733478 9.46249L0.0030096 1.85019C-0.0504533 1.29305 0.620896 0.972056 1.02059 1.36386L4.12801 4.41073C4.39665 4.67408 4.83926 4.62804 5.04793 4.31503L7.74617 0.26718Z";

export function IconVip({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconVip"
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
        d={VIP_PATH}
        transform="translate(3.76 5.64)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
