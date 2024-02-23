import React from "react";
import { FastDelivery } from "./FastDelivery";
import { HeroMainPic } from "./HeroMainPic";
import { SaleMeals } from "./SaleMeals";

export const Hero = () => {
  return (
    <>
      <div>
        <div>
          <HeroMainPic />
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
