import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ count }) => {
  return (
    <nav className="nav-wrapper red darken-4">
      <div className="container">
        <Link to="/" className="brand-logo">
          ZeroStore
        </Link>

        <ul className="right">
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Cart">
              My cart{" "}
              <span
                className="new badge white darken-3 black-text"
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

export default Navbar;
