import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function CoachPopup1() {
  const { showPopupCoach1, setShowPopupCoach1 } = usePopup();
  return (
    <>
      {!!showPopupCoach1 ? (
        <div
          className="fixed inset-0 z-[999999] overflow-y-auto flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
          onClick={() => setShowPopupCoach1(false)}
        >
          <div className="w-[320px] md:w-[800px] h-[100vh] pt-[15px]">
            <div>
              <img src="/images/ProfileCOACH_Rita-1.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ProfileCOACH_Rita-2.jpg" alt="" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
