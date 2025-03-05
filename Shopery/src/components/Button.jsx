import React from "react";
import "../styles/Button.css";
<<<<<<< HEAD
function getSize (type) {
  switch (type) {
      case "small" : return {width :94 , height : 36}
      case "medium" : return {width :117 , height : 45}
      case "large" : return {width :141 , height : 51}
  }
}
=======
>>>>>>> a00f229 (feature : update component)
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
