import styles from "./InputAreaItem.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .InputAreaItem (node 54558:55827)
// anatomy: root[ textField[ contents[ text, InputCaretItem? ] ] ]

export type InputAreaItemState = "Default" | "Focused" | "Typing" | "Completed" | "Disabled";

interface Props {
  state?: InputAreaItemState;
  danger?: boolean;
  placeholder?: string;
  value?: string;
  className?: string;
}

const stateClassMap: Record<InputAreaItemState, string> = {
  Default: styles.default,
  Focused: styles.focused,
  Typing: styles.typing,
  Completed: styles.completed,
  Disabled: styles.disabled,
};

export function InputAreaItem({
  state = "Default",
  danger = false,
  placeholder = "텍스트를 입력하세요",
  value,
  className,
}: Props) {
  const isDisabled = state === "Disabled";
  const hasValue = state === "Typing" || state === "Completed";
  const showCaret = state === "Focused" || state === "Typing";

  const fieldClass = [
    styles.textField,
    danger && !isDisabled ? styles.danger : stateClassMap[state],
  ]
    .filter(Boolean)
    .join(" ");

  const textClass = [
    styles.text,
    isDisabled ? styles.textDisabled : hasValue ? styles.textPrimary : styles.textPlaceholder,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-cx-component="InputAreaItem"
      data-state={state}
      data-danger={danger}
    >
      <div className={fieldClass}>
        <div className={styles.contents}>
          <p className={textClass}>{value ?? placeholder}</p>
          {showCaret && (
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                top: "calc(50% + 0.5px)",
                transform: "translateY(-50%)",
                width: "1px",
                height: "20px",
                borderRadius: "999px",
                backgroundColor: "var(--fill/neutral/strong, #060c1f)",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
