import React from "react";
import styled from "styled-components";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  LinkOutlined,
} from "@ant-design/icons";
function getIcon(type) {
  switch (type) {
    case "twitter":
      return <TwitterOutlined />;
    case "facebook":
      return <FacebookOutlined />;
    case "instagram":
      return <InstagramOutlined />;
    case "mail":
      return <MailOutlined />;
    case "link":
      return <LinkOutlined />;
    default:
      break;
  }
}
const SocicalButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 18px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  &:hover {
    color: white;
    background-color: var(--success);
  }
`;
const Socical = ({ brand }) => {
  return (
    <SocicalButton className="Socical absolute_center">
      {getIcon(brand)}
    </SocicalButton>
  );
};

export default Socical;
