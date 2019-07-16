import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Navbar = ({ count }) => {
  return (
    <nav className="nav-wrapper red darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">
          Shopping
        </Link>

        <ul className="right">
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Cart">
              My cart{" "}
              <span
                className="new badge orange lighten-1 "
                data-badge-caption=""
              >
                {count}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    count: state.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  };
};

export default connect(mapStateToProps)(Navbar);
