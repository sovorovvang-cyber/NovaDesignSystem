import styles from "./DimItem.module.css";

export interface DimItemProps {
  className?: string;
}

export function DimItem({ className }: DimItemProps) {
  return (
    <div
      className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="DimItem"
    />
  );
}
