import React, { useState } from 'react';
import BreakingBadQuote from './BreakingBadQuote';
import CounterComponent from './CounterComponent';

const MultipleCustomHooks = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <CounterComponent counter={counter} setCounter={setCounter} />
      <BreakingBadQuote counterValue={counter} />
    </div>
  );
};

export default MultipleCustomHooks;


