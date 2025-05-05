import React from 'react';

function Greeting({ name, timeOfDay }) {
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
  return <h2>Good {capitalize(timeOfDay)}, {name}!</h2>;
}

export default Greeting;
