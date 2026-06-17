import React from "react";
import styles from "./IconNewChat.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/NewChat (node 55407:53926)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const NEWCHAT_PATH =
  "M9.05176 0.340868C9.60401 0.340868 10.0517 0.788626 10.0518 1.34087C10.0518 1.89315 9.60404 2.34087 9.05176 2.34087H2V16.3409H16V9.76177C16.0001 9.2096 16.4478 8.76177 17 8.76177C17.5522 8.76177 17.9999 9.2096 18 9.76177V16.3409C18 17.4454 17.1046 18.3409 16 18.3409H2C0.895431 18.3409 0 17.4454 0 16.3409V2.34087C5.10313e-05 1.23634 0.895463 0.340868 2 0.340868H9.05176ZM13.918 0.758836C14.9298 -0.252945 16.5702 -0.252946 17.582 0.758836C18.5939 1.77067 18.5938 3.41105 17.582 4.4229L9.66406 12.3409H6V8.67681L13.918 0.758836ZM16.168 2.1729C15.9372 1.94217 15.5628 1.94217 15.332 2.1729L8 9.50493V10.3409H8.83594L16.168 3.00884C16.3987 2.77804 16.3987 2.40368 16.168 2.1729Z";

export function IconNewChat({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconNewChat"
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
        d={NEWCHAT_PATH}
        transform="translate(3 2.66)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
