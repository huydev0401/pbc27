import React from "react";
import { usePopup } from "../contexts/popupContext";
import Heading from "./commons/Heading";

export default function Coach() {
  const {
    setShowPopupCoach1,
    setShowPopupCoach2,
    setShowPopupCoach3,
    setShowPopupCoach4,
    setShowPopupCoach5,
    setShowPopupCoach6,
    setShowPopupCoach7,
    setShowPopupCoach8,
    setShowPopupCoach9,
    setShowPopupCoach10,
    setShowPopupCoach11,
    setShowPopupCoach12,
  } = usePopup();
  return (
    <section
      id="coach"
      className="py-sectionMB md:py-section bg-[url('../public/images/bg-blur.png')] bg-center-top bg-no-repeat bg-cover mt-[-1px]"
    >
      <div className="page-container">
        <Heading>
          CÁC NHÀ HUẤN LUYỆN DOANH NGHIỆP TẠI <br /> PLANNING BOOTCAMP 27
        </Heading>
        <div className="coach-list grid-cols-2 grid md:grid-cols-5 gap-[25px] mt-[50px]">
          <CoachItem
            img="/images/rita.png"
            nickname="rita"
            name="Tô Quý Ngọc Châu"
            onClick={() => setShowPopupCoach1(true)}
          ></CoachItem>
          <CoachItem
            img="/images/leo.png"
            nickname="leo"
            name="Võ Thái Lâm"
            onClick={() => setShowPopupCoach2(true)}
          ></CoachItem>
          <CoachItem
            img="/images/kaka.png"
            nickname="kaka"
            name="Lê Ngọc Đăng"
            onClick={() => setShowPopupCoach3(true)}
          ></CoachItem>
          <CoachItem
            img="/images/tony.png"
            nickname="tony"
            name="Thái Sơn"
            onClick={() => setShowPopupCoach4(true)}
          ></CoachItem>
          <CoachItem
            img="/images/tamy.png"
            nickname="tamy"
            name="Ngọc Thảo"
            onClick={() => setShowPopupCoach5(true)}
          ></CoachItem>
          <CoachItem
            img="/images/david.png"
            nickname="david"
            name="Trần Xuân Hoà"
            onClick={() => setShowPopupCoach6(true)}
          ></CoachItem>
          <CoachItem
            img="/images/emmy.png"
            nickname="emmy"
            name="Lê Thị Hải"
            onClick={() => setShowPopupCoach7(true)}
          ></CoachItem>
          <CoachItem
            img="/images/martin.png"
            nickname="martin"
            name="Hải Đăng"
            onClick={() => setShowPopupCoach8(true)}
          ></CoachItem>
          <CoachItem
            img="/images/neo.png"
            nickname="neo"
            name="Nguyễn Đình Bảo"
            onClick={() => setShowPopupCoach9(true)}
          ></CoachItem>
          <CoachItem
            img="/images/theo.png"
            nickname="theo"
            name="Vũ Bá Thế"
            onClick={() => setShowPopupCoach10(true)}
          ></CoachItem>
          <CoachItem
            img="/images/vova.png"
            nickname="vova"
            name="Lê Việt Chuẩn"
            onClick={() => setShowPopupCoach11(true)}
          ></CoachItem>
          <CoachItem
            img="/images/tracy.png"
            nickname="tracy"
            name="Thanh Hà"
            onClick={() => setShowPopupCoach12(true)}
          ></CoachItem>
        </div>
      </div>
    </section>
  );
}

const CoachItem = ({ img, nickname, name, onClick, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <div className="cursor-pointer" onClick={onClick} {...props}>
      <div className="mb-[20px]">
        <img className="object-cover w-full h-full" src={img} alt="" />
      </div>
      <div className="text-center">
        <p className="text-[16px] md:text-[20px] font-bold text-white">
          <span className="uppercase">{nickname}</span>{" "}
          <span className="capitalize">{name}</span>
        </p>
        <p className="text-[13px] font-semibold text-white">Business COACH</p>
      </div>
    </div>
  );
};
