import React from "react";

import styled from "styled-components";
const ProgressTracker = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--success);
  background-color: #fff;
  border: 2px dotted var(--success);
  padding : 12px;
  font-size : 16px;
  &:hover {
    border: none;
    color: #fff;
    background-color: var(--success);
  }
`;
const Progress = () => {
  return <ProgressTracker >03 </ProgressTracker>;
};

export default Progress;
