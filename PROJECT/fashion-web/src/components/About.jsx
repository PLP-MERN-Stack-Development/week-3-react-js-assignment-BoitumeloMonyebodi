import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row sm:justify-start items-center px-5 bg-[url('src/img/about.jpg')] bg-no-repeat bg-cover">
      <div className="w-full lg:w-2/4 p-6 space-y-8 rounded-2xl border-2 border-secondary">
        <h1 className="text-4xl font-bold leading-snug">
          Fashion with Soul, Inspired by You
        </h1>
        <p>
          At Boitumelo, we celebrate individuality and culture through style. 
          Our collections are more than trends—they’re reflections of confidence, 
          heritage, and the power of self-expression. Whether you shine in bold prints 
          or flow in quiet elegance, you’ll find something that feels like home.
        </p>
      </div>
    </div>
  );
};

export default About;