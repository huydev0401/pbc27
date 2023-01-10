import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function CoachPopup9() {
  const { showPopupCoach9, setShowPopupCoach9 } = usePopup();
  return (
    <>
      {!!showPopupCoach9 ? (
        <div
          className="fixed inset-0 z-[999999] overflow-y-auto flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
          onClick={() => setShowPopupCoach9(false)}
        >
          <div className="w-[320px] md:w-[800px] h-[100vh] pt-[15px]">
            <div>
              <img
                className="w-full"
                src="/images/ProfileCOACH_Neo.png"
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
