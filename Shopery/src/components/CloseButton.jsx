import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
const Close = styled.button`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: #fff;
  color: black;
  &:hover {
    color: white;
    background-color: var(--success);
  }
`;
const CloseButton = () => {
  return (
    <Close className="absolute_center shadow CloseButton">
      <CloseOutlined style={{ fontSize: 12.5 }} />
    </Close>
  );
};

export default CloseButton;
