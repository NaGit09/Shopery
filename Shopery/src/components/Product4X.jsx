import React from "react";
import Cart from "./Cart";
import Price from "./Price";
import Tag from './Tag';
import View from './View';
import WishList from './WishList';
import { StarFilled } from "@ant-design/icons";
import "../styles/Product4x.css"
const Product4X = ({ src, price, sale, feedback =0, name , coupon }) => {
  const star = Array.from({ length: feedback }, (_, index) => (
    <StarFilled key={index} />
  ));
  
  return (
    <div className="card p-0 position-relative Product4X" style={{ width: 264, height: 327 }}>
      <img src={src} className="card-img-top p-4" alt="..." />
      <div className="p-2 mx-2 card-body d-flex align-items-center justify-content-between flex-row">
        <div className="w100 text-start">
          <h5 className="fs-6 fw-normal m-1">{name} </h5>
          <Price price={price} sale={sale} />
          <div className="text-warning gap-1 d-flex mt-1">{star}</div>
        </div>
        <Cart />
      </div>
      <div className="position-absolute end-0 me-3 mt-3 option">
        <View/>
        <WishList/>
      </div>
      <Tag type={coupon.type} content={coupon.type} precent={coupon.percent}/>
    </div>
  );
};

export default Product4X;
