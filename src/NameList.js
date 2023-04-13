import React from 'react';

function Name({ name }) {
  return <h2>{name}</h2>;
}

export default function NameList({ names }) {
  return (
    <div>
      {names.map((name) => (
        <Name name={name.name} key={name.id} />
      ))}
    </div>
  );
}
