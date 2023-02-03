import React from "react";
import Heading from "./commons/Heading";

export default function Place() {
  return (
    <section
      id="place"
      className="bg-[url('../public/images/place-hcm.png')] bg-center bg-no-repeat bg-cover py-[100px]"
    >
      <div className="text-center page-container">
        <Heading>ĐỊA ĐIỂM TỔ CHỨC</Heading>
        <p className="text-white text-[24px] md:text-[32px] font-bold uppercase mt-[30px]">
          {/* TRUNG TÂM HỘI NGHỊ <br /> TIỆC CƯỚI RIVERSIDE PALACE */}
          Thành phố Hồ Chí Minh
        </p>
        {/* <p className="text-white text-[16px] md:text-[20px] font-extrabold mb-[10px]">
          360D Bến Vân Đồn, Quận 4, TP. Hồ Chí Minh
        </p> */}
        {/* <a
          href="https://www.google.com/maps/place/360D+%C4%90.+B%E1%BA%BFn+V%C3%A2n+%C4%90%E1%BB%93n,+Ph%C6%B0%E1%BB%9Dng+1,+Qu%E1%BA%ADn+4,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7537987,106.6873579,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f0f72d38953:0x5b59cc2fd756b133!8m2!3d10.7537987!4d106.6895466?hl=vi"
          className="text-lightBlue2 underline text-[15px] font-extrabold"
          target="_blank"
          rel="noreferrer"
        >
          Xem đường đi
        </a> */}
      </div>
    </section>
  );
}
