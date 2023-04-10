import React from 'react';

function Name({ name }) {
  return <h2>{name}</h2>;
}

export default function NameList({ names }) {
  return names.map((name, index) => <Name name={name} key={index} />);
}
