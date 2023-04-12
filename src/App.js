import React from 'react';
import './App.css';
import UserInputForm from './UserInputForm';
import NameList from './NameList';
import { NAMES } from './names';

function App() {
  const [names, setNames] = React.useState(NAMES);
  const [letter, setLetter] = React.useState('');

  return (
    <div className="App">
      <header className="header">Find A Name</header>
      <UserInputForm
        className="sidecar"
        letter={letter}
        setLetter={setLetter}
        names={names}
        setNames={setNames}
      />
      <NameList className names={names} />
    </div>
  );
}

export default App;
