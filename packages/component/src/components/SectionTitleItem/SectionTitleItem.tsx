import styles from "./SectionTitleItem.module.css";
import { TitleSectionRightItem } from "../TitleSectionRightItem/TitleSectionRightItem";

type RightVariant = "Icon" | "TextButton" | "Text" | "TextIconSecondary" | "TextIconPrimary" | "TextItemButton" | "Button";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .SectionTitleItem/18 (node 51098:40895)
// anatomy: root[ titleText(flex-1)[ titleRow[ title, ?infoIcon ], ?subtitle ], ?rightItem ]

interface Props {
  title?: string;
  subtitle?: boolean;
  subtitleText?: string;
  infoIcon?: boolean;
  rightItem?: boolean;
  rightVariant?: RightVariant;
  rightButtonLabel?: string;
  onRightClick?: () => void;
  className?: string;
}

export function SectionTitleItem({
  title = "섹션 타이틀",
  subtitle = false,
  subtitleText = "서브 타이틀",
  infoIcon = false,
  rightItem = false,
  rightVariant = "Icon",
  rightButtonLabel,
  onRightClick,
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="SectionTitleItem"
    >
      <div className={styles.titleText}>
        <div className={styles.titleRow}>
          <p className={styles.title}>{title}</p>
          {infoIcon && (
            <svg className={styles.infoIcon} viewBox="0 0 16 16" fill="none" aria-hidden>
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 7v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="8" cy="4.5" r="0.75" fill="currentColor" />
            </svg>
          )}
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitleText}</p>}
      </div>
      {rightItem && (
        <TitleSectionRightItem
          className={styles.rightItem}
          variant={rightVariant}
          buttonLabel={rightButtonLabel}
          onClick={onRightClick}
        />
      )}
    </div>
  );
}
