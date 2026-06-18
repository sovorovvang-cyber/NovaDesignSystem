import styles from "./TextGroupProductDetail.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 TextGroupProductDetail (node 55105:40949)
// anatomy: root[ textProduct(flex-1)[ subtitle?, title ], toggleSlot? ]

import React from "react";
import { ToogleItem } from "../ToogleItem";

interface Props {
  subtitle?: string;
  showSubtitle?: boolean;
  title?: string;
  showToggle?: boolean;
  toggleSelected?: boolean;
  toggleLabel?: string;
  onToggle?: () => void;
  className?: string;
}

export function TextGroupProductDetail({
  subtitle = "Subtitle",
  showSubtitle = true,
  title = "Title",
  showToggle = true,
  toggleSelected = false,
  toggleLabel = "9,999",
  onToggle,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="TextGroupProductDetail"
    >
      <div className={styles.textProduct}>
        {showSubtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <p className={styles.title}>{title}</p>
      </div>
      {showToggle && (
        <div className={styles.toggleSlot}>
          <ToogleItem
            variant="Text"
            selection={toggleSelected}
            label={toggleLabel}
            onClick={onToggle}
          />
        </div>
      )}
    </div>
  );
}
