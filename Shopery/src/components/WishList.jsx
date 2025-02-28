import React, { useState } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import "../styles/WishList.css";
const WishList = () => {
  const [isFill, setIsFill] = useState(false);
  return (
    <button
      onClick={() => setIsFill(!isFill)}
      className={`WishList shadow absolute_center rounded-circle ${
        isFill ? "WishList-active" : "WishList"
      }`}
    >
      {isFill ? <HeartFilled /> : <HeartOutlined />}
    </button>
  );
};

export default WishList;
