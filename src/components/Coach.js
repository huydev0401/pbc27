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
          CÁC NHÀ HUẤN LUYỆN DOANH NGHIỆP TẠI <br /> PLANNING BOOTCAMP 27
        </Heading>
        <div className="coach-list grid-cols-2 grid md:grid-cols-5 gap-[25px] mt-[50px]">
          <CoachItem
            url="https://drive.google.com/file/d/1oAWj8D8q82necZrtvnUqODZ9KlBXWYbZ/view"
            img="/images/rita.png"
            nickname="rita"
            name="Tô Quý Ngọc Châu"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/1L_XJgAE-2VqW8HGOvwGbdqAHYri0PMVQ/view"
            img="/images/leo.png"
            nickname="leo"
            name="Võ Thái Lâm"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/1hwhMF9Da0Q5bsjr-_JQQBdWGuRUmY2pE/view"
            img="/images/kaka.png"
            nickname="kaka"
            name="Lê Ngọc Đăng"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/18mAlnXaWVPpYuhgZXo76tljAd2lj17M3/view?usp=sharing"
            img="/images/tony.png"
            nickname="tony"
            name="Thái Sơn"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/10Qtd7MHwmAoMfqAi5hCnKxxa_tiVkWB2/view"
            img="/images/tamy.png"
            nickname="tamy"
            name="Ngọc Thảo"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/1diyqtdgmeUCd8f_wcXUEVmE5Pf6MGCxg/view"
            img="/images/david.png"
            nickname="david"
            name="Trần Xuân Hoà"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/1FNtwGPObZJ2uUkzuwQCEfE36UBmwYvg3/view?usp=sharing"
            img="/images/emmy.png"
            nickname="emmy"
            name="Lê Thị Hải"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/1Br-JoQxY9Un3-WCSiUN9-AttQGT37kI1/vie"
            img="/images/martin.png"
            nickname="martin"
            name="Hải Đăng"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/1MJHKSrEnqYzJ-E2FrearkS8RYX3sASJ6/view"
            img="/images/neo.png"
            nickname="neo"
            name="Nguyễn Đình Bảo"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/1yTaJTPEWtXqKZC61XCfWNCKt7XWo_JWa/view"
            img="/images/theo.png"
            nickname="theo"
            name="Vũ Bá Thế"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/11kNVg7lGnBq2-8LUskFyqNMtioYNXxr1/view"
            img="/images/vova.png"
            nickname="vova"
            name="Lê Việt Chuẩn"
          ></CoachItem>
          <CoachItem
            url="https://drive.google.com/file/d/1Hm8Jt9BHuI9VonjUnsIqAEn1Cw-UCu9j/view"
            img="/images/tracy.png"
            nickname="tracy"
            name="Thanh Hà"
          ></CoachItem>
        </div>
      </div>
    </section>
  );
}

const CoachItem = ({ url, img, nickname, name, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={url} {...props} target="_blank">
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
    </a>
  );
};
