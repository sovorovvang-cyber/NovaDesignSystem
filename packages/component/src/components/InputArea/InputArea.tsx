import { InputAreaItem, InputAreaItemState } from "../InputAreaItem/InputAreaItem";
import { InputHelpTextItem } from "../InputHelpTextItem/InputHelpTextItem";
import styles from "./InputArea.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .InputArea (node 54574:98661)
// anatomy: wrap[ label?, InputAreaItem, InputHelpTextItem? ]

interface Props {
  labelText?: string;
  placeholder?: string;
  value?: string;
  state?: InputAreaItemState;
  danger?: boolean;
  label?: boolean;
  helpText?: boolean;
  helpTextContent?: string;
  className?: string;
}

export function InputArea({
  labelText = "레이블",
  placeholder = "텍스트를 입력하세요",
  value,
  state = "Default",
  danger = false,
  label = true,
  helpText = true,
  helpTextContent = "Help Text",
  className,
}: Props) {
  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      data-cx-component="InputArea"
    >
      {label && <p className={styles.label}>{labelText}</p>}
      <InputAreaItem
        className={styles.inputAreaItem}
        state={state}
        danger={danger}
        placeholder={placeholder}
        value={value}
      />
      {helpText && (
        <InputHelpTextItem className={styles.helpText} danger={danger}>
          {helpTextContent}
        </InputHelpTextItem>
      )}
    </div>
  );
}
