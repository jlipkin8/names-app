import React from 'react';
import styles from './UserInputForm.module.css';
import { filterByLetter, filterBySyllable } from './utils';

function FirstLetterInput({ letter, setLetter }) {
  function handleLetter(event) {
    const newLetter = event.target.value;
    setLetter(newLetter);
  }
  return (
    <>
      <label htmlFor="first-letter-field">First Letter:</label>
      <input
        id="first-letter-field"
        value={letter}
        maxLength="1"
        onChange={handleLetter}
      />
      <span>Enter the first letter for the name</span>
    </>
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
  letter,
  setLetter,
  names,
  setNames,
  setDisplayedNames,
  numOfSyllables,
  setNumOfSyllables,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    let filteredNames = [...names];
    if (letter) {
      filteredNames = filterByLetter(filteredNames, letter);
    }
    if (numOfSyllables) {
      const convertedNum = Number.parseInt(numOfSyllables, 10);
      filteredNames = filterBySyllable(filteredNames, convertedNum);
    }
    setDisplayedNames(filteredNames);
    setLetter('');
  }
  console.log('numOfSyllables', numOfSyllables);
  return (
    <form onSubmit={handleSubmit}>
      <FirstLetterInput
        letter={letter}
        setLetter={setLetter}
      ></FirstLetterInput>
      <SyllableSlider
        numOfSyllables={numOfSyllables}
        setNumOfSyllables={setNumOfSyllables}
      ></SyllableSlider>
      <button className={styles.button}>Find!</button>
    </form>
  );
}

export default UserInputForm;
