import React from 'react';
import styles from './UserInputForm.module.css';
import { filterByLetters, filterBySyllable, range } from './utils';

function LettersInput({
  letters,
  setLetters,
  lettersPosition,
  setLettersPosition,
}) {
  function handleLetters(event) {
    const newLetter = event.target.value;
    setLetters(newLetter);
  }
  return (
    <div>
      <input
        type="radio"
        name="letters-position"
        id="starts-with"
        value="starts-with"
        checked={lettersPosition === 'starts-with'}
        onChange={(event) => {
          setLettersPosition(event.target.value);
        }}
      />
      <label htmlFor="starts-with">Starts With</label>
      <input
        type="radio"
        name="letters-position"
        id="ends-with"
        value="ends-with"
        checked={lettersPosition === 'ends-with'}
        onChange={(event) => {
          setLettersPosition(event.target.value);
        }}
      />
      <label htmlFor="starts-with">Ends With</label> <br />
      <input
        id="first-letter-field"
        value={letters}
        maxLength="5"
        onChange={handleLetters}
      />
    </div>
  );
}

function SyllableNumDropDown({ numOfSyllables, setNumOfSyllables }) {
  const OPTIONS = range(6);
  function handleSelect(event) {
    setNumOfSyllables(event.target.value);
  }
  return (
    <div>
      <label htmlFor="syllable-num">Number of syllables:</label>
      <select
        id="syllable-num"
        value={numOfSyllables}
        onChange={handleSelect}
      >
        <option key="any" value="any">
          {'Any'}
        </option>
        {OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
function UserInputForm({
  letters,
  setLetters,
  names,
  setDisplayedNames,
  numOfSyllables,
  setNumOfSyllables,
  lettersPosition,
  setLettersPosition,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    let filteredNames = [...names];
    if (letters) {
      filteredNames = filterByLetters(
        filteredNames,
        letters,
        lettersPosition
      );
    }
    if (numOfSyllables !== 'any') {
      const convertedNum = Number.parseInt(numOfSyllables, 10);
      filteredNames = filterBySyllable(filteredNames, convertedNum);
    }
    setDisplayedNames(filteredNames);
    setLetters('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <LettersInput
        letters={letters}
        setLetters={setLetters}
        lettersPosition={lettersPosition}
        setLettersPosition={setLettersPosition}
      ></LettersInput>
      <SyllableNumDropDown
        numOfSyllables={numOfSyllables}
        setNumOfSyllables={setNumOfSyllables}
      ></SyllableNumDropDown>
      <button className={styles.button}>Find!</button>
    </form>
  );
}

export default UserInputForm;
