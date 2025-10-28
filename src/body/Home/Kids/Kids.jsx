import React from "react";
import Product from "../Products/Product";

const Kids = () => {
  let kidsProducts = [
    {
      id: 1,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GRkPFaiLbmC4uvsbLKjjfCd7zVfrbfVfWQ&s",
      name: "Kids car",

      price: 299,
      originalPrice: 499,
    },
    {
      id: 2,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZry_7aawS0qFaP_7OFAJNtT1MW4GAPhJWNg&s",
      name: "Kids mobile",

      price: 299,
      originalPrice: 499,
    },
    {
      id: 3,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBd0uDXbPEbHYxFdmB2TWf6ExinQcCwod4A&s",
      name: "kids Bike",

      price: 299,
      originalPrice: 499,
    },
  ];
  return (
    <>
      {kidsProducts.map((products) => (
        <Product
          id={products.id}
          Image={products.Image}
          name={products.name}
          price={products.price}
          originalPrice={products.originalPrice}
        />
      ))}
      ;
    </>
  );
};

export default Kids;
