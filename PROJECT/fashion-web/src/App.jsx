import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Products from "./components/Products";
import Offers from "./components/Offers";
import Other from "./components/Other";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Category/>
      <Products/>
      <Offers/>
      <Other/>
      <About/>
      <Footer/>
    </>
  );
};

export default App;
