import React, { Component } from "react";
import { connect } from "react-redux";
import { itemChange, removeFromInventory } from "../actions/index";
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
                <div className="input-field col s4">
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
              <span
                className="waves-effect waves-light btn red"
                onClick={() => this.handleRemove(item)}
              >
                remove
              </span>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
