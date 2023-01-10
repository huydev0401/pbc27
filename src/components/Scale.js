import React from "react";

export default function Scale() {
  return (
    <section className="relative bg-lightBlue1 pt-sectionMB md:pt-section">
      <div className="absolute top-0 right-0 hidden md:block">
        <img srcSet="/icons/scale-icon2.png 2x" alt="" />
      </div>
      <div className="absolute top-[60px] left-0 md:block hidden">
        <img srcSet="/icons/scale-icon1.png 2x" alt="" />
      </div>
      <div className="page-container pb-[45px]">
        <h2 className="text-[28px] md:text-[40px] font-extrabold text-center mb-[30px] md:mb-[20px]">
          QUY MÔ TỔ CHỨC
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-x-[100px] relative z-10">
          <ScaleItem num="03">ngày lập kế hoạch</ScaleItem>
          <ScaleItem num="200+">chủ doanh nghiệp tham gia</ScaleItem>
          <ScaleItem num="12+">
            nhà huấn luyện doanh nghiệp <br className="hidden md:block" /> hàng
            đầu Việt Nam
          </ScaleItem>
          <ScaleItem num="gala">Dinner</ScaleItem>
        </div>
      </div>
      <div className="grid grid-cols-6 scale-list">
        <div className="scale-item">
          <img src="/images/scale-1.png" alt="" />
        </div>
        <div className="scale-item">
          <img src="/images/scale-2.png" alt="" />
        </div>
        <div className="scale-item">
          <img src="/images/scale-3.png" alt="" />
        </div>
        <div className="scale-item">
          <img src="/images/scale-ex.png" alt="" />
        </div>
        <div className="scale-item">
          <img src="/images/scale-4.png" alt="" />
        </div>
        <div className="scale-item">
          <img src="/images/scale-5.png" alt="" />
        </div>
        <div className="scale-item">
          <img src="/images/scale-6.png" alt="" />
        </div>
        <div className="scale-item">
          <img src="/images/scale-7.png" alt="" />
        </div>
      </div>
    </section>
  );
}

const ScaleItem = ({ num, children }) => {
  return (
    <div className="text-center">
      <div className="text-[28px] md:text-[60px] font-bold uppercase leading-[1]">
        {num}
      </div>
      <div className="text-[14px] md:text-[20px] font-medium">{children}</div>
    </div>
  );
};
