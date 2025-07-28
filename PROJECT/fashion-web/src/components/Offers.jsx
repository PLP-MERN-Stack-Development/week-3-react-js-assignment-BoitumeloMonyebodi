import React from "react";
import img from "../img/offerImg2.png";

const Offers = () => {
  return (
    <div className=" flex py-5 lg:py-0 lg:pt-5 px-5 lg:px-14 md:px-10 bg-secondary">
      <div className=" hidden lg:flex w-11/12">
        <img src={img} alt="img" />
      </div>
      <div className=" flex flex-col justify-center space-y-4">
        <h4 className=" font-semibold text-lg">Limited time offers</h4>
        <h1 className=" font-bold text-5xl leading-tight">
          25% of All Fashion Favorites - Limited Time!
        </h1>
        <p>
          Exclusive Offer Alert! Get 25% OFF on all fashion favorites for a
          limited time only! Upgrade your wardrobe with the latest trends,
          stylish outfits, and must-have accessories at unbeatable prices.
        </p>
        <button className=" border-black border-[1.5px] px-2 py-1 mt-2 rounded-lg w-32 hover:bg-black hover:text-secondary transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Offers;