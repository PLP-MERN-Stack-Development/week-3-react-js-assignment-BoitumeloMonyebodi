import React from "react";

const ProductCards = ({ img, title, price, brand }) => {
  return (
    <div>
      <div>
        <img src={img} alt="img" />
      </div>
      <div className=" flex justify-between py-2">
        <span className=" font-semibold text-sm">{title}</span>
        <span>{price}</span>
      </div>
      <span>{brand}</span>
    </div>
  );
};

export default ProductCards;