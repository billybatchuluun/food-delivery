import { PlusIcon } from "@/svg/PlusIcon";
import { GreenArrow } from "@/svg/GreenArrow";

const data = [
  {
    id: 13,
    foodName: "Cake",
    price: 9452,
    img: "./Img13.png",
    categoryName: "Soft Flooring and Base",
    discount: false,
  },
  {
    id: 14,
    foodName: "Oreo shake",
    price: 7529,
    img: "./Img14.png",
    categoryName: "HVAC",
    discount: false,
  },
  {
    id: 15,
    foodName: "Chocolate",
    price: 4157,
    img: "./Img15.png",
    categoryName: "Framing (Steel)",
    discount: false,
  },
  {
    id: 16,
    foodName: "Yoghurt",
    price: 5851,
    img: "./Img16.png",
    categoryName: "Asphalt Paving",
    discount: false,
  },
];
export const Card = (props) => {
  const { meal } = props;

  return (
    <div className="flex flex-col justify-evenly hover:text-xl">
      <div className="flex relative ">
        <img
          className=" w-[282px] h-[186px] rounded-2xl hover:shadow-2xl"
          src={meal.img}
        />
      </div>
      <div className="font-bold">{meal.foodName}</div>
      <div className="text-[#18BA51] text-xl">{meal.price}₮</div>
    </div>
  );
};
export const DesertMeal = () => {
  return (
    <>
      <div className="px-[115px]">
        <div className="flex items-center justify-between py-4">
          <div className="flex gap-1 items-center">
            <div>
              <PlusIcon />
            </div>
            <div>
              <p className="text-[22px] font-bold"> Амттан</p>
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
          <div className="flex">
            <div className="flex justify-between w-full gap-8">
              {data.map((meal) => (
                <Card meal={meal} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
