import React from "react";

const Inventory = ({
  items,
  handleItemChange,
  handleAddToShop,
  handleRemoveFromShop
}) => {
  return (
    <div className="row">
      {items.map(item => {
        return (
          <form
            className="col s12 inventory-item"
            key={item.id}
            onChange={event => handleItemChange(event, item.id)}
          >
            <div className="row">
              <div className="input-field col s6">
                <input
                  id={"title-" + item.id}
                  name="title"
                  type="text"
                  value={item.tile}
                  defaultValue={item.title}
                  placeholder="Item Title"
                />
                <label htmlFor={"title-" + item.id}>Title</label>
              </div>

              <div className="input-field col s4">
                <input
                  id={"img-" + item.id}
                  name="img"
                  type="text"
                  defaultValue={item.img}
                  placeholder="Img url"
                />
                <label htmlFor={"img-" + item.id}>Img Url</label>
              </div>
              <div className="input-field col s2">
                <input
                  id={"price-" + item.id}
                  name="price"
                  defaultValue={item.price}
                  type="number"
                  placeholder="$$"
                />
                <label htmlFor={"price-" + item.id}>Price</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id={"desc-" + item.id}
                  name="desc"
                  type="text"
                  className="materialize-textarea"
                  defaultValue={item.desc}
                  placeholder="Item Description..."
                ></textarea>
                <label htmlFor={"desc-" + item.id}>Description</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id={"cagegory-" + item.id}
                  name="category"
                  type="text"
                  defaultValue={item.category}
                  placeholder="Category"
                />
                <label htmlFor={"Category" + item.id}>Category</label>
              </div>
              <div className="input-field col s6">
                <select name="available" defaultValue={item.available}>
                  <option value="true">Available</option>
                  <option value="false">Unavailable</option>
                </select>
              </div>
            </div>
            <span
              className="waves-effect waves-light btn red"
              onClick={() => handleRemoveFromShop(item)}
            >
              remove
            </span>
          </form>
        );
      })}
      <form
        className="col s12 inventory-item"
        id="addItemForm"
        onSubmit={event => {
          event.preventDefault();
          handleAddToShop(event);
        }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input name="title" id="title" type="text" />
            <label htmlFor="title">Title</label>
          </div>

          <div className="input-field col s4">
            <input name="img" id="img" type="text" />

            <label htmlFor="img">Img Url</label>
          </div>
          <div className="input-field col s2">
            <input name="price" id="price" type="number" />
            <label htmlFor="price">Price</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              name="desc"
              id="desc"
              type="text"
              className="materialize-textarea"
            />
            <label htmlFor="desc">Description</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input name="category" id="category" type="text" />
            <label htmlFor="category">Category</label>
          </div>
          <div className="input-field col s6">
            <select name="available" defaultValue="true">
              <option value="true">Available</option>
              <option value="false">Unavalable</option>
            </select>
          </div>
          <span className="add-button">
            <button className="waves-effect waves-light blue darken-2 btn">
              Add Item
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Inventory;