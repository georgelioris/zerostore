import React from "react";
import { Image } from "./Image";
import { Link } from "react-router-dom";

const ItemCard = ({ ...item }) => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card" key={item.id}>
        <div className="card-image ">
          <Image url={item.img} width={"300px"} height={"200px"} />
          <span
            className={`btn-floating halfway-fab waves-effect waves-light red accent-2 sidenav-trigger ${
              item.available === false ? " unavailable disabled" : ""
            }`}
            data-target="slide-out"
            onClick={item.onItemClick}
          >
            <span>
              <i className="material-icons">add</i>
            </span>
          </span>
        </div>

        <div className="card-content">
          <span className="card-title">{item.title}</span>
          <p className="truncate">{item.desc}</p>
          <p>
            <b>Price: {item.price}$</b>
          </p>
        </div>
        <div className="card-action grey lighten-4">
          {item.category ? (
            <button
              onClick={item.onCategoryClick}
              className="waves-effect
            red accent-1 white-text waves-light  btn-flat"
            >
              {item.category}
            </button>
          ) : (
            ""
          )}
          <Link className="red-text" to={`/items/${item.title}-${item.id}`}>
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
}) => {
  const itemCardList = visibleItems.map(item => (
    <ItemCard
      key={item.id}
      {...item}
      onItemClick={() => handleItemClick(item, cartItems)}
      onCategoryClick={() => setCategoryFilter(item.category)}
    />
  ));
  return (
    <div>
      <div className="item-card-list">{itemCardList}</div>
    </div>
  );
};

export default ItemCardList;
