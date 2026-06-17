import React from "react";
import styles from "./CardHomeItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 CardHomeItem (node 51084:42807)
// variants: Profile | Data | Barcode | Product | Benefit | TaskCard

export type CardHomeItemVariant = "Profile" | "Data" | "Barcode" | "Product" | "Benefit" | "TaskCard";

interface TextProductGroupInline {
  subtitle?: string;
  title?: string;
}

export interface CardHomeItemProps {
  variant?: CardHomeItemVariant;
  className?: string;

  /* Profile */
  profileName?: string;
  profilePhone?: string;
  profileAvatarSrc?: string;
  profileButtonLabel?: string;
  onProfileButton?: () => void;

  /* Data */
  dataSubtitle?: string;
  dataTitle?: string;
  dataIconSrc?: string;

  /* Barcode */
  barcodeSrc?: string;
  barcodeSerial?: string[];
  barcodeTime?: string;

  /* Product */
  productImageSrc?: string;
  productSubtitle?: string;
  productTitle?: string;

  /* Benefit */
  benefitImageSrc?: string;
  benefitSubtitle?: string;
  benefitTitle?: string;

  /* TaskCard (background card) */
  taskCardImageSrc?: string;
}

function TextRow({ subtitle, title }: TextProductGroupInline) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--component/textproductgroup/gap/1, 2px)", width: "100%", minWidth: 0 }}>
      {subtitle && (
        <p style={{ margin: 0, fontSize: "var(--typography/font-size/14, 14px)", fontWeight: 500, lineHeight: 1.3, letterSpacing: "-0.04em", color: "var(--text/neutral/secondary, rgba(12,27,65,0.67))", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {subtitle}
        </p>
      )}
      <p style={{ margin: 0, fontSize: "var(--typography/font-size/18, 18px)", fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.05em", color: "var(--text/neutral/primary, #060c1f)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {title}
      </p>
    </div>
  );
}

export function CardHomeItem({
  variant = "Profile",
  className,
  profileName = "박주훈님",
  profilePhone = "010-1234-5678",
  profileAvatarSrc,
  profileButtonLabel = "Label",
  onProfileButton,
  dataSubtitle = "Subtitle",
  dataTitle = "Title",
  dataIconSrc,
  barcodeSrc,
  barcodeSerial = ["1234", "4561", "1506", "4932"],
  barcodeTime = "19:58",
  productImageSrc,
  productSubtitle = "Subtitle",
  productTitle = "Title",
  benefitImageSrc,
  benefitSubtitle = "Subtitle",
  benefitTitle = "Title",
  taskCardImageSrc,
}: CardHomeItemProps) {
  if (variant === "TaskCard") {
    return (
      <div className={[styles.taskCard, className ?? ""].filter(Boolean).join(" ")} data-cx-component="CardHomeItem" data-variant="TaskCard">
        <div className={styles.taskCardGradient} />
        {taskCardImageSrc && (
          <div className={styles.taskCardImageArea}>
            <img className={styles.taskCardImg} src={taskCardImageSrc} alt="" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={[styles.root, className ?? ""].filter(Boolean).join(" ")}
      data-cx-component="CardHomeItem"
      data-variant={variant}
    >
      {variant === "Profile" && (
        <>
          <div className={styles.profileText}>
            <div className={styles.profileAvatar}>
              {profileAvatarSrc && <img className={styles.profileAvatarImg} src={profileAvatarSrc} alt="" />}
            </div>
            <p className={styles.profileName}>{profileName}</p>
            <p className={styles.profilePhone}>{profilePhone}</p>
          </div>
          <button type="button" className={styles.profileButton} onClick={onProfileButton}>
            {profileButtonLabel}
          </button>
        </>
      )}

      {variant === "Data" && (
        <>
          <div className={styles.dataTextGroup}>
            <TextRow subtitle={dataSubtitle} title={dataTitle} />
          </div>
          <div className={styles.dataIcon}>
            {dataIconSrc && <img className={styles.dataIconImg} src={dataIconSrc} alt="" />}
          </div>
        </>
      )}

      {variant === "Barcode" && (
        <div className={styles.barcodeWrap}>
          {barcodeSrc && <img className={styles.barcodeImage} src={barcodeSrc} alt="barcode" />}
          <div className={styles.barcodeText}>
            <div className={styles.barcodeSerial}>
              {barcodeSerial.map((seg, i) => (
                <p key={i} className={styles.barcodeNum}>{seg}</p>
              ))}
            </div>
            <p className={styles.barcodeTime}>{barcodeTime}</p>
          </div>
        </div>
      )}

      {variant === "Product" && (
        <>
          <div className={styles.productThumbnail}>
            {productImageSrc && <img className={styles.productThumbnailImg} src={productImageSrc} alt="" />}
            <div className={styles.productThumbnailDim} />
          </div>
          <div className={styles.productTextGroup}>
            <TextRow subtitle={productSubtitle} title={productTitle} />
          </div>
        </>
      )}

      {variant === "Benefit" && (
        <>
          <div className={styles.benefitAvatar}>
            {benefitImageSrc && <img className={styles.benefitAvatarImg} src={benefitImageSrc} alt="" />}
          </div>
          <div className={styles.benefitTextGroup}>
            <TextRow subtitle={benefitSubtitle} title={benefitTitle} />
          </div>
        </>
      )}
    </div>
  );
}
