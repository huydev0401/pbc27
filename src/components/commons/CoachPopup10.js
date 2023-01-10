import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function CoachPopup10() {
  const { showPopupCoach10, setShowPopupCoach10 } = usePopup();
  return (
    <>
      {!!showPopupCoach10 ? (
        <div
          className="fixed inset-0 z-[999999] overflow-y-auto flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
          onClick={() => setShowPopupCoach10(false)}
        >
          <div className="w-[320px] md:w-[800px] h-[100vh] pt-[15px]">
            <div>
              <img
                className="w-full"
                src="/images/ProfileCOACH_Theo.png"
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
