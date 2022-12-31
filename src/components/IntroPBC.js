import React from "react";

export default function IntroPBC() {
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
            <img srcSet="/icons/player-icon.png 2x" alt="" />
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
              Kinh doanh mà KHÔNG LẬP KẾ HOẠCH là lập kế hoạch cho sự THẤT BẠI.
              Lập KẾ HOẠCH mà không có THỰC THI thì tất cả chỉ là ẢO TƯỞNG.
            </p>
            <p className="mb-[20px]">
              Đó chính là lý do mà ActionCOACH CBD Firm đã dành 4 kỳ Planning
              Bootcamp - Lập kế hoạch hành động 90 ngày gần đây nhất cho Chủ đề
              THỰC THI. Bởi có tới 90% Doanh nghiệp không thể đạt được mục tiêu
              do khâu thực thi yếu kém.
            </p>
            <div className="mb-[15px]">
              <div className="flex items-baseline gap-[10px]">
                <span>
                  <img srcSet="/icons/check-icon.png 2x" alt="" />
                </span>
                <p>
                  PBC 22 tổ chức vào Tháng 12/2021 tại TP.HCM với Chủ đề "Thực
                  thi xuất sắc".
                </p>
              </div>
              <div className="flex items-baseline gap-[10px]">
                <span>
                  <img srcSet="/icons/check-icon.png 2x" alt="" />
                </span>
                <p>
                  PBC 23 tổ chức vào Tháng 3/2022 tại TP.HCM với Chủ đề "Tư duy
                  thực thi xuất sắc".
                </p>
              </div>
              <div className="flex items-baseline gap-[10px]">
                <span>
                  <img srcSet="/icons/check-icon.png 2x" alt="" />
                </span>
                <p>
                  PBC 24 tổ chức vào Tháng 6/2022 tại Hà Nội với Chủ đề "6 chìa
                  khóa để thực thi xuất sắc".
                </p>
              </div>
              <div className="flex items-baseline gap-[10px]">
                <span>
                  <img srcSet="/icons/check-icon.png 2x" alt="" />
                </span>
                <p>
                  PBC 25 tổ chức vào Tháng 9/2022 tại TP.HCM với Chủ đề "Gắn kết
                  đội ngũ để thực thi xuất sắc".
                </p>
              </div>
            </div>
            <p>
              Và tại Chương trình Lập kế hoạch Hành động 90 ngày - Planning
              Bootcamp 26 (PBC 26) do ActionCOACH CBD Firm tổ chức tại Thành phố
              Quy Nhơn, Bình Định cũng sẽ tiếp tục tập trung vào vấn đề THỰC THI
              với Chủ đề "VẬN HÀNH ĐỒNG BỘ ĐỂ THỰC THI XUẤT SẮC". Đây sẽ là
              Chương trình Lập kế hoạch Hành động cuối cùng của năm 2022.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
