import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import "../styles/CloseButton.css"
const CloseButton = () => {
  return (
    <button className="absolute_center shadow CloseButton">
      <CloseOutlined style={{ fontSize: 12.5 }} />
    </button>
  );
};

export default CloseButton;
