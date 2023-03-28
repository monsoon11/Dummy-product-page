import React from "react";
import WebGiViewer from "./WebGiViewer";

const Jumbotron = () => {
  const handleLearnMore = () => {
    const element = document.querySelector(".mid-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="jumbotron flex flex-col justify-start items-center w-full h-screen gap-y-5 py-10">
        <div className="flex flex-col items-center gap-4  w-3/6 text-[20px]">
          <h2>New Product Alert</h2>
          <span className="text-[27px] h-10 font-bold"> Fast and Faster</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            porro libero ex natus, tempora vel sit aspernatur maxime corporis
            alias vero impedit quasi eum necessitatibus dicta ratione iste
            labore ipsa.
          </span>
          <span className="flex flex-row gap-5 ">
            <button className="w-auto min-w-[5rem] h-10 px-2 border-[1px] border-white rounded-full bg-white text-black">
              Buy
            </button>
            <button
              className="w-auto min-w-[5rem] px-2  h-10 "
              onClick={handleLearnMore}>
              Learn More
            </button>
          </span>
        </div>
        <WebGiViewer />
      </section>
    </>
  );
};

export default Jumbotron;
