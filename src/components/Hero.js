import React from "react";

export default function Hero() {
  return (
    <section className="bg-[url('../public/images/hero.png')] bg-right md:bg-top bg-no-repeat bg-cover pt-[130px] h-[695px]">
      <div className="page-container md:pl-[90px]">
        <div className="mt-[100px] md:mt-0 mb-[30px] md:mb-[60px]">
          <img srcSet="/images/pbc-logo.png 2x" alt="" />
        </div>
        <div>
          <img srcSet="/images/title.png 2x" alt="" />
        </div>
      </div>
    </section>
  );
}
