import React from "react";

const Hero = () => {
  return (
    <header
      className="w-full flex
    justify-center items-center flex-col"
    >
      <nav
        className="flex 
    items-center mb-10 pt-3"
      >
       
        <button
          type="button"
          onClick={() => window.open("https://github.com/L1nkzel")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="green_gradient"> OpenAI API Tool</span>
      </h1>
      <h2 className="desc">
        Summarize your articles using this open-source article summarization
        tool to save time and extract key insights efficiently.
      </h2>
    </header>
  );
};

export default Hero;
