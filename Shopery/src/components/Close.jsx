import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
const CloseButton = styled.button`
margin-left : 20px;
  width: 22px;
  height: 22px;
  border: 2px solid #ccc;
  font-size: 8px;
  border-radius: 50%;
  background-color: white;
  color: #666;
  &:hover {
    color: #000;
    border: 2px solid #000;
  }
`;
const Close = () => {
  return (
    <CloseButton className="btn_close absolute_center">
      <CloseOutlined />
    </CloseButton>
  );
};

export default Close;
