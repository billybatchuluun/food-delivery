import React from "react";
import { FastDelivery } from "./FastDelivery";
import { DesktopMainPic } from "./DesktopMainPic";
import { SaleMeals } from "./SaleMeals";

export const Desktop = () => {
  return (
    <>
      <div>
        <div>
          <DesktopMainPic />
        </div>
        <div>
          <FastDelivery />
        </div>
        <div>
          <SaleMeals />
        </div>
      </div>
    </>
  );
};
