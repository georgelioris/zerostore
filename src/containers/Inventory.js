import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import {
  itemChange,
  removeFromShop,
  addToShop,
  setTargetItem
} from "../actions/index";
import ItemCardList from "../components/ItemCardList";
import InventoryForms from "../components/InvenotryForms";
import SearchBar from "../components/SearchBar";
import M from "materialize-css";
import { sanitizeString, formatPropertyValue } from "../helpers";

const Inventory = ({ ...props }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  }, [props.items.length, props.filters]);

  const searchResults = useCallback(searchItems(props.items, props.filters), [
    props.filters
  ]).map(key => props.items[key]);

  return (
    <main>
      <div className="row container invenotry-itemlist">
        <h4>Inventory</h4>
        <SearchBar {...props} />
        <div className="col s9">
          <InventoryForms {...props} items={searchResults} />
        </div>
        <div className="col s3">
          {searchResults.length ? (
            <ItemCardList visibleItems={searchResults} />
          ) : (
            <div
              className="container"
              style={{ fontSize: "3em", color: "rgba(0, 0, 0, 0.09)" }}
            >
              No Match
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

const autoCompleteData = obj => {
  const itemsArray = Object.values(obj);
  return itemsArray.reduce(
    (acc, item) => ({
      ...acc,
      [item.title]: item.img,
      ["Category " + item.category]: null
    }),
    {}
  );
};

const searchItems = (itemsObj, filter) => {
  const items = Object.values(itemsObj);
  return filter.searchCategory
    ? items
        .filter(item =>
          item.category.toLowerCase().match(filter.searchCategory)
        )
        .map(i => i.id)
    : filter.searchItem
    ? items
        .filter(item => item.title.toLowerCase().match(filter.searchItem))
        .map(i => i.id)
    : items.map(i => i.id);
};

const mapStateToProps = state => ({
  items: state.items,
  filters: state.filters,
  searchBarData: autoCompleteData(state.items)
});

const mapDispatchToProps = dispatch => ({
  handleItemChange: (event, id) => {
    const e = event.target;
    const key = id;
    const properties = { [e.name]: formatPropertyValue(e.value) };
    dispatch(itemChange({ key, properties }));
  },
  handleRemoveFromShop: item => {
    dispatch(removeFromShop(item));
  },
  handleAddToShop: event => {
    const e = event.target;
    const newItem = Object.values(e).reduce(
      (acc, input) =>
        input.name
          ? { ...acc, [input.name]: formatPropertyValue(input.value) }
          : acc,
      {}
    );
    if (Object.values(newItem).filter(value => value !== "").length === 6) {
      dispatch(addToShop(newItem));
      document.getElementById("addItemForm").reset();
    }
  },
  handleSearch: event => {
    // Input get passed either from the search form as an event
    // or by onAutocomplete callback as a string
    const searchInput =
      typeof event === "object" ? event.target.search.value : event;
    const sanitizedInput = sanitizeString(searchInput);
    dispatch(setTargetItem(sanitizedInput));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
