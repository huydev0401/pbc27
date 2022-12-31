import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

function PopupProvider(props) {
  const [show, setShow] = useState(false);
  const [showDiamond, setShowDiamond] = useState(false);
  const [showGold, setShowGold] = useState(false);
  const [showMember, setShowMember] = useState(false);
  const [showStandard, setShowStandard] = useState(false);
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
