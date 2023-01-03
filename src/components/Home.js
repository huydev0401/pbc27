import React, { useEffect } from "react";
import { PopupProvider } from "../contexts/popupContext";
import Active from "./Active";
import Coach from "./Coach";
import BackToTop from "./commons/BackToTop";
import Countdown from "./commons/Countdown";
import PopupDiamond from "./commons/PopupDiamond";
import PopupGold from "./commons/PopupGold";
import PopupMember from "./commons/PopupMember";
import PopupRegister from "./commons/PopupRegister";
import PopupStandard from "./commons/PopupStandard";
import VideoPopup from "./commons/VideoPopup";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import IntroPBC from "./IntroPBC";
import Place from "./Place";
import Scale from "./Scale";
import Ticket from "./Ticket";
import Why from "./Why";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <PopupProvider>
        <Header></Header>
        <Hero></Hero>
        <IntroPBC></IntroPBC>
        <Scale></Scale>
        <Why></Why>
        <Coach></Coach>
        <Active></Active>
        <Ticket></Ticket>
        <Place></Place>
        <Footer></Footer>
        <Countdown></Countdown>
        <BackToTop></BackToTop>
        <PopupRegister></PopupRegister>
        <PopupDiamond></PopupDiamond>
        <PopupGold></PopupGold>
        <PopupMember></PopupMember>
        <PopupStandard></PopupStandard>
        <VideoPopup></VideoPopup>
      </PopupProvider>
    </>
  );
}
