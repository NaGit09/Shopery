import React, { useState } from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import styled from "styled-components";

const CartButton = styled(({ isActive, ...rest }) => <button {...rest} />)`
  width: 40px;
  height : 40px;
  background-color: ${(props) =>
    props.isActive ? "var(--success)" : "#fff"};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--successDark);
    color: #fff;
  }
`;

const Cart = ({ content }) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div>
      <CartButton
        className="absolute_center position-relative border rounded-circle"
        isActive={isClick}
        onClick={() => setIsClick(!isClick)}
      >
        {content && content}
        <ShoppingOutlined style={{ fontSize: 12 }} />
      </CartButton>
    </div>
  );
};
export default Cart;
