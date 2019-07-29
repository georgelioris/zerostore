import React, { useEffect } from "react";
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

const Inventory = ({ ...props }) => {
  console.log(props.searchBarData);
  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  }, [props.items.length, props.filters]);

  return (
    <main>
      <div className="row container invenotry-itemlist">
        <h4>Inventory</h4>
        <SearchBar {...props} />
        <div className="col s9">
          <InventoryForms {...props} />
        </div>
        <div className="col s3">
          <ItemCardList visibleItems={props.items} />
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
      [item.category + " Category"]: null
    }),
    {}
  );
};

const searchItems = (itemsObj, filter) => {
  const items = Object.values(itemsObj);
  const searchTarget = filter && filter.split(" Category")[0];
  const filterResult = filter
    ? filter.match("Category")
      ? items.filter(item => item.category === searchTarget)
      : items.filter(item => item.title === searchTarget)
    : items;

  return filterResult;
};

const mapStateToProps = state => ({
  items: searchItems(state.items, state.filters.targetItem),
  filters: state.filters,
  searchBarData: autoCompleteData(state.items)
});

const mapDispatchToProps = dispatch => ({
  handleItemChange: (event, name) => {
    const e = event.target;
    const key = name;
    const eventValue = e.value.trim();
    const properties =
      eventValue === "true"
        ? { [e.name]: true }
        : eventValue === "false"
        ? { [e.name]: false }
        : { [e.name]: eventValue };
    dispatch(itemChange({ key, properties }));
  },
  handleRemoveFromShop: item => {
    dispatch(removeFromShop(item));
  },
  handleAddToShop: event => {
    const e = event.target;
    const getAvail = e.available.value === "true" ? true : false;
    const newItem = {
      title: e.title.value.trim(),
      desc: e.desc.value.trim(),
      price: e.price.value.trim(),
      img: e.img.value.trim(),
      category: e.category.value.trim(),
      available: getAvail
    };
    ///Check if all fields are filled
    if (Object.values(newItem).filter(value => value !== "").length === 6) {
      dispatch(addToShop(newItem));
      document.getElementById("addItemForm").reset();
    }
  },
  handleSearch: event => {
    const targetItem = event.target ? event.target.search.value : event;
    dispatch(setTargetItem(targetItem));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
