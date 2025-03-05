import React, { useState } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import styled from "styled-components";
const WishListButton = styled(({ isActive, ...rest }) => <button {...rest} />)`
  width: 40px;
  height: 40px;
  background-color: white;
  color: ${(props) => (props.isActive ? "var(--success)" : "#000")};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: var(--success);
    color: #fff;
  }
`;
<<<<<<< HEAD
const WishList = () => {
=======
const WishList = ({shadow="none-shadow"}) => {
>>>>>>> a00f229 (feature : update component)
  const [isFill, setIsFill] = useState(false);
  return (
    <WishListButton
      isActive={isFill}
      onClick={() => setIsFill(!isFill)}
<<<<<<< HEAD
      className={` shadow absolute_center rounded-circle`}
=======
      className={`${shadow} border absolute_center rounded-circle`}
>>>>>>> a00f229 (feature : update component)
    >
      {isFill ? <HeartFilled /> : <HeartOutlined />}
    </WishListButton>
  );
};

export default WishList;
