import { useState, useRef, useCallback } from "react";
import FrameComponent from "./Notifikasi";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";

const LoginNavbar = () => {
  const navigate = useNavigate();

  const notificationRef = useRef(null);
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);

  const onAccountContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onlogoutbuttonClick = useCallback(() =>{
    // log out
  }, []);

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

  const onLogoClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  return (
    <>
      <div className="absolute top-[0px] left-[0px] w-[100%] h-[195px] text-left text-13xl text-royalblue-100 font-montserrat">
      <div className="absolute top-[75px] left-[0px] w-[100%] h-[120px]">
        <img
          className="absolute top-[0px] left-[0px] w-[100%] h-[120px] object-cover"
          alt=""
          src="/rectangle-1.svg"
        />
        <div className="absolute top-[29px] left-[125px] w-[133px] flex flex-row py-2.5 px-5 box-border items-start justify-start" onClick={onAccountContainerClick}>
          <b 
            className="relative"
            
          >
            LOGO
          </b>
        </div>
        <div className="absolute top-[35px] left-[30%] w-[731px] flex flex-row py-2.5 px-5 box-border items-center justify-center gap-[20px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-montserrat text-black text-left inline-block hover:[-webkit-text-stroke:1px_#000]">
            Our Team
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-montserrat text-black text-left inline-block hover:[-webkit-text-stroke:1px_#000]">
            Our Services
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-montserrat text-black text-left inline-block hover:[-webkit-text-stroke:1px_#000]">
            Our Client
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl font-montserrat text-black text-left inline-block hover:[-webkit-text-stroke:1px_#000]">
            Contact
          </button>
        </div>
          <div
            className="absolute top-[33px] left-[74%] h-[54px] flex flex-row py-2.5 px-5 box-border items-center justify-center gap-[20px] cursor-pointer"
            onClick={onAccountContainerClick}
          >
            <div className="relative font-semibold">First Name!</div>
            <img
              className="relative w-[60px] h-[60px] overflow-hidden shrink-0"
              alt=""
              src="/mdiusercircle.svg"
            />
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] bg-[url(/public/notification@3x.png)] bg-cover bg-no-repeat bg-[top]"
              ref={notificationRef}
              onClick={openFramePopup}
            />
            <button
            className="cursor-pointer [border:none] p-[15px] bg-gray rounded-mini flex flex-row items-start justify-start hover:box-border hover:border-[1px] hover:border-solid hover:border-black"
            onClick={onlogoutbuttonClick}
            >
              <div className="relative text-5xl font-semibold font-montserrat text-black text-left">
                Logout
              </div>
            </button>
          </div>
          <button
            className="cursor-pointer [border:none] py-2.5 px-5 bg-[transparent] absolute top-[29px] left-[125px] w-[133px] flex flex-row box-border items-start justify-start"
            onClick={onLogoClick}
          >
            <b className="relative text-13xl font-montserrat text-royalblue-100 text-left">
              LOGO
            </b>
          </button>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[100%] h-[75px] text-base">
          <img
            className="absolute top-[0px] left-[0px] w-[100%] h-[75px]"
            alt=""
            src="/rectangle-2.svg"
          />
          <div className="absolute top-[12.5px] left-[26px] w-[379.7px] h-[50px] flex flex-row items-center justify-center gap-[30px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-12 h-12 bg-[url(/public/twitter@3x.png)] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-12 h-12 bg-[url(/public/instagram@3x.png)] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-12 h-12 bg-[url(/public/linkedin@3x.png)] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-12 h-12 bg-[url(/public/facebook@3x.png)] bg-cover bg-no-repeat bg-[top]" />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-12 h-12 bg-[url(/public/youtube@3x.png)] bg-cover bg-no-repeat bg-[top]" />
          </div>
          <div className="absolute top-[11px] left-[75%] w-[524.2px] h-[50px] flex flex-row items-center justify-center gap-[15px]">
            <img
              className="relative w-12 h-12 object-cover"
              alt=""
              src="/mail@2x.png"
            />
            <div className="relative">kkp.budiindratno1@gmail.com</div>
            <img
              className="relative w-12 h-12 object-cover"
              alt=""
              src="/address@2x.png"
            />
            <div className="relative">Cimahi, Bandung</div>
          </div>
        </div>
      </div>
      {isFramePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          relativeLayerRef={notificationRef}
          onOutsideClick={closeFramePopup}
        >
          <FrameComponent onClose={closeFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default LoginNavbar;
