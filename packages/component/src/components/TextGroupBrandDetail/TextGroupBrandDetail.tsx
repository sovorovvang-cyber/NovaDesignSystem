import React from "react";
import styles from "./TextGroupBrandDetail.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 TextProductGroup/BrandDetail (node 51083:55310)
// anatomy: root(brand bg)[ inner[ thumbnail, textContent[ titleRow, badgeGroup ] ] ]

interface Props {
  bgColor?: string;
  thumbnailSrc?: string;
  subtitle?: string;
  showSubtitle?: boolean;
  title?: string;
  showToggle?: boolean;
  toggleCount?: string;
  badgeGroup?: boolean;
  badges?: string[];
  className?: string;
}

export function TextGroupBrandDetail({
  bgColor = "#005dad",
  thumbnailSrc,
  subtitle = "Subtitle",
  showSubtitle = true,
  title = "Title",
  showToggle = true,
  toggleCount = "9,999",
  badgeGroup = true,
  badges = ["Label", "Label", "Label"],
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      style={{ backgroundColor: bgColor }}
      data-cx-component="TextGroupBrandDetail"
    >
      <div className={styles.inner}>
        <div className={styles.thumbnail}>
          {thumbnailSrc && (
            <img className={styles.thumbnailImage} src={thumbnailSrc} alt="" />
          )}
        </div>
        <div className={styles.textContent}>
          <div className={styles.titleRow}>
            <div className={styles.textProduct}>
              {showSubtitle && <p className={styles.subtitle}>{subtitle}</p>}
              <p className={styles.title}>{title}</p>
            </div>
            {showToggle && (
              <div className={styles.toggleSlot}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 21C12 21 3 15.5 3 9.5C3 7.01 4.99 5 7.5 5C9.24 5 10.76 5.93 11.64 7.28L12 7.8L12.36 7.28C13.24 5.93 14.76 5 16.5 5C19.01 5 21 7.01 21 9.5C21 15.5 12 21 12 21Z"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className={styles.toggleCount}>{toggleCount}</span>
              </div>
            )}
          </div>
          {badgeGroup && badges.length > 0 && (
            <div className={styles.badgeGroup}>
              {badges.map((b, i) => (
                <span key={i} className={styles.badge}>
                  <span className={styles.badgeText}>{b}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
