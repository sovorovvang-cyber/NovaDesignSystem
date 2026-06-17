import React from "react";
import styles from "./CheckboxRightTextItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CheckboxRightTextItem (node 55389:106261)
// anatomy: root[ label(p), checkboxWrap[ checkboxIcon ] ]
// 텍스트 좌 · 체크박스 우

type CheckboxVariant = "Circle" | "Line";

interface Props {
  variant?: CheckboxVariant;
  selection?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (selection: boolean) => void;
  className?: string;
}

function CheckboxIcon({ selection, disabled, variant }: { selection: boolean; disabled: boolean; variant: CheckboxVariant }) {
  const r = variant === "Circle" ? 10 : undefined;
  const rx = variant === "Line" ? 3 : undefined;

  if (selection && disabled) {
    return (
      <svg className={styles.checkboxIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        {variant === "Circle"
          ? <circle cx="10" cy="10" r={r} fill="var(--fill/brand/default, #3617ce)" opacity="0.2" />
          : <rect width="20" height="20" rx={rx} fill="var(--fill/brand/default, #3617ce)" opacity="0.2" />}
        <path d="M6 10l2.5 2.5 5-5.5" stroke="var(--text/inverse/primary, #ffffff)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      </svg>
    );
  }

  if (selection && !disabled) {
    return (
      <svg className={styles.checkboxIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        {variant === "Circle"
          ? <circle cx="10" cy="10" r={r} fill="var(--fill/brand/default, #3617ce)" />
          : <rect width="20" height="20" rx={rx} fill="var(--fill/brand/default, #3617ce)" />}
        <path d="M6 10l2.5 2.5 5-5.5" stroke="var(--text/inverse/primary, #ffffff)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (!selection && disabled) {
    return (
      <svg className={styles.checkboxIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        {variant === "Circle"
          ? <circle cx="10" cy="10" r="9" stroke="var(--text/disabled/default, rgba(6,12,31,0.2))" strokeWidth="1.5" />
          : <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="2.5" stroke="var(--text/disabled/default, rgba(6,12,31,0.2))" strokeWidth="1.5" />}
      </svg>
    );
  }

  return (
    <svg className={styles.checkboxIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {variant === "Circle"
        ? <circle cx="10" cy="10" r="9" stroke="var(--border/neutral/strong, rgba(6,12,31,0.2))" strokeWidth="1.5" />
        : <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="2.5" stroke="var(--border/neutral/strong, rgba(6,12,31,0.2))" strokeWidth="1.5" />}
    </svg>
  );
}

export function CheckboxRightTextItem({
  variant = "Circle",
  selection = false,
  disabled = false,
  label = "텍스트",
  onChange,
  className,
}: Props) {
  const rootClass = [styles.root, disabled ? styles.disabled : null, className]
    .filter(Boolean)
    .join(" ");

  function handleClick() {
    if (!disabled && onChange) onChange(!selection);
  }

  return (
    <div
      className={rootClass}
      data-cx-component="CheckboxRightTextItem"
      data-variant={variant}
      data-selection={selection ? "on" : "off"}
      data-disabled={disabled ? "on" : "off"}
      role="checkbox"
      aria-checked={selection}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (!disabled && (e.key === " " || e.key === "Enter")) {
          e.preventDefault();
          onChange?.(!selection);
        }
      }}
    >
      <p className={styles.label}>{label}</p>
      <span className={styles.checkboxWrap}>
        <CheckboxIcon selection={selection} disabled={disabled} variant={variant} />
      </span>
    </div>
  );
}
