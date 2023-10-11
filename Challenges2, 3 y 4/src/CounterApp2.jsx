import React, { useState } from 'react';

/* challenge4 */

function CounterApp2() {
  // Estado local para el contador
  const [counter, setCounter] = useState(0);

  // Estado local para la categoría y lista de categorías
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleSum = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const addCategory = () => {
    if (category.trim() !== '') {
      setCategories([...categories, category]);
      setCategory('');
    }
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <input
        type="text"
        placeholder="Enter a category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleSubtract}>Subtract 1</button>
      <button onClick={handleSum}>Sum 1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={addCategory}>Add Category</button>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterApp2;
