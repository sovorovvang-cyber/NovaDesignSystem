import React from "react";
import styles from "./Accordion.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Accordion (node 50943:29095)

interface Props {
  variants?: "Info" | "Product" | "Price" | "Notice";
  disclosure?: boolean;
  /** Main title / heading text */
  title?: string;
  /** Subtitle below heading (Product only) */
  subText?: string;
  /** 40px round thumbnail URL (Product only) */
  thumbnailSrc?: string;
  /** Count prefix in brand color (Price only) */
  count?: string;
  /** Right-side summary label next to chevron (Price only) */
  summary?: string;
  /** Show badge chip (Notice only) */
  badge?: boolean;
  /** Badge label — defaults to "NEW" (Notice only) */
  badgeText?: string;
  /** First caption text (Notice only) */
  caption01?: string;
  /** Second caption text (Notice only) */
  caption02?: string;
  /** Slot content rendered when disclosure=true */
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

function ChevronDownIcon() {
  return (
    <svg
      className={styles.chevronIcon}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      className={styles.chevronIcon}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Accordion({
  variants = "Info",
  disclosure = false,
  title = "섹션/콘텐츠 타이틀",
  subText = "서브 텍스트",
  thumbnailSrc,
  count,
  summary,
  badge = true,
  badgeText = "NEW",
  caption01,
  caption02,
  children,
  onClick,
  className,
}: Props) {
  const rootClasses = [
    styles.root,
    variants === "Info" ? styles.rootInfo : "",
    variants === "Product" ? styles.rootProduct : "",
    variants === "Price" ? styles.rootPrice : "",
    variants === "Notice" ? styles.rootNotice : "",
    disclosure ? styles.rootDisclosed : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const toggleProps = onClick
    ? {
        onClick,
        role: "button" as const,
        tabIndex: 0,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        },
        "aria-expanded": disclosure,
      }
    : {};

  return (
    <div className={rootClasses} data-cx-component="Accordion">
      {variants === "Notice" ? (
        /* Notice: vertical header — title row + caption row, no chevron */
        <div className={styles.noticeTitleGroup} {...toggleProps}>
          <div className={styles.noticeTitleRow}>
            <span className={styles.titleText}>{title}</span>
            {badge && badgeText && (
              <span className={styles.badge}>{badgeText}</span>
            )}
          </div>
          {(caption01 || caption02) && (
            <div className={styles.captionRow}>
              {caption01 && <span className={styles.caption}>{caption01}</span>}
              {caption02 && (
                <>
                  <div className={styles.captionDivider} />
                  <span className={styles.caption}>{caption02}</span>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        /* Info / Product / Price: horizontal header with chevron */
        <div className={styles.titleGroup} {...toggleProps}>
          {variants === "Product" && (
            <div className={styles.thumbnail}>
              {thumbnailSrc ? (
                <img className={styles.thumbnailImg} src={thumbnailSrc} alt="" />
              ) : (
                <div className={styles.thumbnailPlaceholder} />
              )}
            </div>
          )}

          <div className={styles.titleSection}>
            <div
              className={[
                styles.titleTextItem,
                variants === "Price" ? styles.titleTextItemRow : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {variants === "Price" && count && (
                <span className={styles.countText}>{count}</span>
              )}
              <span className={styles.titleTextLarge}>{title}</span>
              {variants === "Product" && (
                <span className={styles.subTextContent}>{subText}</span>
              )}
            </div>

            <div className={styles.iconRight}>
              {variants === "Price" && summary && (
                <span className={styles.summaryText}>{summary}</span>
              )}
              <div className={styles.iconItem}>
                {disclosure ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divider (Product and Price when disclosed) */}
      {disclosure && (variants === "Product" || variants === "Price") && (
        <div className={styles.divider} />
      )}

      {/* Expandable slot */}
      {disclosure && (
        <div className={styles.slot}>{children}</div>
      )}
    </div>
  );
}
