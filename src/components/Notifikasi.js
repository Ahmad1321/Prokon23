const FrameComponent = ({ onClose }) => {
  return (
    <div className="relative w-[445px] h-[539px] max-w-full max-h-full overflow-auto text-left text-base text-black font-montserrat">
      <div className="absolute top-[0px] left-[0px] w-[445px] h-[539px]">
        <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-b-xl bg-base-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[445px] h-[539px] border-[1px] border-solid border-black" />
        <div className="absolute top-[13px] left-[25px] flex flex-row items-center justify-center gap-[70px] text-13xl">
          <b className="relative">Notifikasi</b>
          <div className="relative text-base font-medium text-mediumseagreen">
            Tandai sudah dibaca
          </div>
        </div>
        <div className="absolute top-[72px] left-[-0.5px] box-border w-[446px] h-px border-t-[1px] border-solid border-black" />
        <img
          className="absolute top-[105px] left-[22px] w-[65px] h-[65px] object-cover"
          alt=""
          src="/ok@2x.png"
        />
        <div className="absolute top-[93px] left-[94px] flex flex-col items-start justify-start gap-[8px]">
          <b className="relative">Penjadwalan telah diverifikasi!</b>
          <div className="relative inline-block w-[331px]">
            Silahkan cek email anda untuk informasi lebih lanjut.
          </div>
          <b className="relative inline-block w-[331px]">14:20 PM</b>
        </div>
        <div className="absolute top-[202.3px] left-[-0.2px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[445.4px] h-[0.4px] border-t-[0.4px] border-solid border-black" />
        <img
          className="absolute top-[235px] left-[22px] w-[65px] h-[65px] object-cover"
          alt=""
          src="/box-important@2x.png"
        />
        <div className="absolute top-[219px] left-[94px] flex flex-col items-start justify-start gap-[8px]">
          <b className="relative">Penjadwalan telah diverifikasi!</b>
          <div className="relative inline-block w-[331px]">
            Silahkan cek email anda untuk informasi lebih lanjut.
          </div>
          <b className="relative inline-block w-[331px]">14:20 PM</b>
        </div>
        <div className="absolute top-[330.8px] left-[-0.2px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[445.4px] h-[0.4px] border-t-[0.4px] border-solid border-black" />
        <img
          className="absolute top-[360px] left-[22px] w-[65px] h-[65px] object-cover"
          alt=""
          src="/rotate-right@2x.png"
        />
        <div className="absolute top-[343px] left-[96px] flex flex-col items-start justify-start gap-[8px]">
          <b className="relative">Penjadwalan telah diverifikasi!</b>
          <div className="relative inline-block w-[331px]">
            Silahkan cek email anda untuk informasi lebih lanjut.
          </div>
          <b className="relative inline-block w-[331px]">14:20 PM</b>
        </div>
        <div className="absolute top-[453.8px] left-[-0.2px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[445.4px] h-[0.4px] border-t-[0.4px] border-solid border-black" />
        <div className="absolute top-[482px] left-[25px] flex flex-row items-center justify-center gap-[120px]">
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/chevron-right@2x.png"
          />
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              src="/ellipse-17.svg"
            />
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              src="/ellipse-18.svg"
            />
            <img
              className="relative w-[25px] h-[25px]"
              alt=""
              src="/ellipse-19.svg"
            />
          </div>
          <img
            className="relative w-[30px] h-[30px] object-cover"
            alt=""
            src="/chevron-right1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
