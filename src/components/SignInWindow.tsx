import React, { useState } from "react";
import { EyeOff } from "@/svg/EyeOff";

export const SignInWindow = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col  items-center p-9 gap-[48px]">
      <div className="flex flex-col items-center justify-center gap-[48px]">
        <div>
          <p className="text-3xl">Нэвтрэх</p>
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

            <label className="flex justify-end">Нууц үг сэргээх</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        <div className="flex w-[385px] h-10 bg-stone-100 rounded-sm justify-center items-center">
          <button className="">Нэвтрэх</button>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-sm ">Эсвэл</p>
        </div>
        <div className="flex w-[385px] h-10 rounded-sm border-green-400 border justify-center items-center">
          <button className="">Бүртгүүлэх</button>
        </div>
      </div>
    </div>
  );
};
