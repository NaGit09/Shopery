import React from "react";
function getTagType(type) {
  switch (type) {
    case "sale":
<<<<<<< HEAD
      return { backgroundColor: "#EA4B48" };
    case "new":
      return { backgroundColor: "#FF8A00" };
    case "best":
      return { backgroundColor: "#2388FF" };
    case "stock":
      return { backgroundColor: "#1A1A1A" };
=======
      return "#EA4B48";
    case "new":
      return "#FF8A00" ;
    case "best":
      return "#2388FF" ;
    case "stock":
      return "#1A1A1A";
>>>>>>> a00f229 (feature : update component)
    default:
      break;
  }
}
const Tag = ({ type, precent, content }) => {
  return (
    <p
<<<<<<< HEAD
      className="p-1 absolute_center text-light rounded"
      style={{ ...getTagType(type), width : "fit-content", fontSize: 14 }}
    >
      {content && content} {precent && precent}
=======
      className="w-auto fs-6 p-1 absolute_center text-light rounded position-absolute"
      style={{
        backgroundColor : getTagType(type),
        top: 10,
        left: 10,
      }}
    >
      {content && content} {precent && precent}%
>>>>>>> a00f229 (feature : update component)
    </p>
  );
};

export default Tag;
