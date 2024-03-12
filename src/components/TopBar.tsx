import React from "react";

import { Icon } from "@/svg/Icon";
import { SearchIcon } from "@/svg/SearchIcon";
import { Sags } from "@/svg/Sags";
import { SignInIcon } from "@/svg/SignInIcon";

export const TopBar = () => {
  return (
    <>
      <div className="flex  items-center justify-between font-bold px-[115px] pt-2 pb-2">
        <div className="flex gap-5 ">
          <div>
            <Icon />
          </div>
          <a href="./">
            <button className="hover:text-green-500">
              <p>НҮҮР </p>
            </button>
          </a>
          <a href="">
            <button className="hover:text-green-500">
              <p>ХООЛНЫ ЦЭС</p>
            </button>
          </a>

          <a href="">
            <button className="hover:text-green-500">
              <p>ХҮРГЭЛТИЙН БҮС</p>
            </button>
          </a>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex py-2 px-4 gap-3 items-center border rounded-md">
            <SearchIcon />
            <input className="" type="search" placeholder="Хайх"></input>
          </div>
          <div className="flex gap-3 items-center">
            <Sags />
            <button className="hover:text-green-500">
              <p>САГС</p>
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <SignInIcon />
            <a href="./login">
              <button className="hover:text-green-500">
                <p>НЭВТРЭХ</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
