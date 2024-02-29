import { PlusIcon } from "@/svg/PlusIcon";
import { GreenArrow } from "@/svg/GreenArrow";

const data = [
  {
    id: 5,
    foodName: "Main Pizza",
    price: 3920,
    img: "./Img5.png",
    categoryName: "Exterior Signage",
    discount: false,
  },
  {
    id: 6,
    foodName: "Food tart",
    price: 8351,
    img: "./Img6.png",
    categoryName: "Wall Protection",
    discount: false,
  },
  {
    id: 7,
    foodName: "Өглөөний хоол",
    price: 7974,
    img: "./Img7.png",
    categoryName: "Roofing (Asphalt)",
    discount: false,
  },
  {
    id: 8,
    foodName: "Зутан шөл",
    price: 6446,
    img: "./Img8.png",
    categoryName: "Drywall & Acoustical (MOB)",
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
export const MainCourseMeal = () => {
  return (
    <>
      <div className="px-[115px]">
        <div className="flex items-center justify-between py-4">
          <div className="flex gap-1 items-center">
            <div>
              <PlusIcon />
            </div>
            <div>
              <p className="text-[22px] font-bold"> Үндсэн хоол</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <a className="text-sm text-green-500" href="">
                Бүгдийг харах
              </a>
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
