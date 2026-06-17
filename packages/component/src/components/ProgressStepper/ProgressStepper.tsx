import styles from "./ProgressStepper.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .ProgressStepper (node 54842:36033)
// anatomy: root[ current, slash, total ]

interface Props {
  /** Current step (1-based) */
  current?: number;
  /** Total steps */
  total?: number;
  className?: string;
}

export function ProgressStepper({ current = 1, total = 4, className }: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="ProgressStepper"
      aria-label={`${current} / ${total}`}
    >
      <span className={styles.current}>{current}</span>
      <span className={styles.separator} aria-hidden>/</span>
      <span className={styles.total}>{total}</span>
    </div>
  );
}
