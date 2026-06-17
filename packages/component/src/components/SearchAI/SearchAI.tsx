import styles from "./SearchAI.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .SearchAI (node 54379:99008)
// anatomy: root[ inputRow[aiIcon, textField], actions[voiceBtn, sendBtn?] ]
// States: Default | Focused | Typing | Completed

export type SearchAIState = "Default" | "Focused" | "Typing" | "Completed";

interface Props {
  state?: SearchAIState;
  placeholder?: string;
  value?: string;
  onVoice?: () => void;
  onSend?: () => void;
  className?: string;
}

function AiSparkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="var(--text/brand/primary, #3617ce)" />
    </svg>
  );
}

function VoiceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="9" y="3" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 11C5 14.866 8.13401 18 12 18C15.866 18 19 14.866 19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 19V5M12 5L6 11M12 5L18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchAI({
  state = "Default",
  placeholder = "T에 대해 무엇이든 물어보세요",
  value = "T에 대해 무엇이든 물어보세요",
  onVoice,
  onSend,
  className,
}: Props) {
  const isTyping = state === "Typing";
  const isCompleted = state === "Completed";
  const showValue = isTyping || isCompleted;
  const showCaret = state === "Focused" || isTyping;
  const showSend = isTyping || isCompleted;

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="SearchAI"
      data-state={state}
    >
      {/* Left: AI icon + text */}
      <div className={styles.inputRow}>
        <span className={styles.aiIcon}>
          <AiSparkIcon />
        </span>
        <div className={styles.textField}>
          {showValue ? (
            <>
              <p className={styles.inputText}>{value}</p>
              {showCaret && <span className={styles.caret} aria-hidden />}
            </>
          ) : (
            <>
              {showCaret && <span className={styles.caret} aria-hidden />}
              <p className={styles.placeholder}>{placeholder}</p>
            </>
          )}
        </div>
      </div>

      {/* Right: action buttons */}
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.iconBtn}
          onClick={onVoice}
          aria-label="음성 입력"
        >
          <VoiceIcon />
        </button>
        {showSend && (
          <button
            type="button"
            className={`${styles.iconBtn} ${styles.iconBtnBrand}`}
            onClick={onSend}
            aria-label="전송"
          >
            <SendIcon />
          </button>
        )}
      </div>
    </div>
  );
}
