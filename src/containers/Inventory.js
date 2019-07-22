import React, { useEffect } from "react";
import { connect } from "react-redux";
import { itemChange, removeFromShop, addToShop } from "../actions/index";
import ItemCardList from "../components/ItemCardList";
import InventoryForms from "../components/InvenotryForms";
import M from "materialize-css";

const Inventory = ({ ...props }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  }, [props.items.length]);

  return (
    <main>
      <div className="row container invenotry-itemlist">
        <div className="col s9">
          <h4>Inventory</h4>
          <InventoryForms {...props} />
        </div>
        <div className="col s3">
          <ItemCardList visibleItems={props.items} />
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  items: Object.values(state.items)
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
