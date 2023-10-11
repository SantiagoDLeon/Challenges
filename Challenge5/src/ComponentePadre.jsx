import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const ComponentePadre = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    setCategories((list) => [...list, category]);
  };

  return (
    <div>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category, key) => (
        <GifGrid category={category} key={key} />
      ))}
    </div>
  );
};

export default ComponentePadre;

