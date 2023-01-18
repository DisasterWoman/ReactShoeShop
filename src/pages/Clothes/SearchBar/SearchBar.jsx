import React from "react";
import './SearchBar.scss'
const SearchBar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <img className="mr-5" src="/images/search.svg" alt="search"></img>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
