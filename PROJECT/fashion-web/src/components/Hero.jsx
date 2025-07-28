import React from "react";
import img from "../img/HeroImg.jpg";

const Hero = () => {
  return (
    <div className=" flex flex-col lg:flex-row items-center justify-between pb-5 px-5 lg:px-14 md:px-10 bg-secondary">
      <div className=" w-full lg:w-3/5 p-6 space-y-8 rounded-2xl bg-primary">
        <h1 className=" text-4xl font-bold leading-snug">
          Shop, Click,
          <span className=" italic font-light"> Smile! </span> - Your Ultimate
          Shopping Desination
        </h1>
        <p>
          Discover a seamless shopping experience where everything you need is
          just a click away. From the latest trends to everyday essentials, we
          bring you the best deals, top brands, and a hassle-free checkout.
        </p>
      </div>
      <div className=" w-full lg:w-2/6">
        <img className=" rounded-2xl" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Hero;