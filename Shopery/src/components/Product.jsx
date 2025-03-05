import React from "react";
import mango from "../assets/imgs/mango.png";
import Price from "./Price";
import WishList from "./WishList";
import View from "./View";
import Cart from "./Cart";
import { StarFilled } from "@ant-design/icons";
const Product = () => {
  const star = Array.from({ length: 5 }, (_, index) => (
    <StarFilled key={index} />
  ));
  return (
    <div className="card mb-3 p-0 w-auto Product">
      <div className="row g-0">
        <div className="col-md-5">
          <img src={mango} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-7">
          <div className="card-body " style={{width : 200}}>
            <h5 className="card-title fs-6">Indo Mango</h5>
            <div className="Product_default absolute_center">
              <Price price={14.99} />
              <div className="text-warning gap-1 fs-6 d-flex mt-1">{star}</div>
            </div>
            <div className="Product_hover ">
              <Cart />
              <View />
              <WishList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
