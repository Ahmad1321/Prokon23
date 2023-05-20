import { useState, useRef, useCallback } from "react";
import "antd/dist/antd.min.css";
import { TextField, FormControlLabel, Radio } from "@mui/material";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Calendar from "../components/Calendar";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import NavbarKonsultasi from "../components/NavbarBL";
import Footer from "../components/Footer";

const JadwalKonsultasi = () => {
  const materialSymbolscalendarMontRef = useRef(null);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const navigate = useNavigate();

  const openCalendar = useCallback(() => {
    setCalendarOpen(true);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
  }, []);

  const onNavbarMenuTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavbarMenuText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourServicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavbarMenuText2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='ourClientContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNavbarMenuText3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAccountContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onLoginContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <div className="relative bg-base-white w-full h-[1675px] overflow-hidden text-left text-base text-black font-montserrat">
        <NavbarKonsultasi
          onNavbarMenuTextClick={onNavbarMenuTextClick}
          onNavbarMenuText1Click={onNavbarMenuText1Click}
          onNavbarMenuText2Click={onNavbarMenuText2Click}
          onNavbarMenuText3Click={onNavbarMenuText3Click}
          onAccountContainerClick={onAccountContainerClick}
          onLoginContainerClick={onLoginContainerClick}
        />
        <Footer icroundHome="/icroundhome1.svg" footerFooterTop="1397px" />
        <div className="absolute top-[249px] left-[121px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[824px] h-[274px]">
          <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-azure box-border w-[826px] h-[276px] border-[1px] border-solid border-black" />
          <div className="absolute top-[73px] left-[25px] rounded-3xs w-[775px] h-[201px]">
            <Dropdown
              className="absolute top-[-3px] left-[0px]"
              overlay={
                <Menu>
                  {[
                    { value: "Penyusunan Manual Pajak Perusahaan" },
                    { value: "Penyusunan Transfer Pricng Documentation" },
                    { value: "Penyusunan Asistensi Pajak" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button onClick={(e) => e.preventDefault()}>
                {`Pilih jasa konsultasi `}
                <DownOutlined />
              </Button>
            </Dropdown>
            <b className="absolute top-[-53px] left-[1px] text-xl">
              Jasa Konsultasi
            </b>
            <div className="absolute top-[78px] left-[2px] font-semibold">
              Keterangan Jasa:
            </div>
            <div className="absolute top-[114px] left-[2px] inline-block w-[773px]">
              Membantu klien perusahaan menyusun pedoman perpajakan yang berisis
              kebijakan, strategi, prosedur, pelaporan, dan petunjuk teknis
              perhitungan pajak.
            </div>
          </div>
        </div>
        <div className="absolute top-[577px] left-[122px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[822px] h-[295px]">
          <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-azure box-border w-[824px] h-[297px] border-[1px] border-solid border-black" />
          <div className="absolute top-[24px] left-[25px] w-[773px] h-[103px]">
            <div className="absolute top-[49px] left-[0px] w-[773px] h-[54px]">
              <div className="absolute top-[-1px] left-[-1px] rounded-mini bg-base-white box-border w-[775px] h-14 border-[1px] border-solid border-black" />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[12px] left-[721px] w-[30px] h-[30px] overflow-hidden"
                ref={materialSymbolscalendarMontRef}
                onClick={openCalendar}
              >
                <img
                  className="absolute h-[83.33%] w-[81.5%] top-[6.67%] right-[8.75%] bottom-[10%] left-[9.75%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector2.svg"
                />
              </button>
              <div className="absolute top-[17px] left-[28px]">
                Pilih tanggal
              </div>
            </div>
            <b className="absolute top-[0px] left-[1px] text-xl">
              Tanggal Konsultasi
            </b>
          </div>
          <div className="absolute top-[157px] left-[25px] w-[773px] h-[103px] text-xl">
            <Dropdown
              className="absolute top-[48px] left-[0px]"
              overlay={
                <Menu>
                  {[
                    { value: "08:00 - 09:00" },
                    { value: "10:00-11:00" },
                    { value: "13:00-14:00" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button onClick={(e) => e.preventDefault()}>
                {`Pilih waktu konsultasi `}
                <DownOutlined />
              </Button>
            </Dropdown>
            <b className="absolute top-[0px] left-[1px]">Waktu Konsultasi</b>
          </div>
        </div>
        <div className="absolute top-[925px] left-[122px] w-[822px] h-[417px] text-xl">
          <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-azure box-border w-[824px] h-[419px] border-[1px] border-solid border-black" />
          <div className="absolute top-[159px] left-[25px] w-[773px] h-[100px]">
            <TextField
              className="[border:none] bg-[transparent] absolute top-[46px] left-[0px]"
              sx={{ width: 773 }}
              color="primary"
              variant="outlined"
              type="text"
              id="alamatk"
              label="Tulis alamat konsultasi..."
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <b className="absolute top-[0px] left-[1px]">Alamat Konsultasi</b>
          </div>
          <div className="absolute top-[290px] left-[25px] w-[773px] h-[100px]">
            <TextField
              className="[border:none] bg-[transparent] absolute top-[46px] left-[0px]"
              sx={{ width: 773 }}
              color="primary"
              variant="outlined"
              type="text"
              id="linkalamat"
              label="Tulis link alamat konsultasi..."
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <b className="absolute top-[0px] left-[1px]">Link Alamat (Gmaps)</b>
          </div>
          <div className="absolute top-[25px] left-[25px] w-[254px] h-[103px]">
            <div className="absolute top-[48px] left-[0px] w-[254px] h-[55px]">
              <FormControlLabel
                className="absolute top-[1px] left-[140px]"
                label="Lainnya"
                labelPlacement="end"
                control={<Radio id="lk" color="primary" size="medium" />}
                id="lk"
              />
              <FormControlLabel
                className="absolute top-[0px] left-[0px]"
                label="Kantor"
                labelPlacement="end"
                control={<Radio id="lk" color="primary" size="medium" />}
                id="lk"
              />
            </div>
            <b className="absolute top-[0px] left-[1px]">Lokasi Konsultasi</b>
          </div>
        </div>
        <div className="absolute top-[250px] left-[975px] w-[345px] h-[151px] text-center text-base-white">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-azure shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[345px] h-[151px] border-[1px] border-solid border-black" />
          <div className="absolute top-[88px] left-[20px] w-[306px] h-10">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-royalblue-100 w-[306px] h-10" />
            <div className="absolute top-[8px] left-[69px]">
              Buat Janji Konsultasi
            </div>
          </div>
          <div className="absolute top-[17px] left-[19px] w-[285px] h-[43px] text-left text-black">
            <div className="absolute top-[0px] left-[1px]">
              Biaya Konsultasi
            </div>
            <div className="absolute top-[26px] left-[0px] text-sm">
              *Bayar ketika selesai atau saat konsultasi
            </div>
          </div>
        </div>
      </div>
      {isCalendarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom left"
          relativeLayerRef={materialSymbolscalendarMontRef}
          onOutsideClick={closeCalendar}
        >
          <Calendar onClose={closeCalendar} />
        </PortalPopup>
      )}
    </>
  );
};

export default JadwalKonsultasi;
