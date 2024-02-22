import React from "react";

export const Desktop = () => {
  return (
    <>
      <div className=" flex bg-[#18BA51] text-white bg-[url('/BgPic.png')]">
        <div className="flex w-1/2 justify-center items-center">
          <div className="flex  flex-col w-[384px] mt-[276px] ">
            <div className="py-5">
              <p className="text-[55px]">
                Pinecone <br /> Food delivery
              </p>
            </div>
            <hr></hr>
            <div className="py-5">
              <p className="text-[22px]">
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-[170px]">
          <div className="w-[443px] h-[438px] relative">
            <img src="./image 13.png" alt="" />
            <div className="w-[313px] h-[313px] absolute bottom-0 -right-40">
              <img src="./image 14.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
