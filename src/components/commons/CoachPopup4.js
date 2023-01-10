import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function CoachPopup4() {
  const { showPopupCoach4, setShowPopupCoach4 } = usePopup();
  return (
    <>
      {!!showPopupCoach4 ? (
        <div
          className="fixed inset-0 z-[999999] overflow-y-auto flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
          onClick={() => setShowPopupCoach4(false)}
        >
          <div className="w-[320px] md:w-[800px] h-[100vh] pt-[15px]">
            <div>
              <img
                className="w-full"
                src="/images/ProfileCOACH_Tony.jpg"
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
