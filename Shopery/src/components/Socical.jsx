import React from "react";
import "../styles/Socical.css"
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
const Socical = ({ brand }) => {
  return (
    <button
      className="Socical absolute_center"
    >
      {getIcon(brand)}
    </button>
  );
};

export default Socical;
