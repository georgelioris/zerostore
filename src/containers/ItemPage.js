import React, { useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css";

const ItemPage = ({ item }) => {
  useEffect(() => {
    M.AutoInit();
  }, [item]);
  return (
    <div className="item-page container">
      <div className="row">
        <div className="col s12">
          <h4>{item.title}</h4>
        </div>
      </div>
      <div class="card white" style={{ width: "100%" }}>
        <div class="card-content  white lighten-4 black-text">
          <div className="row">
            <div className="card-image col l5 s12 m12">
              <img
                src={item.img}
                style={{ width: "100%", height: "auto" }}
                alt={item.title}
                className="materialboxed"
              />
              <span
                className={`btn-floating halfway-fab right btn-large waves-effect waves-light red accent-2 sidenav-trigger ${
                  item.available === false ? "unavailable disabled" : ""
                }`}
                data-target="slide-out"
                onClick={item.onItemClick}
              >
                <span>
                  <i className="material-icons">add</i>
                </span>
              </span>
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
    item: state.items[id]
  };
};

export default connect(mapStateToProps)(ItemPage);
