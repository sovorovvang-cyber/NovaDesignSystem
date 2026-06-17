import React from "react";
import styles from "./IconSend.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/Send (node 54855:65705)

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const SEND_PATH =
  "M5.3875 0.341602C5.70987 0.0192402 6.23306 0.0193012 6.55547 0.341602L11.6023 5.3875L11.659 5.45C11.9235 5.77427 11.9045 6.25317 11.6023 6.55547C11.28 6.87785 10.7568 6.8777 10.4344 6.55547L6.79766 2.91875V13.4744C6.79745 13.93 6.42794 14.2993 5.97246 14.2996C5.51664 14.2996 5.14649 13.9302 5.14629 13.4744V2.91875L1.50957 6.55547C1.18719 6.87779 0.663989 6.87771 0.341602 6.55547C0.0193062 6.23306 0.0192863 5.70987 0.341602 5.3875L5.3875 0.341602Z";

export function IconSend({ size = 24, color = "currentColor", className }: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");
  return (
    <svg
      data-cx-component="IconSend"
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
        d={SEND_PATH}
        transform="translate(6 5)"
        fill={color}
        stroke={color}
        strokeWidth="0.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
