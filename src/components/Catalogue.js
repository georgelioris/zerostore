import { React } from "react";
export const Catalogue = props => {
  return (
    <div className="box">
      <div className="card" key={props.item.id}>
        <div className="card-image">
          <img src={props.item.img} alt={props.item.title} />
          <span className="card-title">{props.item.title}</span>
          <span
            to="/"
            className="btn-floating halfway-fab waves-effect waves-light red"
            onClick={() => this.handleClick(props.item)}
          >
            <i className="material-icons">add</i>
          </span>
        </div>

        <div className="card-content">
          <p>{props.item.desc}</p>
          <p>
            <b>Price: {props.item.price}$</b>
          </p>
        </div>
      </div>
    </div>
  );
};
