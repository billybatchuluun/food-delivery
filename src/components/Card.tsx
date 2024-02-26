import React from "react";

const data = [
  {
    id: 1,
    foodName: "Artichokes - Knobless, White",
    price: 3625,
    img: "./Img1.jpeg",
    categoryName: "Temp Fencing, Decorative Fencing and Gates",
    discount: true,
  },
  {
    id: 2,
    foodName: "Pastry - Lemon Danish - Mini",
    price: 5249,
    img: "./Img2.jpeg",
    categoryName: "Plumbing & Medical Gas",
    discount: true,
  },
  {
    id: 3,
    foodName: "Olives - Black, Pitted",
    price: 5979,
    img: "./Img3.png",
    categoryName: "Asphalt Paving",
    discount: true,
  },
  {
    id: 4,
    foodName: "Bread - Focaccia Quarter",
    price: 3126,
    img: "./Img4.png",
    categoryName: "Soft Flooring and Base",
    discount: true,
  },
  {
    id: 5,
    foodName: "Juice - Orangina",
    price: 3920,
    img: "./Img5.png",
    categoryName: "Exterior Signage",
    discount: false,
  },
  {
    id: 6,
    foodName: "Parsnip",
    price: 8351,
    img: "./Img6.png",
    categoryName: "Wall Protection",
    discount: false,
  },
  {
    id: 7,
    foodName: "Onion Powder",
    price: 7974,
    img: "./Img7.png",
    categoryName: "Roofing (Asphalt)",
    discount: false,
  },
  {
    id: 8,
    foodName: "Goat - Whole Cut",
    price: 6446,
    img: "./Img8.png",
    categoryName: "Drywall & Acoustical (MOB)",
    discount: false,
  },
  {
    id: 9,
    foodName: "Soup - Knorr, Ministrone",
    price: 9383,
    img: "./Img9.png",
    categoryName: "Marlite Panels (FED)",
    discount: false,
  },
  {
    id: 10,
    foodName: "Wine - Tribal Sauvignon",
    price: 6330,
    img: "./Img10.png",
    categoryName: "Painting & Vinyl Wall Covering",
    discount: false,
  },
  {
    id: 11,
    foodName: "Wine - Chenin Blanc K.w.v.",
    price: 4411,
    img: "./Img11.png",
    categoryName: "Electrical and Fire Alarm",
    discount: false,
  },
  {
    id: 12,
    foodName: "English Muffin",
    price: 9563,
    img: "./Img12.png",
    categoryName: "Sitework & Site Utilities",
    discount: false,
  },
  {
    id: 13,
    foodName: "Wine - Ice Wine",
    price: 9452,
    img: "./Img13.png",
    categoryName: "Soft Flooring and Base",
    discount: false,
  },
  {
    id: 14,
    foodName: "Wine - Delicato Merlot",
    price: 7529,
    img: "./Img14.png",
    categoryName: "HVAC",
    discount: false,
  },
  {
    id: 15,
    foodName: "Wine - Chateau Bonnet",
    price: 4157,
    img: "./Img15.png",
    categoryName: "Framing (Steel)",
    discount: false,
  },
  {
    id: 16,
    foodName: "Cinnamon Rolls",
    price: 5851,
    img: "./Img16.png",
    categoryName: "Asphalt Paving",
    discount: false,
  },
];

export const Card = (props) => {
  const { meal } = props;
  return (
    <div className="flex flex-col">
      <div className="flex relative ">
        <img
          className=" w-[282px] h-[186px] rounded-2xl hover:shadow-2xl"
          src={meal.img}
        />
        {meal.discount === true ? (
          <span className="flex bg-[#18BA51] items-center w-[69px] h-[35px] rounded-2xl px-4 py-1 border-white border absolute top-4 right-4 text-white">
            20%
          </span>
        ) : null}
      </div>
      <div className="font-bold">{meal.foodName}</div>
      <div className="text-[#18BA51] text-xl">{meal.price}₮</div>
    </div>
  );
};
