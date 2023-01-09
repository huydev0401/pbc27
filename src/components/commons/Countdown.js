import React, { useEffect, useState } from "react";
import { usePopup } from "../../contexts/popupContext";

const Countdown = () => {
  const { setShow } = usePopup();
  const numberFormat = (num) => {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };
  const timediff = Math.floor(
    new Date("March 23,2023 00:00:00").getTime() - new Date().getTime()
  );
  const [deadline, setDeadline] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [duration, setDuration] = useState(timediff);
  useEffect(() => {
    if (timediff > 0) {
      const timer = setTimeout(() => {
        setDuration(duration - 1000);
        setDeadline({
          days: numberFormat(Math.floor(duration / (1000 * 60 * 60 * 24))),
          hours: numberFormat(
            Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ),
          minutes: numberFormat(
            Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
          ),
          seconds: numberFormat(Math.floor((duration % (1000 * 60)) / 1000)),
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [duration, timediff]);
  return (
    <div className="countdown py-[5px] md:py-[8px] fixed bottom-0 left-0 right-0 z-[999] md:h-[70px] flex items-center justify-between">
      <div className="items-center justify-between hidden w-full md:flex page-container">
        <div>
          <img className="h-[47px]" srcSet="/images/pbc-logo.png 2x" alt="" />
        </div>
        <div className="flex items-center">
          <p className="text-black mr-[10px]">Chương trình diễn ra sau: </p>
          <Box>{deadline.days}</Box>
          <Dots></Dots>
          <Box type="giờ">{deadline.hours}</Box>
          <Dots></Dots>
          <Box type="phút ">{deadline.minutes}</Box>
          <Dots></Dots>
          <Box type="giây">{deadline.seconds}</Box>
        </div>
        <button
          onClick={() => setShow(true)}
          className="register-btn h-[57px] px-[30px] rounded-[8px] inline-flex items-center justify-center text-[20px] font-bold text-white"
        >
          ĐĂNG KÝ THAM GIA
        </button>
      </div>
      <div className="mx-[15px] md:hidden block w-full">
        <div className="flex items-center justify-center">
          <Box col>{deadline.days}</Box>
          <Dots className="translate-y-[-12px]"></Dots>
          <Box type="giờ" col>
            {deadline.hours}
          </Box>
          <Dots className="translate-y-[-12px]"></Dots>
          <Box type="phút" col>
            {deadline.minutes}
          </Box>
          <Dots className="translate-y-[-12px]"></Dots>
          <Box type="giây" col>
            {deadline.seconds}
          </Box>
        </div>
        <div className="flex justify-between">
          <div>
            <img className="h-[40px]" srcSet="/images/pbc-logo.png 2x" alt="" />
          </div>
          <button
            onClick={() => setShow(true)}
            className="register-btn h-[40px] px-[20px] rounded-[8px] inline-flex items-center justify-center md:text-[20px] text-[14px] font-bold text-white"
          >
            ĐĂNG KÝ THAM GIA
          </button>
        </div>
      </div>
    </div>
  );
};

const Box = ({ children, type = "ngày", col }) => {
  return (
    <div
      className={`${
        col ? "flex-col !gap-0 px-[5px]" : ""
      } flex items-center justify-between md:p-[10px] bg-red gap-[10px]`}
    >
      <h4 className="text-black font-extrabold md:text-[40px] text-[28px] flex-1 leading-[1]">
        {children}
      </h4>
      <span className="text-black text-[14px] font-semibold">{type}</span>
    </div>
  );
};

const Dot = () => {
  return (
    <div className="md:w-[8px] md:h-[8px] w-[4px] h-[4px] bg-black rounded-full"></div>
  );
};

const Dots = ({ className }) => {
  return (
    <div className={`${className} flex flex-col gap-y-[7px] px-[8px]`}>
      <Dot></Dot>
      <Dot></Dot>
    </div>
  );
};

export default Countdown;
