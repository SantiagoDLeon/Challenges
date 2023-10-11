import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import GifGrid from './GifGrid';

function App() {
  const categories = ['Funny', 'Cute', 'Cool']; // Ejemplo de categorías

  return (
    <div className="App">
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
}

export default App
