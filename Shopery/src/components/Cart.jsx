import React, { useState } from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CartPopup from "./CartPopup";

const CartButton = styled(({ isActive, ...rest }) => <button {...rest} />)`
  width: fit-content;
  height: 40px;
  background-color: ${(props) => (props.isActive ? "var(--success)" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--successDark);
    color: #fff;
  }
`;

const Cart = ({content}) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div>
      <CartButton
        className="absolute_center position-relative"
        isActive={isClick}
        onClick={() => setIsClick(!isClick)}
      >
        {`${content && content} `}
        <ShoppingOutlined style={{ fontSize: 15 }} />
      </CartButton>
      <CartPopup isActive={isClick} />
    </div>
  );
};

export default Cart;
