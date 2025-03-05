import React from "react";
import Close from "../components/Close";
const CartProduct = ({ props }) => {
  return (
    <div className="card p-0 border border-0  border-bottom mb-2">
      <div className="row m-0" style={{ width: 376, maxHeight: 100 }}>
        <div className="col-md-4">
          <img src={props.src} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-7 absolute_center flex-row ms-4">
          <div className="card-body p-0" style={{ fontSize: 14 }}>
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              {props.quantity} X <span className="fw-bold">{props.price}</span>
            </p>
          </div>
          <Close />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
