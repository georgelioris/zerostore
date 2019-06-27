import React, { Component } from "react";
import { connect } from "react-redux";
import { itemChange } from "../actions/index";

class Inventory extends Component {
  handleChange = (e, id) => {
    const key = id;
    const properties = { [e.target.id]: e.target.value };
    this.props.itemChange({ key, properties });
  };

  renderInventory() {
    return (
      <div className="row">
        {this.props.items.map(item => {
          return (
            <form
              className="col s12"
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
                  <label htmlFor="id">Item Id</label>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
