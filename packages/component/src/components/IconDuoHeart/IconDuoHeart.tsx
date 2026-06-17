import styles from "./IconDuoHeart.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .IconItem/Nomal/DuoHeart (node 51625:63423)

const HEART_PATH =
  "M16 4.7959C16 3.26778 14.7799 2 13.0498 2C12.0654 2.00006 11.1044 2.45412 10.4971 3.13965L9 4.83008L7.50293 3.13965C6.89555 2.45412 5.93463 2.00006 4.9502 2C3.22015 2 2 3.26778 2 4.7959C2.00008 5.76087 2.43117 6.80815 3.6377 8.23828C4.86163 9.68899 6.64969 11.2682 9 13.333C11.3503 11.2682 13.1384 9.68899 14.3623 8.23828C15.5688 6.80816 15.9999 5.76087 16 4.7959ZM17.9912 5.10254C17.8071 8.25279 14.7946 10.9041 10.3047 14.8486C9.55898 15.5063 8.44102 15.5063 7.69531 14.8486C3.20536 10.9041 0.192884 8.25279 0.00878906 5.10254L0 4.7959C0 2.10162 2.1782 0 4.9502 0L5.24316 0.0078125C6.70205 0.0895527 8.08039 0.775463 9 1.81348C9.98096 0.706213 11.4839 5.84905e-05 13.0498 0C15.8218 0 18 2.10162 18 4.7959L17.9912 5.10254Z";

export type DuoHeartVariant = "line" | "fill";

interface Props {
  size?: number;
  color?: string;
  className?: string;
  variant?: DuoHeartVariant;
}

export function IconDuoHeart({
  size = 24,
  color = "currentColor",
  className,
  variant = "line",
}: Props) {
  const rootClass = [styles.root, className].filter(Boolean).join(" ");

  if (variant === "fill") {
    return (
      <svg
        data-cx-component="IconDuoHeart"
        className={rootClass}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d={HEART_PATH}
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          opacity={0.4}
          transform="translate(1.5 5.33)"
        />
        <path
          d={HEART_PATH}
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          transform="translate(3 4.33)"
        />
      </svg>
    );
  }

  return (
    <svg
      data-cx-component="IconDuoHeart"
      className={rootClass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={HEART_PATH}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={0.4}
        transform="translate(1.5 5.33)"
      />
      <path
        d={HEART_PATH}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="translate(3 4.33)"
      />
    </svg>
  );
}
