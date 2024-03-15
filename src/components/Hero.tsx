import React, { useEffect, useState } from "react";
import { FastDelivery } from "./FastDelivery";
import { HeroMainPic } from "./HeroMainPic";
import { SaleMeals } from "./SaleMeals";
import { MainCourseMeal } from "./MainCourseMeal";
import { SaladCourseMeal } from "./SaladCoursMeal";
import { DesertMeal } from "./DesertMeal";
type Food = {
  _id: string;
  name: string;
  price: number;
  _v: number;
  category: string;
  isSale: { isSale: boolean; salePercent: number };
  img: string;
  ingredients: string;
  count: number;
};

export const Hero = ({ foodData }: { foodData: Food[] }) => {
  const [desert, setDesert] = useState<Food[]>([]);
  const [breakFast, setBreakFast] = useState<Food[]>([]);
  useEffect(() => {
    setDesert(
      foodData.filter((food) => {
        return food.category === "desert";
      })
    );
    setBreakFast(
      foodData.filter((food) => {
        return food.category === "breakfast";
      })
    );
  }, []);
  return (
    <>
      <div className="flex flex-col gap-20">
        <div>
          <HeroMainPic />
        </div>
        <div className="flex justify-center">
          <FastDelivery />
        </div>
        <div className="flex flex-wrap w-full h-fit p-16 gap-8 justify-center">
          {desert.map((food) => {
            return (
              <div className="text-black flex flex-col">
                <img src={food.img} className="w-48 h-48" />
                <p className="font-bold">{food.name}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap w-full h-fit p-16 gap-8 justify-center">
          {breakFast.map((food) => {
            return (
              <div className="text-black flex flex-col">
                <img src={food.img} className="w-48 h-48" />
                <p className="font-bold">{food.name}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="flex justify-center">
          <MainCourseMeal />
        </div>
        <div className="flex justify-center">
          <SaladCourseMeal />
        </div>
        <div className="flex justify-center">
          <DesertMeal />
        </div> */}
      </div>
    </>
  );
};
