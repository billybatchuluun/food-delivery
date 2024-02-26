import React from "react";
import { PlusIcon } from "@/svg/PlusIcon";
import { GreenArrow } from "@/svg/GreenArrow";
const data = [
  {
    id: 1,
    foodName: "Artichokes - Knobless, White",
    price: 3625,
    img: "./Img1.jpeg",
    categoryName: "Temp Fencing, Decorative Fencing and Gates",
  },
  {
    id: 2,
    foodName: "Pastry - Lemon Danish - Mini",
    price: 5249,
    img: "./Img2.jpeg",
    categoryName: "Plumbing & Medical Gas",
  },
  {
    id: 3,
    foodName: "Olives - Black, Pitted",
    price: 5979,
    img: "./Img3.png",
    categoryName: "Asphalt Paving",
  },
  {
    id: 4,
    foodName: "Bread - Focaccia Quarter",
    price: 3126,
    img: "./Img4.png",
    categoryName: "Soft Flooring and Base",
  },
  {
    id: 5,
    foodName: "Juice - Orangina",
    price: 3920,
    img: "./Img5.png",
    categoryName: "Exterior Signage",
  },
  {
    id: 6,
    foodName: "Parsnip",
    price: 8351,
    img: "./Img6.png",
    categoryName: "Wall Protection",
  },
  {
    id: 7,
    foodName: "Onion Powder",
    price: 7974,
    img: "./Img7.png",
    categoryName: "Roofing (Asphalt)",
  },
  {
    id: 8,
    foodName: "Goat - Whole Cut",
    price: 6446,
    img: "./Img8.png",
    categoryName: "Drywall & Acoustical (MOB)",
  },
  {
    id: 9,
    foodName: "Soup - Knorr, Ministrone",
    price: 9383,
    img: "./Img9.png",
    categoryName: "Marlite Panels (FED)",
  },
  {
    id: 10,
    foodName: "Wine - Tribal Sauvignon",
    price: 6330,
    img: "./Img10.png",
    categoryName: "Painting & Vinyl Wall Covering",
  },
  {
    id: 11,
    foodName: "Wine - Chenin Blanc K.w.v.",
    price: 4411,
    img: "./Img11.png",
    categoryName: "Electrical and Fire Alarm",
  },
  {
    id: 12,
    foodName: "English Muffin",
    price: 9563,
    img: "./Img12.png",
    categoryName: "Sitework & Site Utilities",
  },
  {
    id: 13,
    foodName: "Wine - Ice Wine",
    price: 9452,
    img: "./Img13.png",
    categoryName: "Soft Flooring and Base",
  },
  {
    id: 14,
    foodName: "Wine - Delicato Merlot",
    price: 7529,
    img: "./Img14.png",
    categoryName: "HVAC",
  },
  {
    id: 15,
    foodName: "Wine - Chateau Bonnet",
    price: 4157,
    img: "./Img15.png",
    categoryName: "Framing (Steel)",
  },
  {
    id: 16,
    foodName: "Cinnamon Rolls",
    price: 5851,
    img: "./Img16.png",
    categoryName: "Asphalt Paving",
  },
];

export const Card = (props) => {
  const { meal } = props;

  return (
    <>
      <img className="w-[282px] h-[182px] rounded-md" src={meal.img}></img>
      {meal.foodName},{meal.price}
    </>
  );
};

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
        <div className="flex ">
          <div className="flex relative">
            {data.map((meal) => (
              <Card meal={meal} />
            ))}
          </div>
          <div className="flex bg-[#18BA51] items-center w-[69px] h-[35px] rounded-2xl px-4 py-1 border-white border absolute top-2 right-2">
            <p className="text-lg text-white">20%</p>
          </div>
        </div>
      </div>
    </>
  );
};
