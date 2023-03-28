import React from "react";
import { BsArrowUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import WebGiViewer from "../Components/WebGiViewer";
const DisplayProduct = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div
      className="display-product h-3/5 w-full gap-5 flex flex-col justify-start items-center py-5
    ">
      <div className="display-items">Display</div>
      <button
        className="w-auto min-w-[5rem] px-2  h-10
         rounded-full border-white border-[1px]"
        onClick={() => {
          const element = document.querySelector(".web-gi");
          window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: "smooth",
          });
        }}>
        View Product
      </button>
      <button
        className="flex flex-col justify-center items-center"
        onClick={handleClick}>
        <BsArrowUp size={20} />
        Top
      </button>
      {/* <WebGiViewer /> */}
    </div>
  );
};

export default DisplayProduct;
