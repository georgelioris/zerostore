import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
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
import { sanitizeString } from "../helpers";

const Inventory = ({ ...props }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  }, [props.items, props.filters]);

  // Calls searchItems whenever filters change
  // or item is added/removed
  // Returns items that exist in store state
  const searchResults = useCallback(searchItems(props.items, props.filters), [
    props.filters,
    Object.keys(props.items)
  ]).map(key => props.items[key]);

  const renderedItems =
    props.filters.searchCategory || props.filters.searchItem
      ? searchResults
      : Object.values(props.items);

  return (
    <main>
      <div className="row container invenotry-itemlist">
        <h4>Inventory</h4>
        <SearchBar {...props} />
        <div className="col s9">
          <InventoryForms {...props} items={renderedItems} />
        </div>
        <div className="col s3">
          {renderedItems.length ? (
            <ItemCardList visibleItems={renderedItems} />
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

const autoCompleteData = itemsObj =>
  Object.values(itemsObj).reduce(
    (acc, item) => ({
      ...acc,
      [item.title]: item.img,
      ["Category " + item.category]: null
    }),
    {}
  );

// Returns the item ids that match search results
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
    : Object.keys(itemsObj);
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
    const properties = {
      [e.name]: typeof e.value === "string" ? e.value.trim() : e.value
    };
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
          ? {
              ...acc,
              [input.name]:
                typeof input.value === "string"
                  ? input.value.trim()
                  : input.value
            }
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
Inventory.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      desc: PropTypes.string,
      img: PropTypes.string,
      category: PropTypes.string,
      available: PropTypes.bool
    })
  ),
  filters: PropTypes.shape({
    categoryFilter: PropTypes.string,
    priceFilter: PropTypes.string,
    searchCategory: PropTypes.string,
    searchItem: PropTypes.string
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
