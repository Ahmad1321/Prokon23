import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavbarKonsultasi from "../components/NavbarBL";
import Footer from "../components/Footer";

const OurServices = () => {
  const navigate = useNavigate();

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

  const onGroupButtonClick = useCallback(() => {
    navigate("/jadwal-konsultasi");
  }, [navigate]);

  return (
    <div className="relative bg-base-white w-full h-[3481px] overflow-hidden text-center text-5xl text-black font-montserrat">
      <NavbarKonsultasi
        onNavbarMenuTextClick={onNavbarMenuTextClick}
        onNavbarMenuText1Click={onNavbarMenuText1Click}
        onNavbarMenuText2Click={onNavbarMenuText2Click}
        onNavbarMenuText3Click={onNavbarMenuText3Click}
        onAccountContainerClick={onAccountContainerClick}
        onLoginContainerClick={onLoginContainerClick}
      />
      <div className="absolute top-[195px] left-[-228px] w-[1990px] h-[500px] text-29xl text-darkslategray">
        <img
          className="absolute top-[0px] left-[228px] w-[1990px] h-[500px] object-cover"
          alt=""
          src="/index-img-1@2x.png"
        />
        <div className="absolute top-[104px] left-[679px] flex flex-col items-center justify-center gap-[40px]">
          <div className="relative font-semibold inline-block w-[656px] h-[54px] shrink-0">
            KKP Budi Indratno
          </div>
          <div className="relative text-17xl inline-block w-[649px] h-[97px] shrink-0">
            <p className="m-0">Izin Praktek KEP-3229/IP.B/PJ/2016</p>
            <p className="m-0">Register License Level B</p>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[333px] h-[60px] [&_.group-child3]:hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            onClick={onGroupButtonClick}
          >
            <div className="absolute top-[15px] left-[0px] text-5xl font-montserrat text-darkslategray text-center flex items-center justify-center w-[333px]">
              Konsultasi Sekarang!
            </div>
            <div className="group-child3 absolute top-[0px] left-[0px] box-border w-[333px] h-[60px] border-[3px] border-solid border-darkslategray" />
          </button>
        </div>
      </div>
      <b className="absolute top-[754px] left-[561px] text-29xl">
        Our Services
      </b>
      <div className="absolute top-[872px] left-[80px] rounded-11xl bg-powderblue w-[1280px] h-[250px]">
        <div className="absolute top-[35px] left-[72px] flex flex-row items-center justify-start gap-[100px]">
          <div className="flex flex-col items-center justify-center gap-[20px]">
            <img
              className="relative w-[100px] h-[100px] object-cover"
              alt=""
              src="/organization1@2x.png"
            />
            <div className="relative font-semibold inline-block w-[352px]">
              Penyusunan Manual Pajak Perusahaan
            </div>
          </div>
          <div className="relative inline-block w-[703px] h-[90px] shrink-0">
            Membantu klien perusahaan menyusun pedoman perpajakan yang berisis
            kebijakan, strategi, prosedur, pelaporan, dan petunjuk teknis
            perhitungan pajak.
          </div>
        </div>
      </div>
      <div className="absolute top-[1181px] left-[80px] rounded-11xl bg-powderblue w-[1280px] h-[250px]">
        <div className="absolute top-[36px] left-[62px] flex flex-row items-center justify-start gap-[100px]">
          <div className="flex flex-col items-center justify-center gap-[20px]">
            <img
              className="relative w-[100px] h-[100px] object-cover"
              alt=""
              src="/block-chain1@2x.png"
            />
            <div className="relative font-semibold inline-block w-[352px]">
              Penyusunan Transfer Pricing Documentation
            </div>
          </div>
          <div className="relative inline-block w-[703px] h-[90px] shrink-0">
            Memberikan masukan pada dokumen dan strategi yang diperlukan untuk
            mencegah kerugian dari transaksi pihak terkait dan skenario transfer
            pricing.
          </div>
        </div>
      </div>
      <div className="absolute top-[1490px] left-[80px] rounded-11xl bg-powderblue w-[1280px] h-[1640px]">
        <div className="absolute top-[35px] left-[72px] flex flex-row items-center justify-start gap-[100px]">
          <div className="flex flex-col items-center justify-center gap-[20px]">
            <img
              className="relative w-[100px] h-[100px] object-cover"
              alt=""
              src="/scales1@2x.png"
            />
            <div className="relative font-semibold inline-block w-[352px]">
              Penyusunan Asistensi Pajak
            </div>
          </div>
          <div className="relative inline-block w-[703px] h-[90px] shrink-0">
            Membantu klien perusahaan dalam asistensi pemeriksaan pajak,
            keberatan pajak, banding pajak, kepatuhan/compliance pajak, dan jasa
            advisory pajak.
          </div>
        </div>
        <div className="absolute top-[223.5px] left-[71.5px] box-border w-[1156px] h-px border-t-[1px] border-solid border-black" />
        <div className="absolute top-[264px] left-[42px] flex flex-row items-center justify-start gap-[40px]">
          <div className="rounded-mini bg-base-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[371px] h-[306px] flex flex-col py-7 px-[38px] items-center justify-center gap-[20px] border-[1px] border-solid border-black">
            <div className="relative font-semibold inline-block w-[336px]">
              Jasa Asistensi Pemeriksaan Pajak
            </div>
            <div className="relative text-base inline-block w-[342px] h-[85px] shrink-0">
              Pekerjaaan asistensi ini mencakup antara lain membantu menyiapkan
              dokumen untuk pemeriksaan pajak, menjelaskan dan menjawab
              pertanyaan pemeriksa, hingga memberikan tanggapan dan diskusi
              hasil pemeriksaan dengan pemeriksa pajak.
            </div>
          </div>
          <div className="rounded-mini bg-base-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[375px] h-[306px] flex flex-col py-7 px-[38px] items-center justify-center gap-[20px] border-[1px] border-solid border-black">
            <div className="relative font-semibold inline-block w-[336px]">
              Jasa Asistensi Keberatan Pajak
            </div>
            <div className="relative text-base inline-block w-[347px] h-[85px] shrink-0">
              Kami akan mendampingi klien mulai dari menyiapkan surat keberatan,
              menyiapkan dokumen yang diminta penelaah keberatan hingga menemui
              penelaah keberatan untuk menjelaskan keberatan yang diajukan
              klien.
            </div>
          </div>
          <div className="rounded-mini bg-base-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[375px] h-[306px] flex flex-col py-7 px-[38px] items-center justify-center gap-[20px] border-[1px] border-solid border-black">
            <div className="relative font-semibold inline-block w-[336px]">
              Jasa Asistensi Banding Pajak
            </div>
            <div className="relative text-base inline-block w-[346px] h-[85px] shrink-0">
              Dalam proses banding ini, kami akan membantu klien dalam
              menyiapkan surat banding, membuat surat bantahan, menyiapkan bukti
              di pengadilan hingga beracara sebagai kuasa hukum di Pengadilan
              Pajak.
            </div>
          </div>
        </div>
        <div className="absolute top-[888px] left-[42px] w-[1201px] h-[697px]">
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-base-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1201px] h-[697px] border-[1px] border-solid border-black" />
          <div className="absolute top-[38px] left-[calc(50%_-_172.5px)] h-[174.92px] flex flex-row items-center justify-center">
            <div className="relative w-[344.01px] h-[130.04px]">
              <div className="absolute top-[0px] left-[3.02px] font-semibold inline-block w-[337.97px]">
                Jasa Advisory Pajak
              </div>
              <div className="absolute top-[45.04px] left-[0px] text-base inline-block w-[344.01px] h-[85px]">
                Jasa konsultasi pajak meliputi bantuan kepada klien untuk
                mencapai pemahaman yang baik di bidang perpajakan, serta
                menciptakan manajemen pajak yang efektif,
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[613px] left-[42px] w-[1201px] h-[233px]">
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-base-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1201px] h-[233px] border-[1px] border-solid border-black" />
          <div className="absolute top-[35px] left-[43px] w-[1108px] flex flex-row items-center justify-center gap-[245px]">
            <div className="relative w-[344.01px] h-[163px]">
              <div className="absolute top-[0px] left-[3.02px] font-semibold inline-block w-[337.97px]">
                Jasa Kepatuhan / Compilance Pajak
              </div>
              <div className="absolute top-[78px] left-[0px] text-base inline-block w-[344.01px] h-[85px]">
                Budi Indratno Tax Solution memberikan jasa kepatuhan pajak untuk
                membantu wajib pajak mematuhi ketentuan perpajakannya
              </div>
            </div>
            <a className="relative text-[inherit] font-inherit text-[inherit] text-justify inline-block w-[543px] h-[171px] shrink-0 [text-decoration:none]">
              <ul className="m-0 pl-[3px]">
                <li className="mb-0">{`Menyiapkan perhitungan pajak, `}</li>
                <li className="mb-0">{`Melaporkan SPT Masa atau Tahunan `}</li>
                <li className="mb-0">{`Mengurus pembayaran pajak `}</li>
                <li className="mb-0">
                  Pengurusan Restitusi/ Pengembalian pajak
                </li>
                <li>Menandatangani laporan pajak.atas nama klien</li>
              </ul>
            </a>
          </div>
        </div>
        <div className="absolute top-[1174px] left-[calc(50%_-_563px)] flex flex-row items-center justify-center gap-[55px] text-left text-xl">
          <div className="flex flex-col items-center justify-center gap-[20px]">
            <div className="relative w-[165px] h-[165px]">
              <img
                className="absolute top-[0px] left-[0px] w-[165px] h-[165px]"
                alt=""
                src="/ellipse-20.svg"
              />
              <img
                className="absolute top-[33px] left-[32px] w-[100px] h-[100px] object-cover"
                alt=""
                src="/consultation@2x.png"
              />
            </div>
            <b className="relative">Tax Consulting</b>
            <div className="relative text-base text-center inline-block w-60 h-[134px] shrink-0">
              Bimbingan untuk wajib pajak agar patuh perpajakan secara efisien,
              menjelaskan peraturan terbaru, dan membantu klarifikasi surat
              himbauan kantor pajak.
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="relative w-[165px] h-[165px]">
              <img
                className="absolute top-[0px] left-[0px] w-[165px] h-[165px]"
                alt=""
                src="/ellipse-20.svg"
              />
              <img
                className="absolute top-[33px] left-[32px] w-[100px] h-[100px] object-cover"
                alt=""
                src="/planning-skill@2x.png"
              />
            </div>
            <b className="relative">Tax Planning</b>
            <div className="relative text-mini text-center inline-block w-60 h-[134px] shrink-0">
              Program perencanaan perpajakan kami membantu klien mencapai
              efisiensi dan efektivitas pajak, mengurangi risiko kesalahan dan
              sanksi/denda, serta menyelaraskan manajemen perpajakan dengan
              kebijakan keuangan klien.
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="relative w-[165px] h-[165px]">
              <img
                className="absolute top-[0px] left-[0px] w-[165px] h-[165px]"
                alt=""
                src="/ellipse-20.svg"
              />
              <img
                className="absolute top-[33px] left-[33px] w-[100px] h-[100px] object-cover"
                alt=""
                src="/bill@2x.png"
              />
            </div>
            <b className="relative">Tax Review</b>
            <div className="relative text-base text-center inline-block w-60 h-[134px] shrink-0">
              Jasa telaah pajak mengevaluasi transaksi perusahaan selama
              setahun, mereview kewajiban dan hak perpajakan dari transaksi
              normal dan khusus.
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="relative w-[165px] h-[165px]">
              <img
                className="absolute top-[0px] left-[0px] w-[165px] h-[165px]"
                alt=""
                src="/ellipse-20.svg"
              />
              <img
                className="absolute top-[33px] left-[33px] w-[100px] h-[100px] object-cover"
                alt=""
                src="/council-tax@2x.png"
              />
            </div>
            <b className="relative">Tax Attorney</b>
            <div className="relative text-base text-center inline-block w-60 h-[134px] shrink-0">
              Kuasa hukum pajak mendampingi para pihak dalam sengketa perpajakan
              di Pengadilan Pajak untuk mempercepat proses peradilan.
            </div>
          </div>
        </div>
        <div className="absolute top-[1128px] left-[87px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1106px] h-0.5 border-t-[2px] border-solid border-black" />
      </div>
      <Footer icroundHome="/icroundhome2.svg" footerFooterTop="3203px" />
    </div>
  );
};

export default OurServices;
