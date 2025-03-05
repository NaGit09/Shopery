import React from "react";
const Price = ({ price, sale, type }) => {
  const size = type === "big" ? 24 : 16;
  return (
<<<<<<< HEAD
    <p className="fw-bold" style={{ fontSize: size }}>
=======
    <p className="fw-bold m-0" style={{ fontSize: size }}>
>>>>>>> a00f229 (feature : update component)
      ${parseFloat(price).toFixed(2)}{" "}
      <span className="text-decoration-line-through" style={{ color: "#999" }}>
        {sale && `$ ${parseFloat(sale).toFixed(2)}`}
      </span>
    </p>
  );
};

export default Price;
