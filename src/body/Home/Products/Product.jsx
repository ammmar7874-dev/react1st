import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="card">
      <img src={props.Image} className="product-img" />
      <h2 className="productname">{props.name}</h2>
      <div className="price-section">
        <span className="price">${props.price}</span>
        <del className="originalprice">${props.originalPrice}</del>
      </div>
    </div>
  );
};

export default Product;
