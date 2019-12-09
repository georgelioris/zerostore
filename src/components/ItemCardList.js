import React from "react";
import { Image } from "./Image";
import { Link } from "react-router-dom";
import { FloatingButton } from "./FloatingButton";

const ItemCard = ({ ...item }) => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card" key={item.id}>
        <div className="card-image">
          <Image url={item.img} width={"300px"} height={"200px"} />
          <FloatingButton {...item} />
        </div>

        <div className="card-content">
          <span className="card-title">{item.title}</span>
          <p className="truncate">{item.desc}</p>
          <p>
            <b>Price: {item.price}$</b>
          </p>
        </div>
        <div className="card-action grey lighten-4">
          {item.category && (
            <button
              onClick={item.onCategoryClick}
              className="waves-effect
            red accent-1 white-text waves-light  btn-flat"
            >
              {item.category}
            </button>
          )}
          <Link className="red-text" to={`/shop/items/${item.id}`}>
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
  cartObject,
  setCategoryFilter
}) => {
  const itemCardList = visibleItems.map(item => (
    <ItemCard
      key={item.id}
      {...item}
      onItemClick={
        handleItemClick ? () => handleItemClick(item, cartObject) : null
      }
      onCategoryClick={
        handleItemClick ? () => setCategoryFilter(item.category) : null
      }
    />
  ));
  return (
    <div>
      <div className="item-card-list">{itemCardList}</div>
    </div>
  );
};

export default ItemCardList;
