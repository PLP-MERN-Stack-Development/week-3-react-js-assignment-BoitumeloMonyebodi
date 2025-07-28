import React from "react";
import OtherCards from "../layouts/OtherCards";
import img1 from "../img/otherProd1.jpg";
import img2 from "../img/otherProd2.png";
import img3 from "../img/otherProd3.png";
import img4 from "../img/otherProd4.jpg";

const Other = () => {
  return (
    <div className=" min-h-[80vh] px-5 pt-12 py-5 lg:px-14 md:px-10">
      <h1 className=" font-bold text-3xl">Other Product Categories</h1>

      <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 py-5">
        <OtherCards img={img1} title="Electonics" />
        <OtherCards img={img2} title="Shoes" />
        <OtherCards img={img3} title="Daily Needs" />
        <OtherCards img={img4} title="Bags" />
      </div>
    </div>
  );
};

export default Other;