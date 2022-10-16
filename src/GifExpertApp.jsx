import React, { useState } from "react";

//components
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["lucas", "ivan"]);

  function onAddCategory(newCategory) {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // console.log(newCategory);
  }

  return (
    <>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};

export { GifExpertApp };
