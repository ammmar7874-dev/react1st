import React from "react";
import Product from "../Products/Product";

const Woman = () => {
  let womanProducts = [
    {
      id: 1,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3dlkY3w5TWZ1WeOmLtzNIRjyAi6k7dZqEQ&s",
      name: "Womens car",

      price: 299,
      originalPrice: 499,
    },
    {
      id: 2,
      Image:
        "https://www.shutterstock.com/image-photo/happy-asian-woman-holding-smartphone-260nw-2175055125.jpg",
      name: "Womens mobile",

      price: 299,
      originalPrice: 499,
    },
    {
      id: 3,
      Image:
        "https://media.self.com/photos/61afee614d325624ff6c9fe3/4:3/w_2560%2Cc_limit/GettyImages-1150295390.jpg",
      name: "Womens Bike",

      price: 299,
      originalPrice: 499,
    },
  ];
  return (
    <>
      {womanProducts.map((products) => (
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

export default Woman;
