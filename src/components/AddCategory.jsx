import React, { useState } from "react";

//style
import "./style.scss";

import logo from "../assets/logo.svg";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Pucnh");

  const onInputChange = ({ target }) => setInputValue(target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={(event) => onInputChange(event)}
        />
      </form>
    </>
  );
};

export { AddCategory };