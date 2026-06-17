import { SelectItem, SelectItemState } from "../SelectItem/SelectItem";
import { InputHelpTextItem } from "../InputHelpTextItem/InputHelpTextItem";
import styles from "./Select.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Select (node 54678:33437)
// anatomy: wrap[ label?, SelectItem, InputHelpTextItem? ]

interface Props {
  state?: SelectItemState;
  labelText?: string;
  placeholder?: string;
  value?: string;
  label?: boolean;
  helpText?: boolean;
  helpTextContent?: string;
  onClick?: () => void;
  className?: string;
}

export function Select({
  state = "Default",
  labelText = "레이블",
  placeholder = "텍스트",
  value,
  label = true,
  helpText = true,
  helpTextContent = "Help Text",
  onClick,
  className,
}: Props) {
  return (
    <div
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      data-cx-component="Select"
    >
      {label && <p className={styles.label}>{labelText}</p>}
      <SelectItem
        className={styles.selectItem}
        state={state}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
      />
      {helpText && (
        <InputHelpTextItem className={styles.helpText}>
          {helpTextContent}
        </InputHelpTextItem>
      )}
    </div>
  );
}
