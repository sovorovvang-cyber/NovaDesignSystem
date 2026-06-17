import styles from "./Footer.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Footer (node 50943:30545)
// variants: Default | Product | SafeArea
// Default anatomy: root > infoGroup[ buttonTextGroup, bizInfoGroup, copyright ] + safeArea
// Product anatomy: root > disclaimerGroup[ section× 3 ] + safeArea
// SafeArea: 140px spacer div only

export interface FooterProps {
  variant?: "Default" | "Main" | "Product" | "SafeArea";
  termLabel?: string;
  financeTermLabel?: string;
  privacyLabel?: string;
  businessName?: string;
  ceo?: string;
  businessRegNo?: string;
  address?: string;
  mailOrderRegNo?: string;
  tel?: string;
  email?: string;
  copyright?: string;
  onTermClick?: () => void;
  onFinanceTermClick?: () => void;
  onPrivacyClick?: () => void;
}

export function Footer({
  variant = "Default",
  termLabel = "이용약관",
  financeTermLabel = "전자금융거래 이용약관",
  privacyLabel = "개인정보처리방침",
  businessName = "SK플래닛(주)",
  ceo = "유재욱",
  businessRegNo = "815-81-01244",
  address = "경기도 성남시 분당구 판교로 264(삼평동)",
  mailOrderRegNo = "2014-경기성남-0036",
  tel = "1800-0133",
  email = "gifticon@skplanet.com",
  copyright = "Copyright ©️ SK Planet All Rights Reserved",
  onTermClick,
  onFinanceTermClick,
  onPrivacyClick,
}: FooterProps) {
  if (variant === "SafeArea") {
    return <div className={styles.safeArea} data-cx-component="Footer" data-variant="SafeArea" />;
  }

  const isDefault = variant === "Default" || variant === "Main";
  const isProduct = variant === "Product";

  return (
    <footer className={styles.root} data-cx-component="Footer" data-variant={variant}>

      {/* ── Default: legal + biz info + copyright ── */}
      {isDefault && (
        <div className={styles.infoGroup}>
          {/* Legal links */}
          <div className={styles.buttonTextGroup}>
            <button type="button" className={styles.legalBtn} onClick={onTermClick}>
              {termLabel}
            </button>
            <span className={styles.divider} aria-hidden="true" />
            <button type="button" className={styles.legalBtn} onClick={onFinanceTermClick}>
              {financeTermLabel}
            </button>
            <span className={styles.divider} aria-hidden="true" />
            <button type="button" className={styles.legalBtn} onClick={onPrivacyClick}>
              {privacyLabel}
            </button>
          </div>

          {/* Business info */}
          <div className={styles.bizInfoGroup}>
            <div className={styles.infoRow}>
              <span className={styles.infoText}>{`사업자: ${businessName}`}</span>
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.infoText}>{`대표 : ${ceo}`}</span>
            </div>
            <span className={styles.infoText}>{`사업자등록번호 : ${businessRegNo}`}</span>
            <span className={styles.infoText}>{address}</span>
            <span className={styles.infoText}>{`통신판매업신고 : ${mailOrderRegNo}`}</span>
            <span className={styles.infoText}>{`전화 : ${tel}`}</span>
            <span className={styles.infoText}>{email}</span>
          </div>

          <p className={styles.copyright}>{copyright}</p>
        </div>
      )}

      {/* ── Product: disclaimer sections ── */}
      {isProduct && (
        <div className={styles.disclaimerGroup}>
          <div className={styles.disclaimerSection}>
            <p className={styles.disclaimerTitle}>통신 판매 중개업 안내</p>
            <p className={styles.disclaimerBody}>
              제 3자가 판매하는 상품 및 거래의 경우 SK텔레콤(주)은 통신판매 중개자이며, 통신판매의 당사자가 아닙니다.
            </p>
          </div>
          <div className={styles.disclaimerSection}>
            <p className={styles.disclaimerTitle}>거래 의무 책임 안내</p>
            <p className={styles.disclaimerBody}>상품 및 거래에 관한 의무와 책임은 판매자에게 있습니다.</p>
          </div>
          <div className={styles.disclaimerSection}>
            <p className={styles.disclaimerTitle}>미성년자 거래 안내</p>
            <p className={styles.disclaimerBody}>
              법정대리인의 동의를 받지 않은 미성년자의 거래는 관련 법령에 따라 취소될 수 있습니다.
            </p>
          </div>
        </div>
      )}

      {/* SafeArea spacer built into Default and Product */}
      <div className={styles.safeArea} aria-hidden="true" />
    </footer>
  );
}
