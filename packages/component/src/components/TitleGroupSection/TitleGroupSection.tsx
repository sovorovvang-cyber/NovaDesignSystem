import React from "react";
import styles from "./TitleGroupSection.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .TitleGroupSection (node 50943:30595)
// anatomy: root[ titleText[ ?titleSubText, title ], ?subText ]

interface Props {
  titleSubText?: boolean;
  titleSubTextContent?: string;
  title?: string;
  subText?: boolean;
  subTextContent?: string;
  className?: string;
}

export function TitleGroupSection({
  titleSubText = true,
  titleSubTextContent = "갤럭시 S29 · SM-S942NV",
  title = "축하드려요 주훈님,\n개통이 완료되었어요",
  subText = true,
  subTextContent = "지금부터 새로운 휴대폰 사용이 가능해요.",
  className,
}: Props) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="TitleGroupSection"
    >
      <div className={styles.titleText}>
        {titleSubText && (
          <p className={styles.titleSubText}>{titleSubTextContent}</p>
        )}
        <p className={styles.title}>
          {title.split("\n").map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br aria-hidden />}
            </React.Fragment>
          ))}
        </p>
      </div>
      {subText && (
        <div className={styles.subText}>
          <p className={styles.subTextLabel}>{subTextContent}</p>
        </div>
      )}
    </div>
  );
}
