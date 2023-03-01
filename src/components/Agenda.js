import React from "react";
import Heading from "./commons/Heading";

export default function Agenda() {
  return (
    <section id="agenda" className="pt-[40px] md:pt-[90px] bg-black">
      <div className="page-container">
        <Heading>LỊCH TRÌNH PLANNING BOOTCAMP 27</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[28px] mt-[30px]">
          <div>
            <div className="w-full agenda-btn --day1">
              <h3>NGÀY 1</h3>
              <p>THỨ NĂM (23/03/2023)</p>
            </div>
            <div className="md:mt-[35px] mt-[25px]">
              <div className="grid grid-cols-1">
                <AgendaTab time="06:30 - 08:00">
                  Check-in, Giao lưu Networking
                </AgendaTab>
                <AgendaTab time="08:00 - 08:10" breakTime>
                  Chào mừng & Hoạt động <br className="md:hidden" /> “Follow the
                  Leader”
                </AgendaTab>
                <AgendaTab time="08:10 - 08:30">
                  Opening (Giới thiệu ActionCOACH Global,
                  <br className="md:hidden" /> Viet Nam, CBD)
                </AgendaTab>
                <AgendaTab time="08:30 - 08:40">
                  Tổng quan chương trình <br className="md:hidden" /> Planning
                  Bootcamp 27
                </AgendaTab>
                <AgendaTab time="08:40 - 09:25">
                  MINDSET - Tư duy và thói quen <br className="md:hidden" /> cốt
                  lõi kiến tạo thành công
                </AgendaTab>
                <AgendaTab time="09:25 - 09:45" breakTime>
                  Nghỉ giải lao, dùng Tea-break
                </AgendaTab>
                <AgendaTab time="09:45 - 10:45">
                  6 STEPS - Mô hình 6 bước Xây dựng <br className="md:hidden" />{" "}
                  Doanh nghiệp thành công
                </AgendaTab>
                <AgendaTab time="10:45 - 12:00">
                  TalkShow addingZEROS Network
                </AgendaTab>
                <AgendaTab time="12:00 - 13:30" breakTime>
                  Nghỉ trưa, dùng cơm trưa
                </AgendaTab>
                <AgendaTab time="13:30 - 13:40">
                  Hoạt động “Follow the Leader”
                </AgendaTab>
                <AgendaTab time="13:40 - 14:40">
                  Đánh giá tình hình Doanh nghiệp
                </AgendaTab>
                <AgendaTab time="14:40 - 15:35">
                  Hoạt động Round Table
                </AgendaTab>
                <AgendaTab time="15:35 - 15:50">
                  BFOs - Bài học nhận được sau <br className="md:hidden" /> hoạt
                  động Round Table
                </AgendaTab>
                <AgendaTab time="15:50 - 16:10" breakTime>
                  Nghỉ giải lao, dùng Tea-break
                </AgendaTab>
                <AgendaTab time="16:10 - 16:55">
                  Thiết lập mục tiêu Quý 2/2023
                </AgendaTab>
                <AgendaTab time="16:55 - 18:30">
                  5 WAYS - 5 cách gia tăng doanh thu{" "}
                  <br className="md:hidden" /> & lợi nhuận
                </AgendaTab>
                <AgendaTab time="18:30 - 18:35">
                  Tổng kết ngày đầu tiên & BFOs
                </AgendaTab>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full agenda-btn --day2">
              <h3>NGÀY 2</h3>
              <p>THỨ SÁU (24/03/2023)</p>
            </div>
            <div className="md:mt-[35px] mt-[25px]">
              <div className="grid grid-cols-1">
                <AgendaTab time="06:30 - 08:00">
                  Check-in, Giao lưu Networking
                </AgendaTab>
                <AgendaTab time="08:00 - 08:10" breakTime>
                  Chào mừng & Hoạt động <br className="md:hidden" /> “Follow the
                  Leader”
                </AgendaTab>
                <AgendaTab time="08:10 - 08:30">Tổng hợp ngày đầu</AgendaTab>
                <AgendaTab time="08:30 - 09:40">
                  Chuyên đề: Transform Yourself - <br className="md:hidden" />{" "}
                  Chuyển hóa bản thân
                </AgendaTab>
                <AgendaTab time="09:40 - 10:00" breakTime>
                  Nghỉ giải lao, dùng Tea-break
                </AgendaTab>
                <AgendaTab time="10:00 - 12:00">
                  Kế hoạch Chi tiết Quý 2/2023
                </AgendaTab>
                <AgendaTab time="12:00 - 13:30" breakTime>
                  Nghỉ trưa, dùng cơm trưa
                </AgendaTab>
                <AgendaTab time="13:30 - 13:40">
                  Hoạt động “Follow the Leader”
                </AgendaTab>
                <AgendaTab time="13:40 - 15:40">
                  Kế hoạch trên 1 trang giấy
                </AgendaTab>
                <AgendaTab time="15:40 - 16:00" breakTime>
                  Nghỉ giải lao, dùng Tea-break
                </AgendaTab>
                <AgendaTab time="16:00 - 16:45">IVVM</AgendaTab>
                <AgendaTab time="16:45 - 17:15">Giới thiệu PBC28</AgendaTab>
                <AgendaTab time="17:15 - 18:00">
                  Viết thư, Phiếu đánh giá & Referrals
                </AgendaTab>
                <AgendaTab time="18:00 - 18:30">
                  WIFLE - Điều thú vị sau chương trình
                </AgendaTab>
                <AgendaTab time="18:30 - 18:35" breakTime>
                  Bế mạc chương trình
                </AgendaTab>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-[15px] italic text-[18px] text-center">
          *Lịch trình có thể thay đổi và sẽ được chúng tôi cập nhật liên tục
        </p>
      </div>
    </section>
  );
}

const AgendaTab = ({
  time,
  children,
  breakTime,
  className = "",
  gala,
  end,
}) => {
  return (
    <div
      className={`${className} ${breakTime ? "bg-[#B1E9F8]" : "bg-white"} ${
        gala ? "gala" : ""
      } flex items-center gap-[14px] pl-[15px] pr-[5px] md:px-[23px] py-[20px] rounded-[6px] mb-[10px] h-[65px]`}
    >
      <span
        className={`${
          gala ? "text-white" : "text-[#18264C]"
        } font-bold text-[14px] md:text-[18px]`}
      >
        {time}
      </span>
      <span
        className={`${gala ? "text-white" : "text-black"} ${
          end ? "text-[24px] uppercase" : ""
        } font-bold leading-[1.1] text-[14px] md:text-[18px]`}
      >
        {children}
      </span>
    </div>
  );
};
