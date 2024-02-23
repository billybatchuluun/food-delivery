import React from "react";

export const CategoryContainer = () => {
  return (
    <>
      <div className="flex gap-[26px] justify-evenly px-[120px]">
        <button className="flex p-5 border-black border w-[280px] h-10 rounded-lg justify-center items-center">
          Breakfast
        </button>
        <button className="flex p-5 border-black border w-[280px] h-10 rounded-lg justify-center items-center">
          Soup
        </button>
        <button className="flex p-5 border-black border w-[280px] h-10 rounded-lg justify-center items-center">
          Main Course
        </button>
        <button className="flex p-5 border-black border w-[280px] h-10 rounded-lg justify-center items-center">
          Desert
        </button>
      </div>
    </>
  );
};
