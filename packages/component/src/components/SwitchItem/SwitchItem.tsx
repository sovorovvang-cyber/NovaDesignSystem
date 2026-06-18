import styles from "./SwitchItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .SwitchItem (node 53886:56816)
// anatomy: track[ thumb ]
// Variants: selection(Off|On) × state(Default|Disabled)

interface Props {
  selection?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}

export function SwitchItem({
  selection = false,
  disabled = false,
  onChange,
  className,
}: Props) {
  const trackClass = [
    styles.track,
    selection ? styles.trackOn : styles.trackOff,
    disabled ? styles.trackDisabled : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      role="switch"
      aria-checked={selection}
      disabled={disabled}
      className={trackClass}
      onClick={() => onChange?.(!selection)}
      data-cx-component="SwitchItem"
    >
      <span className={styles.thumb} />
    </button>
  );
}
