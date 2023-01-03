import React from "react";
import Heading from "./commons/Heading";

export default function Coach() {
  return (
    <section
      id="coach"
      className="py-sectionMB md:py-section bg-[url('../public/images/bg-blur.png')] bg-center-top bg-no-repeat bg-cover mt-[-1px]"
    >
      <div className="page-container">
        <Heading>
          CÁC NHÀ HUẤN LUYỆN DOANH NGHIỆP TẠI <br /> PLANNING BOOTCAMP 26
        </Heading>
        <div className="coach-list grid-cols-2 grid md:grid-cols-5 gap-[25px] mt-[50px]">
          <CoachItem
            img="/images/rita.png"
            nickname="rita"
            name="Tô Q N Châu"
          ></CoachItem>
          <CoachItem
            img="/images/leo.png"
            nickname="leo"
            name="Võ Thái Lâm"
          ></CoachItem>
          <CoachItem
            img="/images/kaka.png"
            nickname="kaka"
            name="Lê Ngọc Đăng"
          ></CoachItem>
          <CoachItem
            img="/images/tony.png"
            nickname="tony"
            name="Thái Sơn"
          ></CoachItem>
          <CoachItem
            img="/images/tamy.png"
            nickname="tamy"
            name="Ngọc Thảo"
          ></CoachItem>
          <CoachItem
            img="/images/david.png"
            nickname="david"
            name="Trần Xuân Hoà"
          ></CoachItem>
          <CoachItem
            img="/images/emmy.png"
            nickname="emmy"
            name="Lê Thị Hải"
          ></CoachItem>
          <CoachItem
            img="/images/martin.png"
            nickname="martin"
            name="Hải Đăng"
          ></CoachItem>
          <CoachItem
            img="/images/neo.png"
            nickname="neo"
            name="Nguyễn Đình Bảo"
          ></CoachItem>
          <CoachItem
            img="/images/theo.png"
            nickname="theo"
            name="Vũ Bá Thế"
          ></CoachItem>
          <CoachItem
            img="/images/vova.png"
            nickname="vova"
            name="Lê Việt Chuẩn"
          ></CoachItem>
          <CoachItem
            img="/images/tracy.png"
            nickname="tracy"
            name="Thanh Hà"
          ></CoachItem>
        </div>
      </div>
    </section>
  );
}

const CoachItem = ({ img, nickname, name, ...props }) => {
  return (
    <div {...props}>
      <div className="mb-[20px]">
        <img className="object-cover w-full h-full" src={img} alt="" />
      </div>
      <div className="text-center">
        <p className="text-[16px] md:text-[20px] font-bold text-white">
          <span className="uppercase">{nickname}</span>{" "}
          <span className="capitalize">{name}</span>
        </p>
        <p className="text-[13px] font-semibold text-white">Busines COACH</p>
      </div>
    </div>
  );
};
