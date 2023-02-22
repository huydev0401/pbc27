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
import CoachPopup1 from "./commons/CoachPopup1";
import CoachPopup2 from "./commons/CoachPopup2";
import CoachPopup3 from "./commons/CoachPopup3";
import CoachPopup4 from "./commons/CoachPopup4";
import CoachPopup5 from "./commons/CoachPopup5";
import CoachPopup6 from "./commons/CoachPopup6";
import CoachPopup7 from "./commons/CoachPopup7";
import CoachPopup8 from "./commons/CoachPopup8";
import CoachPopup9 from "./commons/CoachPopup9";
import CoachPopup10 from "./commons/CoachPopup10";
import CoachPopup11 from "./commons/CoachPopup11";
import CoachPopup12 from "./commons/CoachPopup12";
import CoachPopup13 from "./commons/CoachPopup13";

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
        <CoachPopup1></CoachPopup1>
        <CoachPopup2></CoachPopup2>
        <CoachPopup3></CoachPopup3>
        <CoachPopup4></CoachPopup4>
        <CoachPopup5></CoachPopup5>
        <CoachPopup6></CoachPopup6>
        <CoachPopup7></CoachPopup7>
        <CoachPopup8></CoachPopup8>
        <CoachPopup9></CoachPopup9>
        <CoachPopup10></CoachPopup10>
        <CoachPopup11></CoachPopup11>
        <CoachPopup12></CoachPopup12>
        <CoachPopup13></CoachPopup13>
      </PopupProvider>
    </>
  );
}
