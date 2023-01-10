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
            title="Roundtable"
            img="/images/active-2.png"
            desc="RoundTable là phần chia sẻ mang tính chuyên sâu, thực chiến của các Nhà Huấn luyện Doanh nghiệp của CBD Firm và các Chủ doanh nghiệp đang là khách hàng của CBD Firm về các vấn đề mà nhiều Doanh nghiệp đang phải đối mặt."
          ></ActiveItem>
          <ActiveItem
            reverse
            num2
            title='Chuyên đề "Transform Yourself - Chuyển hóa bản thân"'
            img="/images/active-3.png"
            desc="Chia sẻ từ Nhà huấn luyện Doanh nghiệp của CBD Firm về tầm quan trọng cũng như cách thức để Chuyển hóa bản thân - Bước đệm quan trọng để Doanh nghiệp sẵn sàng cho những Mục tiêu năm 2023."
          ></ActiveItem>
          <ActiveItem
            num3
            title="Hoạt động chính"
            img="/images/active-4.png"
            desc="Cập nhật BHAG & mục tiêu 10 năm cho doanh nghiệp. Cũng như xây dựng kế hoạch 90 ngày cho quý II/ 2023."
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
