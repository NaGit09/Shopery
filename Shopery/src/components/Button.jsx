import React from "react";
import "../styles/Button.css";
const Button = ({ variant, content , style}) => {
  return (
    <button
      style={style}
      className={`${variant} absolute_center rounded-pill`}
    >
      {content}
    </button>
  );
};

export default Button;
