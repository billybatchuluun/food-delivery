import { IconWhite } from "@/svg/IconWhite";
import React from "react";
import { FacebookIcon } from "@/svg/FacebookIcon";
import { InsagramIcon } from "@/svg/InsagramIcon";
import { Twitter } from "@/svg/Twitter";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#18BA51] text-white bg-[url('/BgPic.png')]">
        <div className="flex flex-col px-[120px] py-[110px] gap-10">
          <div className="flex items-center justify-center gap-2 pt-[114px]">
            <IconWhite />
            <p className="text-xl">Food Delivery</p>
          </div>
          <div className="flex justify-between underline">
            <a href="./">
              <button>
                <p>Нүүр</p>
              </button>
            </a>

            <button>
              <p>Холбоо барих</p>
            </button>
            <button>
              <p>Хоолны цэс</p>
            </button>
            <a href="./term">
              <button>
                <p>Үйлчилгээний нөхцөл</p>
              </button>
            </a>
            <a href="">
              <button>
                <p>Хүргэлтийн бүс</p>
              </button>
            </a>
            <a href="./privacy">
              <button>
                <p>Нууцлалын бодлого</p>
              </button>
            </a>
          </div>
          <div className="flex p-1 gap-5 justify-center items-center">
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <InsagramIcon />
            </a>
            <a href="">
              <Twitter />
            </a>
          </div>
          <hr></hr>
          <div className="flex flex-col justify-center items-center">
            <p>© 2024 Pinecone Foods LLC </p>
            <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </div>
    </>
  );
};
