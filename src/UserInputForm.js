import React from 'react';
import styles from './UserInputForm.module.css';

function FirstLetterInput({ letter, setLetter }) {
  function handleLetter(event) {
    const newLetter = event.target.value;
    console.log('newLetter', newLetter);
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

function SyllableSlider() {
  const [numOfSyllables, setNumOfSyllables] = React.useState(1);
  function handleSlider(event) {
    setNumOfSyllables(event.target.value);
  }
  return (
    <div>
      <input
        type="range"
        id="syllable"
        name="syllable-number"
        min="1"
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
function UserInputForm({ letter, setLetter, names, setNames }) {
  function handleSubmit(event) {
    event.preventDefault();
    // filter names here
    const filteredNames = names.filter((name) => {
      return name.name.startsWith(letter.toUpperCase());
    });
    console.log('filteredNames', filteredNames);
    setNames(filteredNames);
  }
  return (
    <form onSubmit={handleSubmit}>
      <FirstLetterInput
        letter={letter}
        setLetter={setLetter}
      ></FirstLetterInput>
      <SyllableSlider></SyllableSlider>
      <button className={styles.button}>Find!</button>
    </form>
  );
}

export default UserInputForm;
