import React, { useState } from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import styled from "styled-components";
<<<<<<< HEAD
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

=======

const CartButton = styled(({ isActive, ...rest }) => <button {...rest} />)`
  width: 40px;
  height : 40px;
  background-color: ${(props) =>
    props.isActive ? "var(--success)" : "#fff"};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
>>>>>>> a00f229 (feature : update component)
  &:hover {
    background-color: var(--successDark);
    color: #fff;
  }
`;

<<<<<<< HEAD
const Cart = ({content}) => {
=======
const Cart = ({ content }) => {
>>>>>>> a00f229 (feature : update component)
  const [isClick, setIsClick] = useState(false);
  return (
    <div>
      <CartButton
<<<<<<< HEAD
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

=======
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
>>>>>>> a00f229 (feature : update component)
export default Cart;
