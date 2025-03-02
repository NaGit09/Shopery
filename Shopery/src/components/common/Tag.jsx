import React from "react";
import "../../styles/common/Tag.css";

const Tag = ({ value, variant, style, position = "top-left" }) => {
  return (
    <>
      <div className={`${variant} tagContainer ${position}`} style={style}>
          {value}
      </div>
    </>
  );
};

export default Tag;
