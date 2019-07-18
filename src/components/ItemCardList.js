import React from "react";

const ItemCard = ({ item, onItemClick }) => (
  <div className="card hoverable" key={item.id}>
    <div className="card-image">
      <img src={item.img} alt={item.title} className="responsive-img" />
      <span className="card-title">{item.title}</span>
      <span
        className={
          "btn-floating halfway-fab waves-effect waves-light red sidenav-trigger" +
          (item.available === false ? " unavailable disabled" : "")
        }
        data-target="slide-out"
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

const ItemCardList = ({ visibleItems, handleItemClick, cartItems }) => (
  <div>
    <div className="item-card-list">
      {visibleItems.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onItemClick={() => handleItemClick(item, cartItems)}
        />
      ))}
    </div>
  </div>
);

export default ItemCardList;
