import React from 'react';

const CounterComponent = ({ counter, setCounter }) => {
  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Incrementar</button>
      <p>Contador: {counter}</p>
    </div>
  );
};

export default CounterComponent;


