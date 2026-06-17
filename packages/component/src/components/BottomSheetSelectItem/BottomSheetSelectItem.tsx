import React from "react";
import styles from "./BottomSheetSelectItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .BottomSheetSelectItem (node 54678:32922)
// 사용처: 바텀시트 내에서만 사용

export type BottomSheetSelectItemSelection = "Unselected" | "Selected";
export type BottomSheetSelectItemDisclosure = "Off" | "On";

interface Props {
  label?: string;
  selection?: BottomSheetSelectItemSelection;
  disclosure?: BottomSheetSelectItemDisclosure;
  /** Disclosure=On일 때 펼쳐지는 슬롯 */
  children?: React.ReactNode;
  onClick?: () => void;
}

export function BottomSheetSelectItem({
  label = "섹션/콘텐츠 타이틀",
  selection = "Unselected",
  disclosure = "Off",
  children,
  onClick,
}: Props) {
  const isSelected = selection === "Selected";
  const isOpen = disclosure === "On";

  return (
    <div
      className={[styles.root, isSelected ? styles.rootSelected : ""].join(" ")}
      data-cx-component="BottomSheetSelectItem"
      data-selection={selection}
      data-disclosure={disclosure}
    >
      <button
        type="button"
        className={styles.header}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <p className={[styles.label, isSelected ? styles.labelSelected : ""].join(" ")}>
          {label}
        </p>
        {disclosure !== undefined && (
          <span
            className={[styles.chevron, isOpen ? styles.chevronOpen : ""].join(" ")}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </button>

      {isOpen && children && (
        <div className={styles.disclosure}>{children}</div>
      )}
    </div>
  );
}
