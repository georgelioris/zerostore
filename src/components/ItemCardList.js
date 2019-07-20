import React from "react";
import { Image } from "./Image";
import { Link } from "react-router-dom";

const ItemCard = ({ item, onItemClick, onCategoryClick }) => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card hoverable" key={item.id}>
        <div className="card-image ">
          <Image url={item.img} width={"300px"} height={"200px"} />
          <button
            className={`btn-floating halfway-fab waves-effect waves-light red accent-2 sidenav-trigger ${
              item.available === false ? "unavailable disabled" : ""
            }`}
            data-target="slide-out"
            onClick={onItemClick}
          >
            <i className="material-icons">add</i>
          </button>
        </div>

        <div className="card-content">
          <span className="card-title">{item.title}</span>
          <p className="truncate">{item.desc}</p>
          <p>
            <b>Price: {item.price}$</b>
          </p>
        </div>
        <div className="card-action grey lighten-4">
          <button
            onClick={onCategoryClick}
            className="waves-effect
            red accent-1 white-text waves-light  btn-flat"
          >
            {item.category}
          </button>
          <Link className="red-text" to="/">
            More
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const ItemCardList = ({
  visibleItems,
  handleItemClick,
  cartItems,
  setCategoryFilter
}) => (
  <div>
    <div className="item-card-list">
      {visibleItems.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onItemClick={() => handleItemClick(item, cartItems)}
          onCategoryClick={() => setCategoryFilter(item.category)}
        />
      ))}
    </div>
  </div>
);

export default ItemCardList;
