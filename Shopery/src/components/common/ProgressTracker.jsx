import React from "react";
import "../../styles/common/ProgressTracker.css";
const ProgressTracker = ({ varient, value, style, icon }) => {
  return (
    <div className={`${varient} progressContainer`} style={style}>
      {icon ? <span className="icon">{icon}</span> : value}
    </div>
  );
};
export default ProgressTracker;
