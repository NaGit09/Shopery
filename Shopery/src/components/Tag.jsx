import React from "react";
function getTagType(type) {
  switch (type) {
    case "sale":
      return { backgroundColor: "#EA4B48" };
    case "new":
      return { backgroundColor: "#FF8A00" };
    case "best":
      return { backgroundColor: "#2388FF" };
    case "stock":
      return { backgroundColor: "#1A1A1A" };
    default:
      break;
  }
}
const Tag = ({ type, precent, content }) => {
  return (
    <p
      className="p-1 absolute_center text-light rounded"
      style={{ ...getTagType(type), width : "fit-content", fontSize: 14 }}
    >
      {content && content} {precent && precent}
    </p>
  );
};

export default Tag;
