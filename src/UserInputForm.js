import React from 'react';

function UserInputForm() {
  return (
    <form>
      <label htmlFor="first-letter-field">First Letter:</label>
      <input id="first-letter-field" value="" />
      <span>Enter the first letter for the name</span>
      <div>
        <input
          type="range"
          id="syllable"
          name="syllable-number"
          min="1"
          max="10"
          value="1"
          step="1"
        />
        <label htmlFor="syllable">Syllable Number</label>
      </div>
      <button>Find!</button>
    </form>
  );
}

export default UserInputForm;
