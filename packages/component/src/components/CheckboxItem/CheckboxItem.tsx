import styles from "./CheckboxItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .CheckboxItem (node 50943:30840)
// anatomy: root[ checkbox[ checkIcon? ], label? ]
// variant: Circle (round) | Line (rounded square)

interface Props {
  /** Visual shape variant */
  variant?: "Circle" | "Line";
  /** Whether the checkbox is in a checked/selected state */
  checked?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Optional label text rendered to the right of the checkbox */
  label?: string;
  /** Whether to show the label */
  showLabel?: boolean;
  /** Change handler — receives the next checked value */
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function CheckboxItem({
  variant = "Circle",
  checked = false,
  disabled = false,
  label = "항목",
  showLabel = false,
  onChange,
  className,
}: Props) {
  function handleClick() {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  }

  const rootClass = [
    styles.root,
    disabled ? styles.rootDisabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const checkboxClass = [
    styles.checkbox,
    variant === "Circle" ? styles.checkboxCircle : null,
    checked ? styles.checkboxChecked : styles.checkboxUnchecked,
    disabled ? styles.checkboxDisabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      data-cx-component="CheckboxItem"
      data-checked={checked}
      data-disabled={disabled}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <span className={checkboxClass} aria-hidden="true">
        {checked && (
          <svg
            className={styles.checkIcon}
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
          >
            <path
              d="M1.5 5L5 8.5L11.5 1.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {showLabel && (
        <span
          className={[
            styles.label,
            disabled ? styles.labelDisabled : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {label}
        </span>
      )}
    </div>
  );
}
