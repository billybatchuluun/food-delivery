import React from "react";
import { EyeOff } from "@/svg/EyeOff";

export const RegisterWindow = () => {
  return (
    <>
      <div className="flex flex-col p-9 gap-[48px]">
        <div className="flex flex-col items-center justify-center gap-[48px]">
          <div>
            <p className="text-3xl">Бүртгүүлэх</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label>Нэр </label>

              <input
                className="w-[385px] h-10 bg-stone-100 rounded-sm pl-5 "
                type="search"
                placeholder="Нэрээ оруулна уу"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label>И-мэйл </label>

              <input
                className="w-[385px] h-10 bg-stone-100 rounded-sm pl-5 "
                type="search"
                placeholder="И-мэйл хаягаа оруулна уу"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label>Хаяг </label>

              <input
                className="w-[385px] h-10 bg-stone-100 rounded-sm pl-5 "
                type="search"
                placeholder="Та хаягаа оруулна уу"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label>Нууц үг </label>
              <div className="flex w-[385px] h-10 bg-stone-100 rounded-sm px-5 justify-between items-center">
                <input
                  className="w-[385px] h-10 bg-stone-100"
                  type="search"
                  placeholder="Нууц үг"
                ></input>
                <EyeOff />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Нууц үг </label>
              <div className="flex w-[385px] h-10 bg-stone-100 rounded-sm px-5 justify-between items-center">
                <input
                  className="w-[385px] h-10 bg-stone-100"
                  type="search"
                  placeholder="Нууц үг давтах"
                ></input>
                <EyeOff />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-9">
          <div className="flex gap-3">
            <input type="checkbox" />
            <label>Үйлчилгээний нөхцөл зөвшөөрөх</label>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex w-[385px] h-10 bg-stone-100 rounded-sm justify-center items-center">
              <button className="">Бүртгүүлэх</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
