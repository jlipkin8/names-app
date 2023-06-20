import React from 'react';
import { FormContext } from './UserFormProvider';

function Name({ name }) {
  return <h2>{name}</h2>;
}

export default function NameList({ className }) {
  const { displayedNames } = React.useContext(FormContext);
  return (
    <div className={className}>
      {displayedNames.map((name) => (
        <Name name={name.name} key={name.id} />
      ))}
    </div>
  );
}
