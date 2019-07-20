import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ count }) => {
  return (
    <header>
      <nav className="nav-wrapper red darken-2 white-text">
        <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </Link>
        <div className="container">
          <Link to="/" className="brand-logo">
            ZeroStore
          </Link>

          <ul className="right right hide-on-med-and-down">
            <li>
              <NavLink to="/Shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/Cart" activeClassName="active">
                My cart{" "}
                <span
                  className="new badge white darken-3 black-text"
                  data-badge-caption=""
                >
                  {count}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Inventory">Inventory</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/Shop" className="sidenav-close">
            Zerostore
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <NavLink
            to="/Shop"
            className="sidenav-close"
            activeStyle={{ fontWeight: "bold" }}
          >
            <i className="material-icons small">store</i>Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Cart"
            className="sidenav-close"
            activeStyle={{ fontWeight: "bold" }}
          >
            <i className="material-icons small">local_grocery_store</i>Cart
            <span className="new badge red darken-2" data-badge-caption="">
              {count}
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Inventory" className="sidenav-close">
            <i className="material-icons small">build</i>Inventory
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
