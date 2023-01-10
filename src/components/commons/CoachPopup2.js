import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function CoachPopup2() {
  const { showPopupCoach2, setShowPopupCoach2 } = usePopup();
  return (
    <>
      {!!showPopupCoach2 ? (
        <div
          className="fixed inset-0 z-[999999] overflow-y-auto flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
          onClick={() => setShowPopupCoach2(false)}
        >
          <div className="w-[320px] md:w-[800px] h-[100vh] pt-[15px]">
            <div>
              <img src="/images/ProfileCOACH_Leo-1.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ProfileCOACH_Leo-2.jpg" alt="" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
