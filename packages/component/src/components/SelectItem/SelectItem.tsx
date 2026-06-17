import styles from "./SelectItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .SelectItem (node 54678:33424)
// anatomy: root[ text, chevronIcon ]

export type SelectItemState = "Default" | "Completed";

interface Props {
  state?: SelectItemState;
  placeholder?: string;
  value?: string;
  onClick?: () => void;
  className?: string;
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SelectItem({
  state = "Default",
  placeholder = "텍스트",
  value,
  onClick,
  className,
}: Props) {
  const isCompleted = state === "Completed";
  const displayText = isCompleted && value ? value : placeholder;

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="SelectItem"
      data-state={state}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <p className={[styles.text, isCompleted ? styles.textCompleted : styles.textDefault].join(" ")}>
        {displayText}
      </p>
      <span className={styles.chevron}>
        <ChevronDownIcon />
      </span>
    </div>
  );
}
