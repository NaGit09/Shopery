import React from "react";
import { EyeFilled } from "@ant-design/icons";
import styled from "styled-components";
const ViewButton = styled.button`
  width: 40px;
  height: 40px;
  color: black;
  background-color: white;

  &:hover {
    background-color: var(--success);
    color: white;
  }
`;

<<<<<<< HEAD
const View = () => {
  return (
    <ViewButton className="View absolute_center shadow rounded-circle">
=======
const View = ({ shadow = "none-shadow" }) => {
  return (
    <ViewButton
      className={`View absolute_center border
      rounded-circle ${shadow}`}
    >
>>>>>>> a00f229 (feature : update component)
      <EyeFilled />
    </ViewButton>
  );
};

export default View;
