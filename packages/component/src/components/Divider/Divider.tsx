import styles from "./Divider.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Divider (node 50943:27999)
// variants: inset (1px H) | section/full-width (4px H) | vertical (1px V)

type DividerVariant = "inset" | "contents" | "section" | "full-width" | "vertical";

interface Props {
  /** "inset"=1px horizontal, "section"/"full-width"=4px horizontal, "vertical"=1px vertical */
  variant?: DividerVariant;
  className?: string;
}

export function Divider({ variant = "inset", className }: Props) {
  const isVertical = variant === "vertical";

  let containerClass: string;
  if (isVertical) {
    containerClass = styles.vertical;
  } else if (variant === "section" || variant === "full-width") {
    containerClass = `${styles.root} ${styles.section}`;
  } else {
    containerClass = `${styles.root} ${styles.inset}`;
  }

  return (
    <div
      className={[containerClass, className].filter(Boolean).join(" ")}
      data-cx-component="Divider"
      role="separator"
      aria-orientation={isVertical ? "vertical" : "horizontal"}
    >
      <div className={styles.line} />
    </div>
  );
}
