import React from 'react'
import ProductCards from '../layouts/ProductCards'
import img1 from "../img/prod2.jpg";
import img2 from "../img/prod3.jpg";
import img3 from "../img/prod4.jpg";
import img4 from "../img/prod5.jpg";

const Products = () => {
  return (
    <div className=' min-h-screen py-5 px-5 lg:px-14 md:px-10'>
        <h1 className=' font-bold text-3xl'>Featured Products In Fashion</h1>

        <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 py-5'>
            <ProductCards img={img1} title="Nike Air Fleece Hoodie" price="$3,999" brand="Nike"/>
            <ProductCards img={img2} title="Zara Ribbed Crop Top" price="$1,799" brand="Zara"/>
            <ProductCards img={img3} title="H&M Oversized Tees" price="$2,499" brand="H&M"/>
            <ProductCards img={img4} title="Kids Soft Bucket Hat" price="$999" brand="GAP Kids"/>
        </div>

        <div className=' flex justify-center'>
            <button className='border-black border-[1.5px] px-2 py-1 mt-2 rounded-lg hover:bg-black hover:text-secondary transition duration-300 ease-in-out'>View All Products</button>
        </div>
    </div>
  )
}

export default Products