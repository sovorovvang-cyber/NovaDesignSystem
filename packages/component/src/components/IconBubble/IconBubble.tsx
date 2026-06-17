import React from "react";
import styles from "./IconBubble.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Bubble (node 51578:64729)

export type IconBubbleVariant = "line" | "fill";

interface Props {
  size?: number;
  color?: string;
  className?: string;
  variant?: IconBubbleVariant;
}

const BUBBLE_PATH =
  "M16 0C17.1046 0 18 0.895431 18 2V10.8125C18 12.4176 16.7394 13.7283 15.1543 13.8086L15 13.8125H11.3682L9.80273 15.9199L9.72363 16.0146C9.33215 16.4267 8.66785 16.4267 8.27637 16.0146L8.19727 15.9199L6.63184 13.8125H3C1.34315 13.8125 0 12.4694 0 10.8125V2C0 0.895431 0.895431 0 2 0H16ZM2 10.8125C2 11.3648 2.44771 11.8125 3 11.8125H6.63184L6.86719 11.8262C7.40997 11.8905 7.90723 12.1759 8.2373 12.6201L9 13.6455L9.7627 12.6201L9.91406 12.4395C10.2894 12.0418 10.8145 11.8126 11.3682 11.8125H15C15.5523 11.8125 16 11.3648 16 10.8125V2H2V10.8125ZM5 6C5.55228 6 6 6.44772 6 7C6 7.55228 5.55228 8 5 8C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6ZM9 6C9.55228 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7C8 6.44772 8.44772 6 9 6ZM13 6C13.5523 6 14 6.44772 14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6Z";

export function IconBubble({ size = 24, color = "currentColor", className, variant = "line" }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconBubble"
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
        d={BUBBLE_PATH}
        transform="translate(3 4)"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
