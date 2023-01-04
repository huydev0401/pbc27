import React from "react";

const Footer = () => {
  return (
    <section className="footer pt-sectionMB md:pb-[80px] pb-[150px]">
      <div className="flex flex-col justify-between text-white md:flex-row page-container">
        <div>
          <img srcSet="/images/logo-footer.png 2x" alt="" />
          <p className="text-justify">
            ActionCOACH là thương hiệu huấn luyện doanh{" "}
            <br className="hidden md:block" /> nghiệp hàng đầu thế giới, được
            Brad Sugars thành <br className="hidden md:block" /> lập năm 1993
            tại Brisbane, Australia trong thời{" "}
            <br className="hidden md:block" /> điểm khái niệm về huấn luyện
            doanh nghiệp còn <br className="hidden md:block" /> khá lạ lẫm đối
            với các quốc gia trên thế giới.
          </p>
        </div>
        <div>
          <h3 className="text-[24px] font-bold mt-[40px] mb-[15px]">
            THÔNG TIN LIÊN HỆ
          </h3>
          <p className="text-[18px] font-semibold mb-[10px]">
            ActionCOACH CBD FIRM
          </p>
          <p className="text-[18px] font-semibold mb-[10px]">
            Firm Huấn luyện doanh nghiệp số <br /> 1 Việt Nam
          </p>
          <p className="text-[18px] mb-[10px]">
            Địa chỉ: Tầng 15 Tháp B Tòa nhà Viettel, <br /> 285 Cách Mạng Tháng
            Tám, Phường 12, <br /> Quận 10, Tp. Hồ Chí Minh
          </p>
          <p className="text-[18px] mb-[10px]">
            Email: info@actioncoachcbd.com
          </p>
          <p className="text-[18px] mb-[10px]">
            Hotline: <span className="font-semibold">1800 8087 (phím 4)</span>
          </p>
        </div>
        <div>
          <h3 className="text-[24px] font-bold mt-[40px] mb-[15px]">
            FANPAGE PBC
          </h3>
          <a
            href="https://www.facebook.com/planningbootcamp.com.vn"
            target="_blank"
            rel="noreferrer"
          >
            <img srcSet="/images/fanpage.png 2x" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
