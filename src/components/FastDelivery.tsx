import React from "react";
import { FastDIcon1 } from "@/svg/FastDIcon1";
import { FastDIcon2 } from "@/svg/FastDIcon2";
import { FastDIcon3 } from "@/svg/FastDIcon3";

export const FastDelivery = () => {
  return (
    <>
      <div className="flex mt-[50px] mb-[50px]  gap-10">
        <div className="flex flex-col w-[265px]  p-4 rounded-xl border-black-100 border gap-4 shadow-2xl hover:bg-gray-100 cursor-pointer">
          <div>
            <FastDIcon1 />
          </div>
          <div>
            <p className="text-[18px]">Хүргэлтийн төлөв хянах</p>
            <p className="text-[14px]">Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
        <div className="flex flex-col w-[265px] p-4 rounded-xl border-black-100 border gap-4 shadow-2xl hover:bg-gray-100 cursor-pointer">
          <div>
            <FastDIcon2 />
          </div>
          <div>
            <p className="text-[18px]">Шуурхай хүргэлт</p>
            <p className="text-[14px]">Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
        <div className="flex flex-col w-[265px] p-4 rounded-xl border-black-100 border gap-4 shadow-2xl hover:bg-gray-100 cursor-pointer">
          <div>
            <FastDIcon3 />
          </div>
          <div>
            <p className="text-[18px]">Эрүүл, баталгаат орц</p>
            <p className="text-[14px]">Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
        <div className="flex flex-col w-[265px] p-4 rounded-xl border-black-100 border gap-4 shadow-2xl hover:bg-gray-100 cursor-pointer">
          <div>
            <FastDIcon1 />
          </div>
          <div>
            <p className="text-[18px]">Хоолны өргөн сонголт</p>
            <p className="text-[14px]">Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
      </div>
    </>
  );
};
