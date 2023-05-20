import { useCallback } from "react";
import Footer from "../components/Footer";
import ClientForm from "../components/ClientForm";
import { useNavigate } from "react-router-dom";
import NavbarLanding from "../components/NavbarBL";

const LandingPage = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate("/our-services");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/jadwal-konsultasi");
  }, [navigate]);

  return (
    <div className="relative bg-base-white w-full h-[3947px] overflow-y-auto text-center text-29xl text-black font-montserrat">
      <Footer icroundHome="/icroundhome.svg" footerFooterTop="3669px" />
      <ClientForm />
      <div
        className="absolute top-[2746px] left-[81px] w-[1280px] h-[498px]"
        data-scroll-to="ourServicesContainer"
      >
        <div className="absolute top-[0px] left-[471px] font-semibold">
          Our Services
        </div>
        <div className="absolute top-[107px] left-[0px] w-[1280px] h-[306px] text-5xl">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-powderblue w-[413px] h-[306px] flex flex-col py-7 px-[38px] box-border items-center justify-center gap-[20px]">
            <img
              className="relative w-20 h-[70px] object-cover"
              alt=""
              src="/organization@2x.png"
            />
            <div className="relative font-semibold inline-block w-[336px]">
              Penyusunan Manual Pajak Perusahaan
            </div>
            <div className="relative text-base inline-block w-[356px] h-[85px] shrink-0">
              Membantu klien perusahaan menyusun pedoman perpajakan yang berisis
              kebijakan, strategi, prosedur, pelaporan, dan petunjuk teknis
              perhitungan pajak.
            </div>
          </div>
          <div className="absolute top-[0px] left-[434px] rounded-8xs bg-powderblue w-[413px] h-[306px] flex flex-col py-7 px-[38px] box-border items-center justify-center gap-[20px]">
            <img
              className="relative w-20 h-[79px] object-cover"
              alt=""
              src="/block-chain@2x.png"
            />
            <div className="relative font-semibold inline-block w-[336px]">
              Penyusunan Transfer Pricing Documentation
            </div>
            <div className="relative text-base inline-block w-[356px] h-[85px] shrink-0">
              Memberikan masukan pada dokumen dan strategi yang diperlukan untuk
              mencegah kerugian dari transaksi pihak terkait dan skenario
              transfer pricing.
            </div>
          </div>
          <div className="absolute top-[0px] left-[867px] rounded-8xs bg-powderblue w-[413px] h-[306px] flex flex-col py-7 px-[38px] box-border items-center justify-center gap-[20px]">
            <img
              className="relative w-20 h-[70px] object-cover"
              alt=""
              src="/scales@2x.png"
            />
            <div className="relative font-semibold inline-block w-[336px]">
              Penyusunan Asistensi Pajak
            </div>
            <div className="relative text-base inline-block w-[356px] h-[85px] shrink-0">
              Membantu klien perusahaan dalam asistensi pemeriksaan pajak,
              keberatan pajak, banding pajak, kepatuhan/compliance pajak, dan
              jasa advisory pajak.
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-[15px] bg-royalblue-100 absolute top-[444px] left-[562px] rounded-mini flex flex-row items-start justify-start hover:box-border hover:border-[1px] hover:border-solid hover:border-black"
          onClick={onLoginClick}
        >
          <div className="relative text-xl font-semibold font-montserrat text-base-white text-left">
            Read more...
          </div>
        </button>
      </div>
      <div className="absolute top-[2018px] left-[0px] w-[1440px] h-[653px]">
        <div
          className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[1440px] h-[653px]"
          data-scroll-to="rectangle"
        />
        <div className="absolute top-[35px] left-[149px] flex flex-col items-center justify-start gap-[50px]">
          <div className="relative font-semibold">Our Team</div>
          <div className="flex flex-row items-center justify-center gap-[40px] text-5xl">
            <div className="rounded-8xs bg-base-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col py-6 px-[46px] items-center justify-center gap-[22px]">
              <img
                className="relative w-[250px] h-[250px] object-cover"
                alt=""
                src="/ellipse-11@2x.png"
              />
              <div className="relative">
                <p className="m-0">BUDI INDRATNO,</p>
                <p className="m-0">SE., M.Ak., BKP., CTAP.</p>
              </div>
              <div className="relative text-xl text-darkslategray">
                Managing Partner
              </div>
              <img
                className="relative w-[113px] h-[29px]"
                alt=""
                src="/socmed.svg"
              />
            </div>
            <div className="rounded-8xs bg-base-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col py-6 px-[33px] items-center justify-center gap-[22px]">
              <img
                className="relative w-[250px] h-[250px] object-cover"
                alt=""
                src="/ellipse-111@2x.png"
              />
              <div className="relative">
                <p className="m-0">BAMBANG ARIBOWO,</p>
                <p className="m-0">SE., Ak., CA., CTA., ACPA.</p>
              </div>
              <div className="relative text-xl text-darkslategray">Partner</div>
              <img
                className="relative w-[113px] h-[29px]"
                alt=""
                src="/socmed.svg"
              />
            </div>
            <div className="rounded-8xs bg-base-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col py-6 px-[29px] items-center justify-start gap-[25px] text-xl">
              <img
                className="relative w-[250px] h-[250px] object-cover"
                alt=""
                src="/ellipse-112@2x.png"
              />
              <div className="relative">
                <p className="m-0">ERFAN ERFIANSYAH,</p>
                <p className="m-0">SE., M.Ak., CTA., ACPA., CPRM.</p>
              </div>
              <div className="relative text-darkslategray">Partner</div>
              <img
                className="relative w-[113px] h-[29px]"
                alt=""
                src="/socmed1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1486px] left-[80px] w-[1280px] flex flex-row items-center justify-center gap-[50px] text-justify text-5xl">
        <div className="relative flex items-center w-[897px] h-[445px] shrink-0">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">{`Kantor Konsultan Pajak Budi Indratno adalah kantor konsultan pajak yang telah mendapat Izin Praktik Konsultan Pajak dari Direktur Jenderal Pajak dengan Register Level B dan Izin Kuasa Hukum Pajak dari Pengadilan Pajak yang siap melayani klien baik badan maupun perseorangan dalam bidang Accounting Service, Auditing, Tax Planning, Konsultasi dan Pemeriksaan Pajak. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Pengalaman staf kami yang telah bekerja lebih dari 10 tahun
              sebagai konsultan pajak, konsultan akuntansi dan auditor pada
              kantor akuntan publik, membuat kami mampu memahami kewajiban
              perpajakan, baik secara konsep maupun praktek sehingga menjadi
              bekal utama kami untuk mendampingi klien dalam menghadapi
              masalah-masalah perpajakan serta dapat memberikan solusi
              komprehensif atas seluruh permasalahan perpajakan perusahaan anda.
            </p>
          </span>
        </div>
        <img
          className="relative w-[328px] h-[313px] object-cover"
          alt=""
          src="/logi-bi-baru-1@2x.png"
        />
      </div>
      <div className="absolute top-[782px] left-[81px] w-[1280px] h-[617px] text-13xl">
        <img
          className="absolute top-[0px] left-[0px] w-[413px] h-[617px] object-cover"
          alt=""
          src="/buttonbookkeepercalculatingwhitecalculator-1@2x.png"
        />
        <div className="absolute top-[0px] left-[650px] text-29xl font-semibold inline-block w-[522px]">
          Get Your Benefit
        </div>
        <div className="absolute top-[91px] left-[650px] text-xl inline-block w-[522px]">{`Anda akan mendapat keuntungan atau benefit berikut jika menjadi client kami : `}</div>
        <div className="absolute top-[210px] left-[522px] w-[346px] h-[407px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-powderblue w-[346px] h-[407px]" />
          <img
            className="absolute top-[17px] left-[129px] rounded-xl w-[88px] h-[82px] object-cover"
            alt=""
            src="/intelligence@2x.png"
          />
          <div className="absolute top-[124px] left-[157px]">01</div>
          <div className="absolute top-[185px] left-[72px] text-xl font-semibold">
            Pengalaman Tinggi
          </div>
          <div className="absolute top-[219px] left-[20px] text-base text-justify inline-block w-[305px] h-[166px]">
            Berpengalaman dalam bidang perpajakan selama lebih dari 15 tahun
            baik sebagai konsultan pajak maupun auditor pada kantor akuntan
            publik yang pernah menangani klien dari berbagai jenis usaha yang
            berbeda baik sekala kecil maupun besar.
          </div>
        </div>
        <div className="absolute top-[210px] left-[934px] w-[346px] h-[407px]">
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-powderblue w-[346px] h-[407px]" />
          <div className="absolute top-[124px] left-[153px]">02</div>
          <img
            className="absolute top-[17px] left-[129px] w-[88px] h-[82px] object-cover"
            alt=""
            src="/protect@2x.png"
          />
          <div className="absolute top-[185px] left-[95px] text-xl font-semibold">
            Jaminan Aman
          </div>
          <div className="absolute top-[219px] left-[20px] text-base text-justify inline-block w-[305px] h-[166px]">
            Terhindar dari resiko kesalahan perpajakan dikemudian hari, sehingga
            wajib pajak dapat fokus kepada usaha dan pengembangan bisnisnya.
          </div>
        </div>
      </div>
      <div className="absolute top-[195px] left-[-287px] w-[1990px] h-[500px] text-darkslategray">
        <img
          className="absolute top-[0px] left-[287px] w-[1990px] h-[500px] object-cover"
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
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[430px] h-[60px]"
            onClick={onGroupButtonClick}
          >
            <div className="absolute top-[18px] left-[58px] text-xl font-montserrat text-darkslategray text-center">
              Buat Janji Konsultasi Sekarang!
            </div>
            <div className="absolute top-[0px] left-[0px] box-border w-[430px] h-[60px] border-[3px] border-solid border-darkslategray" />
          </button>
        </div>
      </div>
      <NavbarLanding />
      <img
        className="absolute top-[623px] left-[1289px] rounded-tl-81xl rounded-tr-3xs rounded-b-81xl w-[72px] h-[72px] overflow-hidden"
        alt=""
        src="/floating-button-help.svg"
      />
    </div>
  );
};

export default LandingPage;
