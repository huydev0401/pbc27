import React from "react";
import { NavLink } from "react-router-dom";

export default function Intro() {
  return (
    <div className="bg-black w-[100vw] h-[100vh] flex items-center justify-center flex-col px-[15px]">
      <div>
        <img src="/images/slogan.png" alt="" />
      </div>
      <NavLink
        to={"/home"}
        className="flex items-center gap-[14px] mt-[50px] cursor-pointer"
      >
        <p className="discovery-text">Khám phá ngay</p>
        <span className="discovery-arrow">
          <img srcSet="/icons/arrow-icon.png 2x" alt="" />
        </span>
      </NavLink>
    </div>
  );
}
