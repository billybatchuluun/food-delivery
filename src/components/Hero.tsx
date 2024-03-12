import React from "react";
import { FastDelivery } from "./FastDelivery";
import { HeroMainPic } from "./HeroMainPic";
import { SaleMeals } from "./SaleMeals";
import { MainCourseMeal } from "./MainCourseMeal";
import { SaladCourseMeal } from "./SaladCoursMeal";
import { DesertMeal } from "./DesertMeal";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <div>
          <HeroMainPic />
        </div>
        <div className="flex justify-center">
          <FastDelivery />
        </div>
        <div className="flex justify-center">
          <SaleMeals />
        </div>
        <div className="flex justify-center">
          <MainCourseMeal />
        </div>
        <div className="flex justify-center">
          <SaladCourseMeal />
        </div>
        <div className="flex justify-center">
          <DesertMeal />
        </div>
      </div>
    </>
  );
};
