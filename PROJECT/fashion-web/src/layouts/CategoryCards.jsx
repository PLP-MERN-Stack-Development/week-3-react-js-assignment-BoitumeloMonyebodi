import React from "react";

const CategoryCards = ({ iconImg, title }) => {
  return (
    <div className=" flex flex-col gap-5 p-5 rounded-xl bg-primary hover:border-[1px] hover:bg-white border-primary transition duration-300 ease-in-out cursor-pointer">
      <span>{iconImg}</span>
      <span className=" text-xl md:text-2xl">{title}</span>
    </div>
  );
};

export default CategoryCards;