import React from "react";

export default function Heading({ children }) {
  return (
    <div className="text-center">
      <h2 className="text-[28px] md:text-[40px] font-bold text-white leading-[1]">
        {children}
      </h2>
      <span className="heading-line"></span>
    </div>
  );
}
