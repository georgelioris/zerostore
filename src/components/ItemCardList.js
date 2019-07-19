import React from "react";
import { Image } from "./Image";
import { Link } from "react-router-dom";

const ItemCard = ({ item, onItemClick }) => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card hoverable" key={item.id}>
        <div className="card-image ">
          <Image url={item.img} width={"300px"} height={"200px"} />
          <span
            className={`btn-floating halfway-fab waves-effect waves-light sidenav-trigger
          ${item.available === false ? " unavailable disabled" : ""}`}
            data-target="slide-out"
            onClick={onItemClick}
          >
            <span>
              <i className="material-icons">add</i>
            </span>
          </span>
        </div>

        <div className="card-content grey lighten-4">
          <span className="card-title">{item.title}</span>
          <p className="truncate">{item.desc}</p>
          <p className="right">
            <b>Price: {item.price}$</b>
          </p>
        </div>
        <div className="card-action glue-grey darken-4">
          <span
            className="waves-effect
            blue-grey lighten-3 white-text waves-light  btn-flat"
          >
            {item.category}
          </span>
          <a className="blue-grey-text right" href="!#">
            More
          </a>
        </div>
      </div>
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
