import React from "react";

const Item = ({ item, onItemClick }) => (
  <div className="card hoverable" key={item.id}>
    <div className="card-image">
      <img src={item.img} alt={item.title} className="responsive-img" />
      <span className="card-title">{item.title}</span>
      <span
        className={
          "btn-floating halfway-fab waves-effect waves-light red" +
          (item.available === false ? " unavailable disabled" : "")
        }
        onClick={onItemClick}
      >
        <span>
          <i className="material-icons">add</i>
        </span>
      </span>
    </div>

    <div className="card-content">
      <p>{item.desc}</p>
      <p>
        <b>Price: {item.price}$</b>
      </p>
    </div>
  </div>
);

const ItemList = ({ items, handleItemClick, cartItems }) => (
  <div>
    <div className="item-list">
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          onItemClick={() => handleItemClick(item, cartItems)}
        />
      ))}
    </div>
  </div>
);

export default ItemList;
