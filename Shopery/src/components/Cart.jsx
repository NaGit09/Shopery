import React, { useState } from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import "../styles/Cart.css";
const Cart = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <button
      onClick={() => setIsClick(!isClick)}
      className={`absolute_center ${
        isClick ? "Cart-active" : ""
      } Cart shadow rounded-circle`}
    >
      <ShoppingOutlined style={{ fontSize: 15 }} />
    </button>
  );
};

export default Cart;
