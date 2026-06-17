import React from "react";
import { IconBack } from "../IconBack";
import { IconBarcode } from "../IconBarcode";
import { IconCart } from "../IconCart";
import { IconMenu } from "../IconMenu";
import { IconHistory } from "../IconHistory";
import { IconDummy } from "../IconDummy";
import styles from "./AppbarAI.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .AppbarAI (Home 51664:73058, Chat 54431:51419)
// anatomy:
//   Home: root[ rightArea[ pill(barcode), pill(cart), pill(menu) ] ]
//         — 반투명(white-alpha) 홈 헤더. 히어로/콘텐츠 위에 오버레이되는 AI 홈 진입 헤더.
//   Chat: root[ leftArea[ pill(back), labelBtn ], rightArea[ pill(history), pill(ai) ] ]
//         — 대화/AI 컨텍스트 헤더. 좌측 뒤로가기+라벨, 우측 기록+AI.
// 모든 버튼은 44×44 반투명 pill(white-alpha-400 + soft shadow). 아이콘 24px.

interface PillProps {
  "aria-label"?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

/** 반투명 pill 아이콘 버튼 (44×44) */
function AIPill({ "aria-label": ariaLabel, onClick, children }: PillProps) {
  return (
    <button type="button" className={styles.pill} aria-label={ariaLabel} onClick={onClick}>
      <span className={styles.pillIcon}>{children}</span>
    </button>
  );
}

interface Props {
  /** 헤더 컨텍스트 — "Home"(홈 진입) | "Chat"(대화/AI) */
  variant?: "Home" | "Chat";
  /** (Chat 전용) 좌측 라벨 버튼 텍스트 */
  label?: string;
  /** (Home) 바코드 버튼 클릭 */
  onBarcode?: () => void;
  /** (Home) 장바구니 버튼 클릭 */
  onCart?: () => void;
  /** (Home) 메뉴 버튼 클릭 */
  onMenu?: () => void;
  /** (Chat) 뒤로가기 클릭 */
  onBack?: () => void;
  /** (Chat) 라벨 버튼 클릭 */
  onLabel?: () => void;
  /** (Chat) 기록 버튼 클릭 */
  onHistory?: () => void;
  /** (Chat) AI 버튼 클릭 */
  onAI?: () => void;
  className?: string;
}

/** AI 컨텍스트 전용 상단 헤더 (반투명). Home=홈 진입, Chat=대화/AI. */
export function AppbarAI({
  variant = "Home",
  label = "Label",
  onBarcode,
  onCart,
  onMenu,
  onBack,
  onLabel,
  onHistory,
  onAI,
  className,
}: Props) {
  if (variant === "Chat") {
    return (
      <div className={[styles.root, styles.rootChat, className].filter(Boolean).join(" ")}>
        <div className={styles.area}>
          <AIPill aria-label="뒤로가기" onClick={onBack}>
            <IconBack />
          </AIPill>
          <button type="button" className={styles.labelBtn} onClick={onLabel}>
            {label}
          </button>
        </div>
        <div className={styles.area}>
          <AIPill aria-label="기록" onClick={onHistory}>
            <IconHistory />
          </AIPill>
          <AIPill aria-label="AI" onClick={onAI}>
            <IconDummy />
          </AIPill>
        </div>
      </div>
    );
  }

  return (
    <div className={[styles.root, styles.rootHome, className].filter(Boolean).join(" ")}>
      <AIPill aria-label="바코드" onClick={onBarcode}>
        <IconBarcode />
      </AIPill>
      <AIPill aria-label="장바구니" onClick={onCart}>
        <IconCart />
      </AIPill>
      <AIPill aria-label="메뉴" onClick={onMenu}>
        <IconMenu />
      </AIPill>
    </div>
  );
}
