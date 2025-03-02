import React from "react";
import orange from "../assets/imgs/orangeIndian.png";
import apple from "../assets/imgs/apple.png";
import CartProduct from "./CartProduct";
import Button from "./Button";

const CartPopup = ({isActive}) => {
  const data = [
    { id: 1, name: "Orange Indian", quantity: 1, price: 19.99, src: orange },
    { id: 2, name: "Green apple", quantity: 2, price: 20.56, src: apple },
  ];
  const style = {
    width: 376,
    height: 45,
    fontSize: 14,
    margin: "5px 12px",
  };
  const item =
    data === null
      ? "is not data"
      : data.map((item) => <CartProduct key={item.id} props={item} />);
  return (
    
    <div className="absolute_center shadow p-1 rounded position-absolute z-3" style={{display : `${isActive ? "block" : "none"}`}}>
      {data !== null ? item : "Is not item"}
      <div
        className="d-flex justify-content-between p-2 border border-0 border-bottom mb-2"
        style={{ width: 376 }}
      >
        <span>{ data && data.length} product</span>
        <span className="fw-bold">
          $ { data && data.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        </span>
      </div>
      <Button variant={"btnFill"} content={"Checkout"} style={style} />
      <Button variant={"btnGhost"} content={"Go to cart"} style={style} />
    </div>
  );
};

export default CartPopup;
