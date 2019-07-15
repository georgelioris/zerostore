import React, { Component } from "react";
import { connect } from "react-redux";
import { itemChange, removeFromInventory, addToInv } from "../actions/index";
// import Icon from "@material-ui/core/Icon";

class Inventory extends Component {
  handleChange = (e, id) => {
    const key = id;
    const eventValue = e.target.value;
    const properties =
      eventValue === "true"
        ? { [e.target.id]: true }
        : eventValue === "false"
        ? { [e.target.id]: false }
        : { [e.target.id]: eventValue };
    this.props.itemChange({ key, properties });
  };
  handleRemove = item => {
    this.props.removeFromInventory(item);
  };
  handleInv = event => {
    event.preventDefault();
    const getAvail = this.available.value === "true" ? true : false;
    const item = {
      title: this.title.value,
      desc: this.desc.value,
      price: this.price.value,
      img: this.img.value,
      category: this.category.value,
      available: getAvail
    };
    this.props.addToInv(item);
    this.addItemForm.reset();
  };

  renderInventory() {
    return (
      <div className="row">
        {this.props.items.map(item => {
          return (
            <form
              className="col s12 inventory-item"
              key={item.id}
              ref={form => (this.form = form)}
              onChange={e => this.handleChange(e, item.id)}
            >
              <div className="row">
                <div className="input-field col s6">
                  <input
                    ref={input => (this.title = input)}
                    id="title"
                    type="text"
                    value={item.tile}
                    className="validate"
                    defaultValue={item.title}
                    placeholder="Item Title"
                  />
                </div>

                <div className="input-field col s4">
                  <input
                    ref={input => (this.img = input)}
                    id="img"
                    type="text"
                    className="validate"
                    defaultValue={item.img}
                    placeholder="Img url"
                  />
                </div>
                <div className="input-field col s2">
                  <input
                    ref={input => (this.price = input)}
                    id="price"
                    defaultValue={item.price}
                    type="number"
                    className="validate"
                    placeholder="$$"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    ref={input => (this.desc = input)}
                    id="desc"
                    type="text"
                    className="materialize-textarea"
                    defaultValue={item.desc}
                    placeholder="Item Description..."
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input
                    ref={input => (this.category = input)}
                    id="category"
                    type="text"
                    className="validate"
                    defaultValue={item.category}
                    placeholder="Category"
                  />
                </div>
                <div className="input-field col s6">
                  <select
                    className="browser-default"
                    ref={input => (this.available = input)}
                    id="available"
                    defaultValue={item.available}
                  >
                    <option value="true">Available</option>
                    <option value="false">Unavailable</option>
                  </select>
                </div>
              </div>
              <span
                className="waves-effect waves-light btn red"
                onClick={() => this.handleRemove(item)}
              >
                remove
              </span>
            </form>
          );
        })}
        <form
          className="col s12 inventory-item"
          ref={form => (this.addItemForm = form)}
          onSubmit={e => this.handleInv(e)}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                ref={input => (this.title = input)}
                type="text"
                className="validate"
                placeholder="Item Title"
              />
            </div>

            <div className="input-field col s4">
              <input
                ref={input => (this.img = input)}
                type="text"
                className="validate"
                placeholder="Img Url"
              />
            </div>
            <div className="input-field col s2">
              <input
                ref={input => (this.price = input)}
                type="number"
                className="validate"
                placeholder="$$"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                ref={input => (this.desc = input)}
                type="text"
                className="materialize-textarea"
                placeholder="Item Description..."
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                ref={input => (this.category = input)}
                type="text"
                className="validate"
              />
            </div>
            <div className="input-field col s6">
              <select
                ref={input => (this.available = input)}
                id="available"
                defaultValue="true"
              >
                <option value="true">Available</option>
                <option value="false">Unavalable</option>
              </select>
            </div>
          </div>
          <span className="add-button">
            <button className="waves-effect waves-light btn">Add Item</button>
          </span>
        </form>
      </div>
    );
  }
  render() {
    return <div className="container">{this.renderInventory()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    items: Object.values(state.items)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    itemChange: payload => {
      dispatch(itemChange(payload));
    },
    removeFromInventory: item => {
      dispatch(removeFromInventory(item));
    },
    addToInv: item => {
      dispatch(addToInv(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
