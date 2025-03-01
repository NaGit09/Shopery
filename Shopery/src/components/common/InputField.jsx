import React from "react";
import "../../styles/common/InputField.css";
import { CiCircleAlert } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";

const InputField = ({ variant, type, placeholder, style, subText }) => {

  function getIcon(variant) {
    switch (variant) {
      case "warning":
        return (
          <CiCircleAlert className="icon" style={{ color: `var(--warning)` }} />
        );
      case "danger":
        return (
          <CiWarning className="icon" style={{ color: `var(--danger)` }} />
        );
      case "success":
        return <FaCheck className="icon" style={{ color: `var(--primary)` }} />;
    }
  }

  return (
    <>
      <div className="input-container">
        <input
          className={variant}
          type={type}
          placeholder={placeholder}
          style={style}
        />
        {getIcon(variant)}
      </div>
      <label className="input-label" style={{ color: `var(--${variant})` }}>
        {subText}
      </label>
    </>
  );
};

export default InputField;
