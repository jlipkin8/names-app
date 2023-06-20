import React from 'react';
import { NAMES } from './names';

export const FormContext = React.createContext();

function FormProvider({ children }) {
  const className = 'sidebar';
  const [names, setNames] = React.useState(NAMES);
  const [displayedNames, setDisplayedNames] = React.useState(NAMES);
  const [letters, setLetters] = React.useState('');
  const [numOfSyllables, setNumOfSyllables] = React.useState('any');
  const [lettersPosition, setLettersPosition] =
    React.useState('starts-with');

  const providerValue = {
    className,
    names,
    setNames,
    displayedNames,
    setDisplayedNames,
    letters,
    setLetters,
    numOfSyllables,
    setNumOfSyllables,
    lettersPosition,
    setLettersPosition,
  };
  return (
    <FormContext.Provider value={providerValue}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
