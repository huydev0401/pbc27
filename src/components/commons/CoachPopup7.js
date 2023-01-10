import React from "react";
import { usePopup } from "../../contexts/popupContext";

export default function CoachPopup7() {
  const { showPopupCoach7, setShowPopupCoach7 } = usePopup();
  return (
    <>
      {!!showPopupCoach7 ? (
        <div
          className="fixed inset-0 z-[999999] overflow-y-auto flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
          onClick={() => setShowPopupCoach7(false)}
        >
          <div className="w-[320px] md:w-[800px] h-[100vh] pt-[15px]">
            <div>
              <img
                className="w-full"
                src="/images/ProfileCOACH_Emmy.jpg"
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
