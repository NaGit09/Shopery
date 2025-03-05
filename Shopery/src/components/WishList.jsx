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
const WishList = () => {
  const [isFill, setIsFill] = useState(false);
  return (
    <WishListButton
      isActive={isFill}
      onClick={() => setIsFill(!isFill)}
      className={` shadow absolute_center rounded-circle`}
    >
      {isFill ? <HeartFilled /> : <HeartOutlined />}
    </WishListButton>
  );
};

export default WishList;
