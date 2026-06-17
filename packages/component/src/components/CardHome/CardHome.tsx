import React from "react";
import styles from "./CardHome.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 CardHome (node 50965:20813)
// variants: Task | My | Contents | ContentWithBanner

export type CardHomeVariant = "Task" | "My" | "Contents" | "ContentWithBanner";

export interface CardHomeProps {
  variant?: CardHomeVariant;
  className?: string;
  /** List slot content (My/Contents/ContentWithBanner) */
  children?: React.ReactNode;

  /* Task */
  taskTitle?: string;
  taskCtaLabel?: string;
  taskImageSrc?: string;
  onTaskCta?: () => void;

  /* Contents / ContentWithBanner */
  contentsLabel?: string;
  contentsTitle?: string;
  bannerImageSrc?: string;
  onContentsLabel?: () => void;
}

function ChevronRightIcon() {
  return (
    <svg className={styles.contentsLabelChevron} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CardHome({
  variant = "Task",
  className,
  children,
  taskTitle = "타이틀 최대 2줄 노출됩니다.\n타이틀 최대 2줄 노출됩니다.",
  taskCtaLabel = "1분 셀프 개통하기",
  taskImageSrc,
  onTaskCta,
  contentsLabel = "Label",
  contentsTitle = "타이틀 최대 2줄 노출됩니다. 타이틀 최대 2줄 노출됩니다.",
  bannerImageSrc,
  onContentsLabel,
}: CardHomeProps) {
  if (variant === "Task") {
    return (
      <div
        className={[styles.root, styles.taskRoot, className ?? ""].filter(Boolean).join(" ")}
        data-cx-component="CardHome"
        data-variant="Task"
      >
        <div className={styles.taskGradient} />
        {taskImageSrc && (
          <div className={styles.taskImageArea}>
            <img className={styles.taskImg} src={taskImageSrc} alt="" />
          </div>
        )}
        <div className={styles.taskTextArea}>
          <p className={styles.taskTitle}>{taskTitle}</p>
          <button type="button" className={styles.taskCta} onClick={onTaskCta}>
            {taskCtaLabel}
          </button>
        </div>
      </div>
    );
  }

  if (variant === "My") {
    return (
      <div
        className={[styles.root, styles.myRoot, className ?? ""].filter(Boolean).join(" ")}
        data-cx-component="CardHome"
        data-variant="My"
      >
        {children}
      </div>
    );
  }

  if (variant === "ContentWithBanner") {
    return (
      <div
        className={[styles.root, styles.contentsBannerRoot, className ?? ""].filter(Boolean).join(" ")}
        data-cx-component="CardHome"
        data-variant="ContentWithBanner"
      >
        <div className={styles.banner}>
          {bannerImageSrc && <img className={styles.bannerImg} src={bannerImageSrc} alt="" />}
        </div>
        <div className={styles.con}>
          <div className={styles.contentsText}>
            <button type="button" className={styles.contentsLabel} onClick={onContentsLabel}>
              {contentsLabel}
              <ChevronRightIcon />
            </button>
            <p className={styles.contentsTitle}>{contentsTitle}</p>
          </div>
          {children && <div className={styles.listSlot}>{children}</div>}
        </div>
      </div>
    );
  }

  /* Contents */
  return (
    <div
      className={[styles.root, styles.contentsRoot, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="CardHome"
      data-variant="Contents"
    >
      <div className={styles.con}>
        <div className={styles.contentsText}>
          <button type="button" className={styles.contentsLabel} onClick={onContentsLabel}>
            {contentsLabel}
            <ChevronRightIcon />
          </button>
          <p className={styles.contentsTitle}>{contentsTitle}</p>
        </div>
        {children && <div className={styles.listSlot}>{children}</div>}
      </div>
    </div>
  );
}
