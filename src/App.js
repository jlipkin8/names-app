import React from 'react';
import './App.css';
import UserInputForm from './UserInputForm';
import NameList from './NameList';
import { NAMES } from './names';

function App() {
  const [names, setNames] = React.useState(NAMES);
  const [displayedNames, setDisplayedNames] = React.useState([]);
  const [letters, setLetters] = React.useState('');
  const [numOfSyllables, setNumOfSyllables] = React.useState(0);

  return (
    <div className="App">
      <header className="header">Find A Name</header>
      <UserInputForm
        className="sidebar"
        letters={letters}
        setLetters={setLetters}
        names={names}
        setNames={setNames}
        setDisplayedNames={setDisplayedNames}
        numOfSyllables={numOfSyllables}
        setNumOfSyllables={setNumOfSyllables}
      />
      <NameList className="content" names={displayedNames} />
    </div>
  );
}

export default App;
