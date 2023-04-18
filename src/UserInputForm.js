import React from 'react';
import styles from './UserInputForm.module.css';
import { filterByLetters, filterBySyllable } from './utils';

function LettersInput({ letters, setLetters }) {
  const [lettersPosition, setLettersPosition] =
    React.useState('starts-with');

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

function SyllableSlider({ numOfSyllables, setNumOfSyllables }) {
  function handleSlider(event) {
    setNumOfSyllables(event.target.value);
  }
  return (
    <div>
      <input
        type="range"
        id="syllable"
        name="syllable-number"
        min="0"
        max="10"
        value={numOfSyllables}
        step="1"
        onChange={handleSlider}
      />
      <label htmlFor="syllable">
        Syllable Number: {numOfSyllables}
      </label>
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
}) {
  function handleSubmit(event) {
    event.preventDefault();
    let filteredNames = [...names];
    if (letters) {
      filteredNames = filterByLetters(filteredNames, letters);
      console.log('filteredNames', filteredNames);
    }
    if (numOfSyllables) {
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
      ></LettersInput>
      <SyllableSlider
        numOfSyllables={numOfSyllables}
        setNumOfSyllables={setNumOfSyllables}
      ></SyllableSlider>
      <button className={styles.button}>Find!</button>
    </form>
  );
}

export default UserInputForm;
