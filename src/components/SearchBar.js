import React, { useEffect } from "react";
import PropTypes from "prop-types";
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
    <div className="input-field col s9">
      <form
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
          handleSearch(event);
        }}
      >
        <div className="search-wrapper">
          <i className="material-icons prefix">search</i>
          <input id="search" type="text" placeholder="All Items..." />
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchBarData: PropTypes.object,
  handleSearch: PropTypes.func
};

export default SearchBar;
