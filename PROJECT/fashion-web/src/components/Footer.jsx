import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-14 md:px-10 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Boitumelo</h1>
          <p className="text-sm">
            Step into a world where fashion meets soul. Be part of a growing
            movement that celebrates individuality, culture, and timeless style.
            Sign up for updates, offers, and inspiration—crafted with you in mind.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Offerings</h1>
          <nav className="flex flex-col gap-2">
            <a href="/">Signature Collections</a>
            <a href="/">Personal Styling</a>
            <a href="/">Gifting Made Easy</a>
            <a href="/">Style Journal</a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Our Journey</h1>
          <nav className="flex flex-col gap-2">
            <a href="/">About Boitumelo</a>
            <a href="/">Join the Team</a>
            <a href="/">Terms & Values</a>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Get in Touch</h1>
          <nav className="flex flex-col gap-2">
            <a href="/">
              123 Ubuntu Way, Suite 456 Johannesburg, GP 2000 South Africa
            </a>
            <a href="/">+27 68 036 4820</a>
            <a href="/">happinessboitumelo101@gmail.com</a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          &copy; Crafted with love by
          <span className="text-secondary"> Boitumelo Monyebodi </span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;