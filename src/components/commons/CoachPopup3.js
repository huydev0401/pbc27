import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function CoachPopup3() {
  const { showPopupCoach3, setShowPopupCoach3 } = usePopup();
  return (
    <>
      {!!showPopupCoach3 ? (
        <div
          className="fixed inset-0 z-[999999] overflow-y-auto flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
          onClick={() => setShowPopupCoach3(false)}
        >
          <div className="w-[320px] md:w-[800px] h-[100vh] pt-[15px]">
            <div>
              <img
                className="w-full"
                src="/images/ProfileCOACH_Kaka.png"
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
