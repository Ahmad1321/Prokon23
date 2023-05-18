import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavbarContainer = () => {
  const navigate = useNavigate();

  const onAccountContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRegisterClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onTwitterClick = useCallback(() => {
    window.open("null");
  }, []);

  const onKkpbudiindratno1gmailcomClick = useCallback(() => {
    window.location.href = "mailto:123@example.com?subject=Hello";
  }, []);

  return (
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
          className="absolute top-[32px] left-[85%] h-[54px] flex flex-row py-2.5 px-5 box-border items-center justify-center gap-[20px] cursor-pointer"
        >
          <button
            className="cursor-pointer [border:none] p-[15px] bg-gray rounded-mini flex flex-row items-start justify-start hover:box-border hover:border-[1px] hover:border-solid hover:border-black"
            onClick={onLoginClick}
          >
            <div className="relative text-5xl font-semibold font-montserrat text-black text-left">
              Login
            </div>
          </button>
          <button 
            className="cursor-pointer [border:none] p-[15px] bg-royalblue-100 rounded-mini overflow-hidden flex flex-row items-start justify-start hover:box-border hover:border-[1px] hover:border-solid hover:border-black"
            onClick={onRegisterClick}
          >
            <div className="relative text-5xl font-semibold font-montserrat text-base-white text-left">
              Sign Up
            </div>
          </button>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[100%] h-[75px] text-base text-black">
        <img
          className="absolute top-[0px] left-[0px] w-[100%] h-[75px] object-cover"
          alt=""
          src="/rectangle-2.svg"
        />
        <div className="absolute top-[12.5px] left-[26px] w-[379.7px] h-[50px] flex flex-row items-center justify-center gap-[30px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-12 h-12 bg-[url(/public/twitter@3x.png)] bg-cover bg-no-repeat bg-[top]"
            onClick={onTwitterClick}
          />
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
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-montserrat text-black text-left inline-block"
            onClick={onKkpbudiindratno1gmailcomClick}
          >
            kkp.budiindratno1@gmail.com
          </button>
          <img
            className="relative w-12 h-12 object-cover"
            alt=""
            src="/address@2x.png"
          />
          <div className="relative">Cimahi, Bandung</div>
        </div>
      </div>
    </div>
  );
};

export default NavbarContainer;
