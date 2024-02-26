import { PlusIcon } from "@/svg/PlusIcon";
import { GreenArrow } from "@/svg/GreenArrow";

const data = [
  {
    id: 9,
    foodName: "Чихэрлэг Тахиа",
    price: 9383,
    img: "./Img9.png",
    categoryName: "Marlite Panels (FED)",
    discount: false,
  },
  {
    id: 10,
    foodName: "Lunch",
    price: 6330,
    img: "./Img10.png",
    categoryName: "Painting & Vinyl Wall Covering",
    discount: false,
  },
  {
    id: 11,
    foodName: "Сэндвич",
    price: 4411,
    img: "./Img11.png",
    categoryName: "Electrical and Fire Alarm",
    discount: false,
  },
  {
    id: 12,
    foodName: "Apple Pie",
    price: 9563,
    img: "./Img12.png",
    categoryName: "Sitework & Site Utilities",
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
export const SaladCourseMeal = () => {
  return (
    <>
      <div className="px-[115px]">
        <div className="flex items-center justify-between py-4">
          <div className="flex gap-1 items-center">
            <div>
              <PlusIcon />
            </div>
            <div>
              <p className="text-[22px] font-bold"> Салад ба зууш</p>
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
