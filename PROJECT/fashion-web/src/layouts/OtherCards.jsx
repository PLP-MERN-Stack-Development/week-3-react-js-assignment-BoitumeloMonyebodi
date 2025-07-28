import React from "react";

const OtherCards = ({ img, title }) => {
  return (
    <div className=" hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
      <div>
        <img src={img} alt="img" />
      </div>
      <div className=" flex justify-between border-[1.2px] border-black p-5">
        <span className=" font-bold text-lg">{title}</span>
        <button className=" border-black border-[0.9px] px-2 py-1 rounded-2xl hover:bg-black hover:text-secondary transition duration-300 ease-linear">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default OtherCards;