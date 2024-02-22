import React from "react";

import { Icon } from "@/svg/Icon";
import { SearchIcon } from "@/svg/SearchIcon";
import { Sags } from "@/svg/Sags";
import { SignInIcon } from "@/svg/SignInIcon";

export const TopBar = () => {
  return (
    <>
      <div className="flex  items-center justify-between font-bold pl-[115px] pr-[115px] pt-2 pb-2">
        <div className="flex gap-5">
          <div>
            <Icon />
          </div>
          <button>
            <p>НҮҮР </p>
          </button>
          <button>
            <p>ХООЛНЫ ЦЭС</p>
          </button>
          <button>
            <p>ХҮРГЭЛТИЙН БҮС</p>
          </button>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex py-2 px-4 gap-3 items-center border-black border rounded-md">
            <SearchIcon />
            <input className="" type="search" placeholder="Хайх"></input>
          </div>
          <div className="flex gap-3 items-center">
            <Sags />
            <button>
              <p>САГС</p>
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <SignInIcon />
            <button>
              <p>НЭВТРЭХ</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
