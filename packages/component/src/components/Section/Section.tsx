import React from "react";
import styles from "./Section.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Section (node 50943:28865)
// anatomy: root[ ?SectionTitleItem, SectionItem/children ]

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export function Section({ children, className }: Props) {
  return (
    <section
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="Section"
    >
      {children}
    </section>
  );
}
