import styles from "./Search.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.3 .Search (node 50943:30637)
// anatomy: wrap[ searchBar[ textField[ inputContent[text,caret?], clearBtn? ], searchIcon ] ]
// States: Default | Focused | Typing | Completed | Disabled

export type SearchState = "Default" | "Focused" | "Typing" | "Completed" | "Disabled";

interface Props {
  state?: SearchState;
  placeholder?: string;
  value?: string;
  onClear?: () => void;
  onSearch?: () => void;
}

function Caret() {
  return <span className={styles.caret} aria-hidden="true" />;
}

function SearchIcon({ dimmed = false }: { dimmed?: boolean }) {
  return (
    <span className={`${styles.iconWrap} ${dimmed ? styles.iconDimmed : ""}`} aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="6.25" stroke="currentColor" strokeWidth="1.5" />
        <line x1="13.7803" y1="14.2197" x2="17.2803" y2="17.7197" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function ClearButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className={styles.clearBtn}
      onClick={onClick}
      aria-label="검색어 지우기"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

export function Search({
  state = "Default",
  placeholder = "검색",
  value = "텍스트를 입력하세요",
  onClear,
  onSearch,
}: Props) {
  const isDisabled = state === "Disabled";
  const isFocused = state === "Focused";
  const isTyping = state === "Typing";
  const isCompleted = state === "Completed";
  const showValue = isTyping || isCompleted;
  const showClear = isTyping || isCompleted;

  const searchBarClass = [
    styles.searchBar,
    showClear ? styles.searchBarNarrow : styles.searchBarWide,
    isDisabled ? styles.searchBarDisabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`${styles.wrap} ${isDisabled ? styles.wrapDisabled : ""}`}
      data-cx-component="Search"
      data-state={state}
    >
      <div className={searchBarClass}>
        {/* textField: inputContent + optional clear button */}
        <div className={styles.textField}>
          <div className={styles.inputContent}>
            {showValue ? (
              <>
                <span className={styles.inputText}>{value}</span>
                {isTyping && <Caret />}
              </>
            ) : (
              <>
                {isFocused && <Caret />}
                <span
                  className={`${styles.placeholder} ${isDisabled ? styles.placeholderDisabled : ""}`}
                >
                  {placeholder}
                </span>
              </>
            )}
          </div>
          {showClear && <ClearButton onClick={onClear} />}
        </div>

        {/* search icon — always on right */}
        <button
          type="button"
          className={styles.searchIconBtn}
          onClick={onSearch}
          aria-label="검색"
          disabled={isDisabled}
        >
          <SearchIcon dimmed={isDisabled} />
        </button>
      </div>
    </div>
  );
}
