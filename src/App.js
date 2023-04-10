import React from 'react';
import './App.css';
import UserInputForm from './UserInputForm';
import NameList from './NameList';

function App() {
  const [names, setNames] = React.useState(['Josie', 'Jordan']);
  return (
    <div className="App">
      <header>Find A Name</header>
      <UserInputForm />
      <NameList names={names} />
    </div>
  );
}

export default App;
