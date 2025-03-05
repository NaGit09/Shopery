import React from "react";
function getTagType(type) {
  switch (type) {
    case "sale":
      return "#EA4B48";
    case "new":
      return "#FF8A00" ;
    case "best":
      return "#2388FF" ;
    case "stock":
      return "#1A1A1A";
    default:
      break;
  }
}
const Tag = ({ type, precent, content }) => {
  return (
    <p
      className="w-auto fs-6 p-1 absolute_center text-light rounded position-absolute"
      style={{
        backgroundColor : getTagType(type),
        top: 10,
        left: 10,
      }}
    >
      {content && content} {precent && precent}%
    </p>
  );
};

export default Tag;
