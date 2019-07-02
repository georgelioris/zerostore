import React, { Component } from "react";
import { connect } from "react-redux";
import { itemChange, removeFromInventory, addToInv } from "../actions/index";
// import Icon from "@material-ui/core/Icon";

class Inventory extends Component {
  handleChange = (e, id) => {
    const key = id;
    const properties = { [e.target.id]: e.target.value };
    this.props.itemChange({ key, properties });
  };
  handleRemove = item => {
    this.props.removeFromInventory(item);
  };
  handleInv = event => {
    event.preventDefault();
    const item = {
      id: Number(this.id.value),
      title: this.title.value,
      price: this.price.value,
      desc: this.desc.value,
      img: this.img.value
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
                  />
                  <label htmlFor="title">Item Title</label>
                </div>
                <div className="input-field col s1">
                  <input
                    ref={input => (this.id = input)}
                    id="id"
                    type="number"
                    className="validate"
                    defaultValue={item.id}
                  />
                  <label htmlFor="id">ID</label>
                </div>
                <div className="input-field col s3">
                  <input
                    ref={input => (this.img = input)}
                    id="img"
                    type="text"
                    className="validate"
                    defaultValue={item.img}
                  />
                  <label htmlFor="img">Image Url</label>
                </div>
                <div className="input-field col s2">
                  <input
                    ref={input => (this.price = input)}
                    id="price"
                    defaultValue={item.price}
                    type="number"
                    className="validate"
                  />
                  <label htmlFor="price">Price</label>
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
                  />
                  <label htmlFor="desc">Description</label>
                </div>
              </div>
              <button
                className="waves-effect waves-light btn red"
                onClick={() => this.handleRemove(item)}
              >
                remove
              </button>
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
              <label htmlFor="title">Item Title</label>
            </div>
            <div className="input-field col s1">
              <input
                ref={input => (this.id = input)}
                id="id"
                type="number"
                className="validate"
                placeholder="ID"
              />
              <label htmlFor="id">ID</label>
            </div>
            <div className="input-field col s3">
              <input
                ref={input => (this.img = input)}
                type="text"
                className="validate"
                placeholder="Img Url"
              />
              <label htmlFor="img">Image Url</label>
            </div>
            <div className="input-field col s2">
              <input
                ref={input => (this.price = input)}
                type="number"
                className="validate"
                placeholder="$$"
              />
              <label htmlFor="price">Price</label>
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
              <label htmlFor="desc">Description</label>
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
