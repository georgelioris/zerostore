import React, { useEffect } from "react";
import M from "materialize-css";

const SearchBar = ({ searchBarData, handleSearch }) => {
  useEffect(() => {
    const searchBar = document.getElementById("search");
    M.Autocomplete.init(searchBar, {
      data: searchBarData,
      onAutocomplete: event => handleSearch(event)
    });
  });
  return (
    <div className="input-field col s4">
      <form
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
          handleSearch(event);
        }}
      >
        <input id="search" type="text" placeholder="Search..." />
        <i className="material-icons prefix">search</i>
      </form>
    </div>
  );
};

export default SearchBar;
