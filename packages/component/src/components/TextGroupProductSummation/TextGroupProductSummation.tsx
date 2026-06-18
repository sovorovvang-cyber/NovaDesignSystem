import styles from "./TextGroupProductSummation.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 TextProductGroup/ProductSummation (node 55294:36885)
// anatomy: root[ textNameGroup[ subtitle?, titleRow[ title, ?titleBadge ] ], ?subInfoGroup, ?badgeGroup ]

interface SubInfo {
  text: string;
}

interface Props {
  subtitle?: string;
  showSubtitle?: boolean;
  title?: string;
  titleBadge?: boolean;
  titleBadgeLabel?: string;
  subInfoText?: boolean;
  captions?: SubInfo[];
  extraCount?: string;
  badgeGroup?: boolean;
  badges?: string[];
  className?: string;
}

export function TextGroupProductSummation({
  subtitle = "Subtitle",
  showSubtitle = true,
  title = "Title",
  titleBadge = true,
  titleBadgeLabel = "Label",
  subInfoText = true,
  captions = [{ text: "Caption3-1" }, { text: "Caption3-2" }, { text: "Caption3-3" }],
  extraCount = "+2",
  badgeGroup = true,
  badges = ["Label", "Label", "Label"],
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="TextGroupProductSummation"
    >
      <div className={styles.textNameGroup}>
        {showSubtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.titleRow}>
          <p className={styles.title}>{title}</p>
          {titleBadge && (
            <span className={styles.titleBadge}>
              <span className={styles.titleBadgeText}>{titleBadgeLabel}</span>
            </span>
          )}
        </div>
      </div>

      {subInfoText && captions.length > 0 && (
        <div className={styles.subInfoGroup}>
          {captions.map((c, i) => (
            <>
              {i > 0 && <span key={`d-${i}`} className={styles.divider} aria-hidden />}
              <span key={`c-${i}`} className={styles.caption}>{c.text}</span>
            </>
          ))}
          {extraCount && <span className={styles.extraCount}>{extraCount}</span>}
        </div>
      )}

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
  );
}
