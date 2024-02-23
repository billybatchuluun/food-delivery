import React from "react";
import { EyeOff } from "@/svg/EyeOff";

export const ForgotPasswordWindow = () => {
  return (
    <div className="flex flex-col  items-center p-9 gap-[48px]">
      <div className="flex flex-col items-center justify-center gap-[48px]">
        <div>
          <p className="text-3xl">Нууц үг сэргээх</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label>И-мэйл </label>

            <input
              className="w-[385px] h-10 bg-stone-100 rounded-sm pl-5 "
              type="search"
              placeholder="И-мэйл хаягаа оруулна уу"
            ></input>
          </div>
        </div>
        <div className="flex w-[385px] h-10 rounded-sm bg-stone-100 border justify-center items-center">
          <button className="">Үргэлжлүүлэх</button>
        </div>
      </div>
    </div>
  );
};
