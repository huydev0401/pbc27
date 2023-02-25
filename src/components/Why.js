import React from "react";
import Heading from "./commons/Heading";

export default function Why() {
  return (
    <section className="bg-black py-sectionMB md:py-section">
      <div className="page-container">
        <Heading>5 LÝ DO ĐỂ CHỦ DOANH NGHIỆP & ĐỘI NGŨ THAM DỰ PBC 27</Heading>
        <div className="border border-lightBlue1 mt-[40px]">
          <WhyItem why="Lý do 1" blue2>
            <p className="txt-gradient">
              Transform Yourself - Chuyển hóa bản thân
            </p>
          </WhyItem>
          <WhyItem why="Lý do 2" blue1>
            Lập kế hoạch hành động 90 ngày
          </WhyItem>
          <WhyItem why="Lý do 3" green>
            Phát triển các nhà lãnh đạo tiềm năng trong doanh nghiệp
          </WhyItem>
          <WhyItem why="Lý do 4" orange>
            Học hỏi kinh nghiệm từ cộng đồng doanh chủ của ActionCOACH CBD Firm
          </WhyItem>
          <WhyItem why="Lý do 5" yellow2>
            Tăng cường vận hành đồng bộ giữa đội ngũ và chủ doanh nghiệp
          </WhyItem>
        </div>
      </div>
    </section>
  );
}

const WhyItem = ({
  why,
  children,
  blue1,
  blue2,
  green,
  orange,
  yellow1,
  yellow2,
  purple,
}) => {
  return (
    <div className="flex items-center overflow-hidden cursor-pointer group why-item">
      <div
        className={`pl-[10px] pr-[0px] h-[105px] ${
          blue1 ? "bg-darkBlue" : ""
        } ${blue2 ? "bg-lightBlue1" : ""} ${green ? "bg-green" : ""} ${
          orange ? "bg-orange" : ""
        } ${yellow1 ? "bg-darkYellow" : ""} ${
          yellow2 ? "bg-lightYellow" : ""
        } ${
          purple ? "bg-purple" : ""
        } w-0 transition-all duration-500 group-hover:w-[238px] flex items-center justify-center group-hover:pl-[0px]`}
      >
        <p className="group-hover:text-[18px] md:group-hover:text-[32px] text-[#010101] font-extrabold uppercase text-[0px] transition-all duration-200">
          {why}
        </p>
      </div>
      <div className="text-[14px] md:text-[24px] font-extrabold text-white uppercase h-[105px] flex items-center pl-[25px]">
        {children}
      </div>
    </div>
  );
};
