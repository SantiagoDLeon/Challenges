import React, { useState } from 'react';


/* challenge3 */

function CounterApp() {
  // 1. Define el estado local para el contador
  const [counter, setCounter] = useState(0);

  // 2. Implementa handleSubtract para restar 1 del contador
  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleSum = () => {
    setCounter(counter + 1);
  };
  // 3. Implementa handleReset para restablecer el contador al valor predeterminado
  const handleReset = () => {
    setCounter(0);
  };

  

  // 4. Renderiza los elementos en la interfaz de usuario
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleSubtract}>Subtract 1</button>
      <button onClick={handleSum}>Sum 1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CounterApp;
