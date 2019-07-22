import React from "react";

export const FloatingButton = ({ ...item }) => (
  <span
    className={`btn-floating halfway-fab waves-effect waves-light red accent-2 ${
      !item.available ? " unavailable disabled" : ""
    } ${item.onItemClick ? "sidenav-trigger" : "disabled"} ${item.classNames ||
      ""}`}
    data-target="slide-out"
    onClick={item.onItemClick}
  >
    <span>
      <i className="material-icons">add</i>
    </span>
  </span>
);
