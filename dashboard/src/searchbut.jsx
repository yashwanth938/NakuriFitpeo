import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input placeholder="search" />
    </div>
  );
};

export default SearchButton;
