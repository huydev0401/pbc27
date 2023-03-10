/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const handleToggleHamburger = () => setShowNav(!showNav);
  return (
    <header
      className={`${
        !!showNav ? "fixed" : "absolute"
      } top-0 left-0 right-0 p-[10px] bg-[rgb(17,75,138)] md:bg-transparent z-[9999]`}
    >
      <div className="relative flex items-center justify-between page-container">
        <a href="/home">
          <img srcSet="/images/cbd-logo.png 2x" alt="" />
        </a>
        <div className={`nav-menu ${!!showNav ? "active" : ""}`}>
          <a
            className="font-medium capitalize text-white hover:text-darkBlue transition-all duration-300 cursor-pointer mr-[15px]"
            href="#hot-active"
            onClick={() => setShowNav(false)}
          >
            Hoạt động nổi bật
          </a>
          <a
            className="font-medium capitalize text-white hover:text-darkBlue transition-all duration-300 cursor-pointer mr-[15px]"
            href="#coach"
            onClick={() => setShowNav(false)}
          >
            Diễn giả
          </a>
          <a
            className="font-medium capitalize text-white hover:text-darkBlue transition-all duration-300 cursor-pointer mr-[15px]"
            href="#agenda"
            onClick={() => setShowNav(false)}
          >
            Lịch trình
          </a>
          <a
            className="font-medium capitalize text-white hover:text-darkBlue transition-all duration-300 cursor-pointer mr-[15px]"
            href="#place"
            onClick={() => setShowNav(false)}
          >
            Địa điểm
          </a>
          <a
            href="https://actioncoachcbd.com/"
            target="_blank"
            className="font-medium text-white capitalize transition-all duration-300 cursor-pointer hover:text-darkBlue"
            onClick={() => setShowNav(false)}
          >
            Giới thiệu về <br className="block md:hidden" /> ACTIONCOACH CBD
            FIRM
          </a>
        </div>
        <div className="hamburger" onClick={handleToggleHamburger}>
          {!!showNav ? (
            <FaTimes size={30} style={{ color: "#f8f8f8" }}></FaTimes>
          ) : (
            <FaBars size={30} style={{ color: "#f8f8f8" }}></FaBars>
          )}
        </div>
        <button className="hidden font-bold text-white uppercase h-[40px] bg-[#F7425A] rounded-md px-[16px] md:flex items-center justify-center cursor-pointer btn-scale">
          hotline: 1800 8087
        </button>
      </div>
    </header>
  );
}
