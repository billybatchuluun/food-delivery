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
        <div>
          <FastDelivery />
        </div>
        <div>
          <SaleMeals />
        </div>
        <div>
          <MainCourseMeal />
        </div>
        <div>
          <SaladCourseMeal />
        </div>
        <div>
          <DesertMeal />
        </div>
      </div>
    </>
  );
};
