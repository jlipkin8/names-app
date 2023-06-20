import React from 'react';
import './App.css';
import UserInputForm from './UserInputForm';
import NameList from './NameList';
import FormProvider from './UserFormProvider';
function App() {
  return (
    <FormProvider>
      <div className="App">
        <header className="header">Find A Name</header>
        <UserInputForm />
        <NameList className="content" />
      </div>
    </FormProvider>
  );
}

export default App;
