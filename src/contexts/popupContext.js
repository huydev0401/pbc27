import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

function PopupProvider(props) {
  const [show, setShow] = useState(false);
  const [showDiamond, setShowDiamond] = useState(false);
  const [showGold, setShowGold] = useState(false);
  const [showMember, setShowMember] = useState(false);
  const [showStandard, setShowStandard] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showPopupCoach1, setShowPopupCoach1] = useState(false);
  const [showPopupCoach2, setShowPopupCoach2] = useState(false);
  const [showPopupCoach3, setShowPopupCoach3] = useState(false);
  const [showPopupCoach4, setShowPopupCoach4] = useState(false);
  const [showPopupCoach5, setShowPopupCoach5] = useState(false);
  const [showPopupCoach6, setShowPopupCoach6] = useState(false);
  const [showPopupCoach7, setShowPopupCoach7] = useState(false);
  const [showPopupCoach8, setShowPopupCoach8] = useState(false);
  const [showPopupCoach9, setShowPopupCoach9] = useState(false);
  const [showPopupCoach10, setShowPopupCoach10] = useState(false);
  const [showPopupCoach11, setShowPopupCoach11] = useState(false);
  const [showPopupCoach12, setShowPopupCoach12] = useState(false);
  const [showPopupCoach13, setShowPopupCoach13] = useState(false);
  const value = {
    show,
    setShow,
    showDiamond,
    setShowDiamond,
    showGold,
    setShowGold,
    showMember,
    setShowMember,
    showStandard,
    setShowStandard,
    showVideo,
    setShowVideo,
    showPopupCoach1,
    setShowPopupCoach1,
    showPopupCoach2,
    setShowPopupCoach2,
    showPopupCoach3,
    setShowPopupCoach3,
    showPopupCoach4,
    setShowPopupCoach4,
    showPopupCoach5,
    setShowPopupCoach5,
    showPopupCoach6,
    setShowPopupCoach6,
    showPopupCoach7,
    setShowPopupCoach7,
    showPopupCoach8,
    setShowPopupCoach8,
    showPopupCoach9,
    setShowPopupCoach9,
    showPopupCoach10,
    setShowPopupCoach10,
    showPopupCoach11,
    setShowPopupCoach11,
    showPopupCoach12,
    setShowPopupCoach12,
    showPopupCoach13,
    setShowPopupCoach13,
  };
  return (
    <PopupContext.Provider value={value} {...props}></PopupContext.Provider>
  );
}

function usePopup() {
  const context = useContext(PopupContext);
  if (typeof context === "undefined")
    throw new Error("usePopup must be used within a PopupProvider");
  return context;
}

export { PopupProvider, usePopup };
