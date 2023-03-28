import React from "react";

const MidSection = () => {
  return (
    <div className="mid-section flex flex-col justify-center items-start h-screen w-full bg-white text-black px-10">
      <div>Mid Section </div>
      <span>Feel the vibe</span>
      <span className="flex flex-row gap-5 ">
        <button className="w-auto min-w-[5rem] h-10 px-2 border-[1px] border-black rounded-full bg-white text-black hover:bg-green-400">
          Buy
        </button>
        <button className="w-auto min-w-[5rem] px-2  h-10 ">Learn More</button>
      </span>
    </div>
  );
};

export default MidSection;
