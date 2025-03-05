import React from "react";
import BigApple from "../assets/imgs/BigApple.png";
import Tag from "./Tag";
import View from "./View";
import WishList from "./WishList";
import { ShoppingOutlined, StarFilled } from "@ant-design/icons";
import Price from "./Price";
const BigProduct = () => {
  const now = new Date();
  const formattedTime = `${String(now.getHours()).padStart(
    2,
    "0"
  )}   :   ${String(now.getMinutes()).padStart(2, "0")}    :   ${String(
    now.getSeconds()
  ).padStart(2, "0")}`;

  return (
    <div className="position-relative ">
      <div className="card p-1 BigProduct" style={{ width: "20rem" }}>
        <img src={BigApple} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="button-group d-flex flex-col justify-content-around gap-1">
            <View />
            <button className="AddToCart rounded-pill p-0">
              {"Add to Cart  "}
              <ShoppingOutlined />
            </button>
            <WishList />
          </div>
          <h5
            className="card-title mt-1"
            style={{ color: "var(--successDark)" }}
          >
            Chinese cabbage
          </h5>
          <Price price={12} sale={20} />
          <p className="feedBack">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <span className="feedBackNumber ms-2">567(Feedback)</span>
          </p>
          <div>
            <p> Hurry up! Offer ends in :</p>
            <p>{`01 ${formattedTime}`}</p>
            <p style={{ fontSize: 12, wordSpacing: 5 }}>Days Hour Min Sec</p>
          </div>
        </div>
        <div className="d-flex flex-col gap-2 position-absolute top-0 start-0 mt-2 ms-2">
          <Tag type={"best"} content={"best sale"} />
          <Tag type={"sale"} precent={"50%"} content={"sale"} />
        </div>
      </div>
    </div>
  );
};

export default BigProduct;
