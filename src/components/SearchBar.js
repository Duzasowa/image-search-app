import React from "react";
import { useState } from "react";
import "../style/SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormClick = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handlerChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormClick}>
        <label>Enter Search term</label>
        <input value={term} onChange={handlerChange} />
      </form>
    </div>
  );
};

export default SearchBar;
