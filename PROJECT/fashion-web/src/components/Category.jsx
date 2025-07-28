import React from "react";
import CategoryCards from "../layouts/CategoryCards";
import { BsBox2HeartFill } from "react-icons/bs";
import { PiEyeglassesFill } from "react-icons/pi";
import { FaMobile } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";

const Category = () => {
  return (
    <div className=" px-5 lg:px-14 md:px-10 py-10">
      <h1 className=" font-bold text-3xl">Shop By Category</h1>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 py-5">
        <CategoryCards iconImg={<BsBox2HeartFill size={28} />} title="All Products" />
        <CategoryCards iconImg={<PiEyeglassesFill size={28} />} title="Fashion"  />
        <CategoryCards iconImg={<FaMobile size={28} />} title="Electronics" />
        <CategoryCards iconImg={<FaBagShopping size={28} />} title="Daily Needs" />
        <CategoryCards iconImg={<IoFastFood size={28} />} title="Snacks" />
      </div>
    </div>
  );
};

export default Category;