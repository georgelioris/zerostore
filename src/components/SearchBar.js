import React, { useEffect } from "react";
import M from "materialize-css";

const SearchBar = ({ searchBarData, handleSearch }) => {
  useEffect(() => {
    const searchBar = document.getElementById("search");
    M.Autocomplete.init(searchBar, {
      data: searchBarData,
      onAutocomplete: event => handleSearch(event),
      sortFunction: (a, b) => {
        return a < b ? -1 : a > b ? 1 : 0;
      }
    });
  });
  return (
    <div className="input-field col s4">
      <form
        autoComplete="off"
        onChange={event => {
          event.preventDefault();
          handleSearch(event);
        }}
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <div className="search-wrapper">
          <i className="material-icons prefix">search</i>
          <input id="search" type="text" placeholder="Search..." />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
