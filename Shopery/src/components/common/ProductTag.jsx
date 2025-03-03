import React from "react";
import "../../styles/common/ProductTag.css";

const ProductTag = ({ value, variant, style, position = "top-left" }) => {
  return (
    <>
      <div className={`${variant} tagContainer ${position}`} style={style}>
          {value}
      </div>
    </>
  );
};

export default ProductTag;
