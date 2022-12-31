import React from "react";
import Heading from "./commons/Heading";

export default function Active() {
  return (
    <section className="bg-black py-sectionMB md:py-section">
      <div className="page-container">
        <Heading>HOẠT ĐỘNG NỔI BẬT TẠI PBC 27</Heading>
        <div className="mt-[30px] md:mt-[50px] flex flex-col gap-y-[40px]">
          <ActiveItem
            num1
            title="Hoạt động đi bộ buổi sáng & Miracle Morning"
            img="/images/active-1.png"
            desc="Đội ngũ Nhà huấn luyện Doanh nghiệp của CBD Firm cùng các Chủ doanh nghiệp & Đội ngũ tham gia hoạt động đi bộ buổi sáng & Miracle Morning."
          ></ActiveItem>
          <ActiveItem
            reverse
            num2
            title="Hoạt động đi bộ buổi sáng & Miracle Morning"
            img="/images/active-2.png"
            desc="Đội ngũ Nhà huấn luyện Doanh nghiệp của CBD Firm cùng các Chủ doanh nghiệp & Đội ngũ tham gia hoạt động đi bộ buổi sáng & Miracle Morning."
          ></ActiveItem>
          <ActiveItem
            num3
            title="Hoạt động đi bộ buổi sáng & Miracle Morning"
            img="/images/active-3.png"
            desc="Đội ngũ Nhà huấn luyện Doanh nghiệp của CBD Firm cùng các Chủ doanh nghiệp & Đội ngũ tham gia hoạt động đi bộ buổi sáng & Miracle Morning."
          ></ActiveItem>
          <ActiveItem
            reverse
            num4
            title="Hoạt động đi bộ buổi sáng & Miracle Morning"
            img="/images/active-4.png"
            desc="Đội ngũ Nhà huấn luyện Doanh nghiệp của CBD Firm cùng các Chủ doanh nghiệp & Đội ngũ tham gia hoạt động đi bộ buổi sáng & Miracle Morning."
          ></ActiveItem>
        </div>
      </div>
    </section>
  );
}

const ActiveItem = ({
  title,
  desc,
  img,
  reverse,
  className,
  num1,
  num2,
  num3,
  num4,
}) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row items-center gap-[20px] md:gap-[40px] ${className} ${
        reverse ? "flex-col md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 flex items-start gap-x-[20px]">
        <div className="w-[105] flex-shrink-0">
          <img srcSet={`${num1 ? "/images/num1.png 2x" : ""}`} alt="" />
          <img srcSet={`${num2 ? "/images/num2.png 2x" : ""}`} alt="" />
          <img srcSet={`${num3 ? "/images/num3.png 2x" : ""}`} alt="" />
          <img srcSet={`${num4 ? "/images/num4.png 2x" : ""}`} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="work-heading font-bold text-[20px] md:text-[32px] text-lightBlue1 leading-[1.2] md:mb-[25px] mb-[15px] text-justify md:text-left">
            {title}
          </h3>
          <p className="text-justify text-white md:text-left">{desc}</p>
        </div>
      </div>
      <div className="w-auto md:w-[614px] flex-shrink-0 rounded-[30px]">
        <img className="rounded-[30px]" src={img} alt="" />
      </div>
    </div>
  );
};
