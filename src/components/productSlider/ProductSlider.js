// ProductSlider.js
"use client"
import React, { useRef } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
const ProductSlider = ({ items }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="relative container md:px-4 px-0 mx-auto">
      <div
        ref={scrollContainerRef}
        className="scroll-container  productOverflow   overflow-x-auto whitespace-nowrap"
      >
        {items}
      </div>

     <div className=" md:block hidden">
     <button
        className="arrow arrow-left absolute -left-4  flex  pr-1  justify-center  items-center  top-28 rounded-full  hover:bg-[#161C28] bg-[#F97316] w-14 h-14"
        onClick={scrollLeft}
      >
        <LiaAngleLeftSolid size={25}  color="white" />
      </button>
      <button
        className="arrow arrow-right absolute -right-4  flex justify-center pl-1 items-center  top-28 rounded-full  hover:bg-[#161C28] bg-[#F97316] w-14 h-14"
        onClick={scrollRight}
      >
           <LiaAngleRightSolid  size={25}  color="white" />
      </button>
     </div>
    </div>
  );
};

export default ProductSlider;
