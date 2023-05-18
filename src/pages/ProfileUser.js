import { useState, useCallback } from "react";
import Navbar from "../components/NavbarBL";
import Calendar from "../components/Calendar";
import PortalPopup from "../components/PortalPopup";
import Footer from "../components/Footer";

const ProfileUser = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isCalendar1Open, setCalendar1Open] = useState(false);

  const openCalendar = useCallback(() => {
    setCalendarOpen(true);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
  }, []);

  const openCalendar1 = useCallback(() => {
    setCalendar1Open(true);
  }, []);

  const closeCalendar1 = useCallback(() => {
    setCalendar1Open(false);
  }, []);

  return (
    <>
      <div className="relative bg-base-white w-full h-[2909px] overflow-hidden text-left text-17xl text-black font-montserrat">
        <Navbar />
        <b className="absolute top-[230px] left-[20%]">Profile User</b>
        <div className="absolute top-[309px] left-[20%] w-[100%] h-[1148px] text-center">
          <div className="absolute top-[979px] left-[0px] rounded-t-none rounded-b-xl bg-skyblue w-[100%] h-[169px]" />
          <div className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-none bg-skyblue w-[100%] h-[169px]" />
          <img
            className="absolute top-[118px] left-[20px] w-[310px] h-[310px]"
            alt=""
            src="/ellipse-12.svg"
          />
          <div className="absolute top-[35px] left-[1073px] w-[100px] h-[100px]">
            <img
              className="absolute top-[-1px] left-[-1px] w-[102px] h-[102px]"
              alt=""
              src="/ellipse-13.svg"
            />
            <img
              className="absolute top-[22px] left-[22px] w-14 h-14 object-cover"
              alt=""
              src="/edit-profile@2x.png"
            />
          </div>
          <div className="absolute top-[212px] left-[350px] w-[823px] h-[189px] flex flex-col items-start justify-center gap-[40px]">
            <div className="relative font-semibold">(Nama WP)</div>
            <div className="flex flex-row items-center justify-start gap-[15px] text-[28px]">
              <img
                className="relative w-10 h-10 object-cover"
                alt=""
                src="/gmail-logo@2x.png"
              />
              <div className="relative">email@gmail.com</div>
            </div>
            <div className="flex flex-row items-center justify-start text-5xl">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="relative w-[35px] h-[35px] object-cover"
                  alt=""
                  src="/location@2x.png"
                />
                <div className="relative">(Alamat WP)</div>
              </div>
            </div>
          </div>
          <div className="absolute top-[464px] left-[0px] w-[100%] h-[515px] text-left text-5xl">
            <div className="absolute top-[0px] left-[0px] bg-azure w-[100%] h-[515px]" />
            <b className="absolute top-[30.02px] left-[513px] text-13xl inline-block w-[175px] h-[46.83px]">
              Detail Info
            </b>
            <div className="absolute top-[106px] left-[81px] flex flex-col items-start justify-start">
              <div className="rounded-[10px] w-[1037px] flex flex-row items-end justify-start">
                <div className="relative bg-base-white box-border w-[328px] h-[58px] border-[1px] border-solid border-black" />
                <div className="relative bg-base-white box-border w-[709px] h-[58px] border-[1px] border-solid border-black" />
              </div>
              <div className="w-[1037px] flex flex-row items-end justify-start">
                <div className="relative bg-base-white box-border w-[328px] h-[58px] border-[1px] border-solid border-black" />
                <div className="relative bg-base-white box-border w-[709px] h-[58px] border-[1px] border-solid border-black" />
              </div>
              <div className="w-[1037px] flex flex-row items-end justify-start">
                <div className="relative bg-base-white box-border w-[328px] h-[58px] border-[1px] border-solid border-black" />
                <div className="relative bg-base-white box-border w-[709px] h-[58px] border-[1px] border-solid border-black" />
              </div>
              <div className="w-[1037px] flex flex-row items-end justify-start">
                <div className="relative bg-base-white box-border w-[328px] h-[58px] border-[1px] border-solid border-black" />
                <div className="relative bg-base-white box-border w-[709px] h-[58px] border-[1px] border-solid border-black" />
              </div>
              <div className="w-[1037px] flex flex-row items-end justify-start">
                <div className="relative bg-base-white box-border w-[328px] h-[58px] border-[1px] border-solid border-black" />
                <div className="relative bg-base-white box-border w-[709px] h-[58px] border-[1px] border-solid border-black" />
              </div>
              <div className="w-[1037px] flex flex-row items-end justify-start">
                <div className="relative bg-base-white box-border w-[328px] h-[58px] border-[1px] border-solid border-black" />
                <div className="relative bg-base-white box-border w-[709px] h-[58px] border-[1px] border-solid border-black" />
              </div>
            </div>
            <div className="absolute top-[178px] left-[101px] font-medium">
              Jabatan Pimpinan
            </div>
            <div className="absolute top-[236px] left-[103px] font-medium">
              PKP
            </div>
            <div className="absolute top-[294px] left-[100px] font-medium">{`Jenis Usaha `}</div>
            <div className="absolute top-[352px] left-[99px] font-medium">{`Nama Akunting `}</div>
            <div className="absolute top-[410px] left-[99px] font-medium">
              Kontak Akunting
            </div>
            <div className="absolute top-[120px] left-[103px] font-medium">
              Nama Pimpinan
            </div>
          </div>
        </div>
        <b className="absolute top-[1520px] left-[20%]">Riwayat Konsultasi</b>
        <div className="absolute top-[1596px] left-[20%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[60%] h-[58px] text-5xl">
          <div className="absolute top-[0px] left-[20%] bg-powderblue w-[100%] h-[58px]" />
          <div className="absolute top-[0px] left-[20%] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-dodgerblue w-[400px] h-[58px]" />
          <div className="absolute top-[14px] left-[0] w-[969px] h-[29px]">
            <div className="absolute top-[0px] left-[0px] font-medium">
              Menunggu Verifikasi
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_59.5px)] font-medium">
              Sedang Berjalan
            </div>
            <div className="absolute top-[0px] right-[0px] font-medium">
              Selesai
            </div>
          </div>
        </div>
        <div className="absolute top-[1731px] left-[20%] w-[60%] h-[369px] text-mini text-dimgray">
          <div className="absolute top-[0px] left-[1px] rounded-t-none rounded-b bg-base-white box-border w-[100%] h-[324px] border-[2px] border-solid border-black" />
          <div className="absolute top-[0px] left-[1px] rounded-t-none rounded-b bg-base-white box-border w-[100%] h-[369px] border-[2px] border-solid border-black" />
          <div className="absolute top-[111px] left-[39px] w-[370.99px] h-[44.69px] text-smi">
            <div className="absolute top-[26.81px] left-[38.17px] flex items-center w-[305.34px] h-[17.88px]">
              23 Januari 2023 | 10:00 AM
            </div>
            <div className="absolute top-[0px] left-[0px] w-[370.99px] h-[18.99px] text-mini">
              <div className="absolute top-[0px] left-[38.17px] font-semibold inline-block w-[332.82px] h-[16.76px]">{`Tanggal & Waktu Konsultasi`}</div>
              <img
                className="absolute top-[0px] left-[0px] w-[25.95px] h-[18.99px] overflow-hidden cursor-pointer"
                alt=""
                src="/materialsymbolscalendarmonthrounded.svg"
                onClick={openCalendar}
              />
            </div>
          </div>
          <div className="absolute top-[184px] left-[20%] w-[60%] h-[62.57px] text-smi">
            <div className="absolute top-[26.81px] left-[38.17px] whitespace-pre-wrap flex items-center w-[583.21px] h-[35.75px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  Lainnya | Jl. Lorem Ipsum No. 01, RT 01/02, Desa Amet,
                </p>
                <p className="m-0"> Kec. Consecture, Kab. Adipiscing, 123456</p>
              </span>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[386.26px] h-[20.11px] text-mini">
              <div className="absolute top-[0px] left-[38.17px] font-semibold inline-block w-[348.09px] h-[20.11px]">
                Lokasi dan Alamat Konsultasi
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[25.95px] h-[18.99px] overflow-hidden"
                alt=""
                src="/materialsymbolslocationon.svg"
              />
            </div>
          </div>
          <div className="absolute top-[35px] left-[20%] w-[60%] h-[44.69px]">
            <div className="absolute top-[0px] left-[0px] w-[219.85px] h-[20.11px]">
              <div className="absolute top-[0px] left-[38.17px] font-semibold inline-block w-[181.68px] h-[20.11px]">
                Jasa Konsultasi
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[25.95px] h-[18.99px] overflow-hidden"
                alt=""
                src="/materialsymbolswork.svg"
              />
            </div>
            <div className="absolute top-[26.81px] left-[38.17px] text-smi flex items-center w-[389.31px] h-[17.88px]">
              Penyusunan Manual Pajak Perusahaan
            </div>
          </div>
          <div className="absolute top-[45px] left-[709px] w-[410.69px] h-[44.69px]">
            <div className="absolute top-[0px] left-[0px] w-[283.97px] h-[20.11px]">
              <div className="absolute top-[0px] left-[38.17px] font-semibold inline-block w-[245.8px] h-[20.11px]">
                Link Alamat (GMaps)
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[25.95px] h-[18.99px] overflow-hidden"
                alt=""
                src="/materialsymbolslocationon.svg"
              />
            </div>
            <div className="absolute top-[26.81px] left-[38.17px] text-smi flex items-center w-[372.52px] h-[17.88px]">
              https://linkgooglemaps.com/12xxx457
            </div>
          </div>
          <div className="absolute top-[101px] left-[709px] w-[461.07px] h-[169.82px]">
            <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b bg-whitesmoke box-border w-[461.07px] h-[169.82px] border-[2px] border-solid border-black" />
            <div className="absolute top-[74.86px] left-[157.25px] font-semibold inline-block w-[145.04px] h-[20.11px]">
              Frame Maps
            </div>
          </div>
          <div className="absolute top-[304px] left-[0px] w-[100%] h-[45px] text-xl text-black">
            <img
              className="absolute top-[-0.5px] left-[0px] w-[100%] h-[1.29px]"
              alt=""
              src="/line-36.svg"
            />
            <div className="absolute top-[20px] left-[713px] font-medium">
              Total Biaya Konsultasi
            </div>
            <b className="absolute top-[16px] left-[1011px] text-5xl text-dimgray">
              Rp1.000.000
            </b>
          </div>
        </div>
        <div className="absolute top-[2143px] left-[120px] w-[1199px] h-[369px] text-mini text-dimgray">
          <div className="absolute top-[0px] left-[1px] rounded-t-none rounded-b bg-base-white box-border w-[1198px] h-[324px] border-[2px] border-solid border-black" />
          <div className="absolute top-[0px] left-[1px] rounded-t-none rounded-b bg-base-white box-border w-[1198px] h-[369px] border-[2px] border-solid border-black" />
          <div className="absolute top-[111px] left-[38.94px] w-[370.37px] h-[44.69px] text-smi">
            <div className="absolute top-[26.81px] left-[38.1px] flex items-center w-[304.84px] h-[17.88px]">
              23 Januari 2023 | 10:00 AM
            </div>
            <div className="absolute top-[0px] left-[0px] w-[370.37px] h-[18.99px] text-mini">
              <div className="absolute top-[0px] left-[38.1px] font-semibold inline-block w-[332.27px] h-[16.76px]">{`Tanggal & Waktu Konsultasi`}</div>
              <img
                className="absolute top-[0px] left-[0px] w-[25.91px] h-[18.99px] overflow-hidden cursor-pointer"
                alt=""
                src="/materialsymbolscalendarmonthrounded1.svg"
                onClick={openCalendar1}
              />
            </div>
          </div>
          <div className="absolute top-[184px] left-[38.94px] w-[620.34px] h-[62.57px] text-smi">
            <div className="absolute top-[26.81px] left-[38.1px] whitespace-pre-wrap flex items-center w-[582.23px] h-[35.75px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  Lainnya | Jl. Lorem Ipsum No. 01, RT 01/02, Desa Amet,
                </p>
                <p className="m-0"> Kec. Consecture, Kab. Adipiscing, 123456</p>
              </span>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[385.62px] h-[20.11px] text-mini">
              <div className="absolute top-[0px] left-[38.1px] font-semibold inline-block w-[347.51px] h-[20.11px]">
                Lokasi dan Alamat Konsultasi
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[25.91px] h-[18.99px] overflow-hidden"
                alt=""
                src="/materialsymbolslocationon1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[35px] left-[41.93px] w-[426.77px] h-[44.69px]">
            <div className="absolute top-[0px] left-[0px] w-[219.48px] h-[20.11px]">
              <div className="absolute top-[0px] left-[38.1px] font-semibold inline-block w-[181.38px] h-[20.11px]">
                Jasa Konsultasi
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[25.91px] h-[18.99px] overflow-hidden"
                alt=""
                src="/materialsymbolswork1.svg"
              />
            </div>
            <div className="absolute top-[26.81px] left-[38.1px] text-smi flex items-center w-[388.66px] h-[17.88px]">
              Penyusunan Manual Pajak Perusahaan
            </div>
          </div>
          <div className="absolute top-[45px] left-[707.82px] w-[410px] h-[44.69px]">
            <div className="absolute top-[0px] left-[0px] w-[283.5px] h-[20.11px]">
              <div className="absolute top-[0px] left-[38.1px] font-semibold inline-block w-[245.39px] h-[20.11px]">
                Link Alamat (GMaps)
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[25.91px] h-[18.99px] overflow-hidden"
                alt=""
                src="/materialsymbolslocationon2.svg"
              />
            </div>
            <div className="absolute top-[26.81px] left-[38.1px] text-smi flex items-center w-[371.9px] h-[17.88px]">
              https://linkgooglemaps.com/12xxx457
            </div>
          </div>
          <div className="absolute top-[101px] left-[707.82px] w-[460.3px] h-[169.82px]">
            <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b bg-whitesmoke box-border w-[460.3px] h-[169.82px] border-[2px] border-solid border-black" />
            <div className="absolute top-[74.85px] left-[156.99px] font-semibold inline-block w-[144.8px] h-[20.11px]">
              Frame Maps
            </div>
          </div>
          <div className="absolute top-[304px] left-[0px] w-[1198px] h-[45px] text-xl text-black">
            <img
              className="absolute top-[-0.5px] left-[0px] w-[1198px] h-[1.29px]"
              alt=""
              src="/line-361.svg"
            />
            <div className="absolute top-[20px] left-[712px] font-medium inline-block w-[248px]">
              Total Biaya Konsultasi
            </div>
            <b className="absolute top-[16px] left-[1009.32px] text-5xl inline-block text-dimgray w-[152.75px]">
              Rp1.000.000
            </b>
          </div>
        </div>
        <div className="absolute top-[1675px] left-[120px] text-xl font-medium">
          Page 2 of 3
        </div>
        <div className="absolute top-[2558px] left-[125px] w-[1195px] flex flex-row items-center justify-center gap-[300px]">
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
        <Footer icroundHome="/icroundhome.svg" footerFooterTop="2631px" />
      </div>
      {isCalendarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar}
        >
          <Calendar onClose={closeCalendar} />
        </PortalPopup>
      )}
      {isCalendar1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar1}
        >
          <Calendar onClose={closeCalendar1} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProfileUser;
