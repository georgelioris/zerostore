import React, { Component } from "react";
import { connect } from "react-redux";
import { itemChange } from "../actions/index";

class Inventory extends Component {
  handleChange = e => {
    e.preventDefault();
    console.log("changed", e.target.value, this);
  };

  renderInventory() {
    return (
      <div className="row">
        {this.props.items.map(item => {
          return (
            <form
              className="col s12"
              key={item.id}
              onSubmit={this.handleChange}
            >
              <div className="row">
                <div className="input-field col s6">
                  <input
                    ref={input => (this.title = input)}
                    id="item_title"
                    type="text"
                    className="validate"
                    defaultValue={item.title}
                  />
                  <label htmlFor="item_title">Item Title</label>
                </div>
                <div className="input-field col s1">
                  <input
                    ref={input => (this.id = input)}
                    id="item_id"
                    type="number"
                    className="validate"
                    defaultValue={item.id}
                  />
                  <label htmlFor="item_id">Item Id</label>
                </div>
                <div className="input-field col s3">
                  <input
                    ref={input => (this.img = input)}
                    id="image_url"
                    type="text"
                    className="validate"
                    defaultValue={item.img}
                  />
                  <label htmlFor="image_url">Image Url</label>
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
                    id="description"
                    type="text"
                    className="materialize-textarea"
                    defaultValue={item.desc}
                  />
                  <label htmlFor="description">Description</label>
                </div>
              </div>
              <div className="row" />
              <input
                type="submit"
                className="waves-effect waves-light btn-small red right"
                value="submit"
              />
            </form>
          );
        })}
      </div>
    );
  }
  render() {
    return <div className="container">{this.renderInventory()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    cartItems: state.cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    itemChange: item => {
      dispatch(itemChange(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
