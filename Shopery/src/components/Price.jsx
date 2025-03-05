import React from "react";
const Price = ({ price, sale, type }) => {
  const size = type === "big" ? 24 : 16;
  return (
    <p className="fw-bold" style={{ fontSize: size }}>
      ${parseFloat(price).toFixed(2)}{" "}
      <span className="text-decoration-line-through" style={{ color: "#999" }}>
        {sale && `$ ${parseFloat(sale).toFixed(2)}`}
      </span>
    </p>
  );
};

export default Price;
