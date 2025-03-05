import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ArrowBtn = styled.button`
background-color : #fff ;
color : #000;
  &:hover {
    background-color: var(--success);
    color: white;
    border : none;
  }
`;
const Arrow = () => {
  return (
    <ArrowBtn className=" w-25 shadow absolute_center rounded-circle">
      {" "}
      <ArrowRightOutlined />
    </ArrowBtn>
  );
};

export default Arrow;
