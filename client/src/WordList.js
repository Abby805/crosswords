import { h } from "preact";

import * as styles from "./WordList.module.scss";

const List = ({ children }) => <ol class={styles.list}>{children}</ol>;

const ListItem = ({
  wordInfo: { word, def, number },
  isFound,
  isHighlighted,
  onClick,
}) => (
  <li
    key={def}
    onClick={(e) => {
      e.preventDefault();
      isFound || onClick(word);
    }}
    class={`${styles["list__item"]} ${
      isFound
        ? `${styles["list__item--found"]}`
        : isHighlighted
        ? styles["list__item--highlighted"]
        : ""
    }
`}
  >
    {number}.&nbsp;&nbsp;{def}
  </li>
);

const WordList = ({
  horizontalWords,
  verticalWords,
  onSelectedWord,
  foundWords,
  highlightedWord,
}) => {
  return (
    <div>
      <h3>Across</h3>
      <List>
        {horizontalWords.map((wordInfo) => (
          <ListItem
            wordInfo={wordInfo}
            onClick={onSelectedWord}
            isFound={foundWords.has(wordInfo.word)}
            isHighlighted={wordInfo.word === highlightedWord}
          />
        ))}
      </List>
      <h3>Down</h3>
      <List>
        {verticalWords.map((wordInfo) => (
          <ListItem
            wordInfo={wordInfo}
            onClick={onSelectedWord}
            isFound={foundWords.has(wordInfo.word)}
            isHighlighted={wordInfo.word === highlightedWord}
          />
        ))}
      </List>
    </div>
  );
};

export default WordList;
