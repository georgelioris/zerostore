import React from "react";

const unavailClassName = item => {
  return item.available === false ? "unavailable disabled" : "";
};

const Item = ({ item, onItemClick }) => (
  <div className="card" key={item.id}>
    <div className="card-image">
      <img src={item.img} alt={item.title} />
      <span className="card-title">{item.title}</span>
      <span
        className={
          "btn-floating halfway-fab waves-effect waves-light red " +
          unavailClassName(item)
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

const ItemList = ({ items, onClick }) => (
  <div>
    <div className="itemList">
      {items.map(item => (
        <Item key={item.id} item={item} onItemClick={() => onClick(item)} />
      ))}
    </div>
  </div>
);

export default ItemList;
