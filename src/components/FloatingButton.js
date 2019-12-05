import React from "react";

export const FloatingButton = ({ ...item }) => (
  <div
    className={`btn-floating halfway-fab waves-effect waves-light red accent-2 ${
      !item.available ? "unavailable disabled" : ""
    } ${item.onItemClick ? "sidenav-trigger" : "disabled"}`}
    data-target="slide-out"
    onClick={item.onItemClick}
  >
    <span>
      <i className="material-icons">add</i>
    </span>
  </div>
);
