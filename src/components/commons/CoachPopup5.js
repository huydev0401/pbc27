import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function CoachPopup5() {
  const { showPopupCoach5, setShowPopupCoach5 } = usePopup();
  return (
    <>
      {!!showPopupCoach5 ? (
        <div
          className="fixed inset-0 z-[999999] overflow-y-auto flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
          onClick={() => setShowPopupCoach5(false)}
        >
          <div className="w-[320px] md:w-[800px] h-[100vh] pt-[15px]">
            <div>
              <img
                className="w-full"
                src="/images/ProfileCOACH_Tamy.png"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
