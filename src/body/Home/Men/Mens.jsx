import React from "react";
import Product from "../Products/Product";

const Mens = () => {
  let menProducts = [
    {
      id: 1,
      Image:
        "https://hips.hearstapps.com/hmg-prod/images/jaguar-car-gift-1504049123.jpg",
      name: "car",

      price: 299,
      originalPrice: 499,
    },
    {
      id: 2,
      Image:
        "https://www.shutterstock.com/image-photo/friendly-young-indian-man-glasses-260nw-2410143543.jpg",
      name: "mobile",

      price: 299,
      originalPrice: 499,
    },
    {
      id: 3,
      Image:
        "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-storefront/default/dw0e3260e7/category-landing/ebikes/seo-city-men.jpg?sw=513&sh=513&sm=cut&sfrm=jpg&q=80",
      name: "kBike",

      price: 299,
      originalPrice: 499,
    },
  ];
  return (
    <>
      {menProducts.map((products) => (
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

export default Mens;
