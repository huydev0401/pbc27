import React, { useState } from "react";
import { usePopup } from "../../contexts/popupContext";
import Bx from "wow-bx24";

const PopupGold = () => {
  let f_rid = "966";
  let f_source = "WEBFORM";
  const f_query = window.location.search;
  if (f_query !== null && f_query !== "") {
    const search_value = window.location.search;
    const params = new URLSearchParams(search_value);
    f_source = "3";
    f_rid = params.get("rid");
  }
  const $bx = new Bx();
  const { showGold, setShowGold } = usePopup();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    product: "",
    sourceId: f_source,
    rid: f_rid,
    title: "CRM_FORM_PBC27_23/03/2023",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    $bx
      .call("crm.lead.add", {
        fields: {
          ...data,
          TITLE: data.title,
          NAME: data.name,
          EMAIL: [{ VALUE: data.email }],
          PHONE: [{ VALUE: data.phone, VALUE_TYPE: "WORK" }],
          COMPANY_TITLE: data.company,
          POST: data.position,
          ASSIGNED_BY_ID: data.rid,
          SOURCE_ID: data.sourceId,
        },
      })
      .then((result) => {
        setLoad(false);
        alert("Đăng ký thành công!");
        $bx.call("crm.lead.productrows.set", {
          id: result.result,
          rows: [
            {
              PRODUCT_ID: 16406,
              PRICE: 6400000,
              QUANTITY: 1,
              TAX_INCLUDED: "Y",
              TAX_RATE: 8,
            },
          ],
        });
        setData({
          ...data,
          name: "",
          email: "",
          phone: "",
          position: "",
          company: "",
          product: "",
        });
      })
      .catch((error) => {
        setLoad(false);
        alert("Đăng ký thất bại");
        console.log(error);
      });
  };
  return (
    <div>
      {!!showGold && (
        <div className="bg-[rgba(0,0,0,0.3)] fixed inset-0 z-[9999999] py-[20px]">
          <div className="flex flex-col md:flex-row w-[340px] md:w-[930px] mx-auto h-[610px] md:h-[630px] items-center bg-white rounded-[8px]">
            <div className="h-[100%] w-[400px] flex-shrink-0 hidden md:block">
              <img
                className="h-[100%] w-full object-cover object-center  rounded-tl-[8px] rounded-bl-[8px]"
                src="/images/intro.png"
                alt=""
              />
            </div>
            <div className="flex-1 p-[20px] md:p-[50px] h-[100%] relative">
              <div
                onClick={() => setShowGold(false)}
                className="absolute top-[20px] right-[20px] z-20 w-[18px] h-[18px] cursor-pointer"
              >
                <img src="/icons/close-icon.png" alt="" />
              </div>
              <h3 className="text-blue font-bold leading-[1.2] text-center mb-[10px] md:mb-[20px]">
                <span className="text-[24px]">ĐĂNG KÝ</span> <br /> THAM GIA
                CHƯƠNG TRÌNH <br />{" "}
                <span className="text-[32px] md:text-[32px] text-[#CE153F]">
                  PLANNING BOOTCAMP 27
                </span>
              </h3>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-y-[9px]">
                    <div>
                      <input
                        className="px-[17px] rounded-[6px] bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px] border border-blue"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nhập Họ và tên"
                        required
                        value={data.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        className="px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px]"
                        id="email"
                        name="email"
                        placeholder="Nhập Email"
                        type="email"
                        value={data.email}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        className="px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px]"
                        id="phone"
                        name="phone"
                        placeholder="Nhập Số điện thoại"
                        type="phone"
                        required
                        value={data.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        className="px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px]"
                        id="company"
                        name="company"
                        placeholder="Tên công ty"
                        type="text"
                        value={data.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        className="px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px]"
                        id="position"
                        name="position"
                        placeholder="Nghề nghiệp/Chức vụ"
                        type="text"
                        value={data.position}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <select
                        className="text-sm px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full h-[50px] text-[#77787B]"
                        id="product"
                        name="product"
                        onChange={handleChange}
                        required
                      >
                        <option value="gold">Vé Gold Member (6.100.000)</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-center mt-[20px]">
                    {load === false ? (
                      <button
                        type="submit"
                        className="register-btn-popup shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25);] w-[289px] h-[60px] font-bold rounded-[50px] bg-red text-white border border-white border-solid"
                      >
                        ĐĂNG KÝ NGAY
                      </button>
                    ) : (
                      <button className="register-btn-popup shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25);] w-[289px] h-[60px] font-bold rounded-[50px] bg-red text-white border border-white border-solid uppercase inline-flex justify-center items-center">
                        <svg
                          className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx={12}
                            cy={12}
                            r={10}
                            stroke="currentColor"
                            strokeWidth={4}
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        ĐANG GỬI
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupGold;
