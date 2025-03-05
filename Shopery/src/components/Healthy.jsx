import React from "react";
import styled from "styled-components";
const Tag = styled.span`
color : #000;
background-Color : #F2F2F2;
&:hover {
color : #fff ;
background-color : var(--success);
}
`;

const Healthy = () => {
  return <Tag className="shadow rounded-pill px-3 py-1">Healthy</Tag>;
};

export default Healthy;
