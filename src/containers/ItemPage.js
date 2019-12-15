import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SideCart from "../components/SideCart";
import { connect } from "react-redux";
import { FloatingButton } from "../components/FloatingButton";
import { incQuant, addToCart, removeFromCart } from "../actions";
import M from "materialize-css";

const ItemPage = ({ ...props }) => {
  useEffect(() => {
    M.AutoInit();
    const sideCart = document.getElementById("slide-out");
    M.Sidenav.init(sideCart, { edge: "right" });
  }, []);

  return (
    <main>
      <SideCart {...props} />
      <div className="container">
        <SingleItem {...props} />
      </div>
    </main>
  );
};

const SingleItem = ({ item, handleItemClick, cartObject }) => {
  return (
    <div className="item-page container">
      <div className="row">
        <div className="col s12">
          <h4>{item.title}</h4>
        </div>
      </div>
      <div className="card white" style={{ width: "100%" }}>
        <div className="card-content  white lighten-4 black-text">
          <div className="row">
            <div className="card-image col l5 s12 m12">
              <img
                src={item.img}
                style={{ width: "100%", height: "auto" }}
                alt={item.title}
                className="materialboxed"
              />
              <FloatingButton
                {...item}
                onItemClick={() => handleItemClick(item, cartObject)}
              />
            </div>

            <div className="col l7 s12 m12">
              <span className="card-title">
                <b>{`Price: ${item.price} $`}</b>
              </span>
              <p className="flow-text" style={{ fontSize: "1.2em" }}>
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, routeProps) => {
  const { match } = routeProps;
  const id = match.params.id;
  return {
    item: state.items[id],
    items: state.items,
    cartItems: Object.values(state.cartItems),
    cartObject: state.cartItems
  };
};

const mapDispatchToProps = dispatch => ({
  handleItemClick: (item, cartObject) => {
    const itemInCart = cartObject[item.id];
    return itemInCart
      ? dispatch(incQuant(itemInCart))
      : dispatch(addToCart(item));
  },
  removeFromCart: cartItem => {
    dispatch(removeFromCart(cartItem));
  }
});

SingleItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    available: PropTypes.bool
  }),
  handleItemClick: PropTypes.func,
  cartObject: PropTypes.objectOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage);
