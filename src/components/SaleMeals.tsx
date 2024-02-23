import React from "react";
import { PlusIcon } from "@/svg/PlusIcon";
import { GreenArrow } from "@/svg/GreenArrow";

export const SaleMeals = () => {
  return (
    <>
      <div className="flex items-center justify-between px-[115px] py-4">
        <div className="flex gap-1 items-center">
          <div>
            <PlusIcon />
          </div>
          <div>
            <p className="text-[22px]"> Хямдралтай</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <p className="text-sm text-green-500">Бүгдийг харах</p>
          </div>
          <div>
            <GreenArrow />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </>
  );
};
