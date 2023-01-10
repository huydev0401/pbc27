import React from "react";
import { usePopup } from "../contexts/popupContext";

export default function IntroPBC() {
  const { setShowVideo } = usePopup();
  return (
    <section className="bg-black py-section">
      <div className="page-container border border-lightBlue2 rounded-[12px] p-[36px] flex-col md:flex-row flex gap-[20px] md:gap-[40px] mx-[15px] md:mx-auto items-center">
        <div className="relative flex-1">
          <img
            className="object-cover h-full"
            src="/images/intro-pbc.png"
            alt=""
          />
          <span className="cursor-pointer inline-flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img
              className="player"
              onClick={() => setShowVideo(true)}
              srcSet="/icons/player-icon.png 2x"
              alt=""
            />
          </span>
        </div>
        <div className="flex-1 text-justify text-white md:text-left">
          <div>
            <h4 className="text-[18px] md:text-[32px]">GIỚI THIỆU</h4>
            <h2 className="text-[28px] md:text-[48px] font-bold leading-[1] mb-[20px]">
              PLANNING BOOTCAMP 27
            </h2>
          </div>
          <div>
            <p className="mb-[20px]">
              Sau 5 kỳ PBC liên tiếp được tổ chức với Chủ đề liên quan tới Thực
              thi xuất sắc, bước sang năm 2023, ActionCOACH CBD Firm đã sẵn sàng
              với một Thông điệp hoàn toàn mới "2023 - THE YEAR OF
              TRANSFORMATION".
            </p>
            <p className="mb-[20px]">
              Khởi động cho hành trình Transformation là Planning Bootcamp 27
              với chủ đề chính "TRANSFORM YOURSELF - CHUYỂN HÓA BẢN THÂN" được
              tổ chức vào 2 ngày 23, 24/03/2023 tại TP Hồ Chí Minh.
            </p>
            <p className="mb-[20px]">
              Việc thành công hay thất bại của một doanh nghiệp phụ thuộc rất
              lớn vào người lãnh đạo - người được coi là "linh hồn" của tổ chức.
              Theo đó, bên cạnh việc làm giàu kinh nghiệm chuyên môn và duy trì
              một trực giác tốt, các nhà lãnh đạo cùng toàn bộ đội ngũ quản lý
              cấp cao cũng phải trang bị và cập nhật cho mình tư duy và thói
              quen quản trị bài bản chứ không phải làm theo bản năng và cảm xúc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
