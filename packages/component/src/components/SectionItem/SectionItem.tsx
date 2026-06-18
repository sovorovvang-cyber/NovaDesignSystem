import React from "react";
import styles from "./SectionItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .SectionItem Filled(50985:53834) / Line(50943:30345)
// anatomy: root[ slot(children) ]

export type SectionItemVariant = "Filled" | "Line";

interface Props {
  variant?: SectionItemVariant;
  children?: React.ReactNode;
  className?: string;
}

export function SectionItem({
  variant = "Filled",
  children,
  className,
}: Props) {
  const rootClass = [
    styles.root,
    variant === "Line" ? styles.variantLine : styles.variantFilled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} data-cx-component="SectionItem">
      <div className={styles.slot}>{children}</div>
    </div>
  );
}
