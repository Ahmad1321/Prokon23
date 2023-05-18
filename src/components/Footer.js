const Footer = () => {
  return (
    <div className="absolute bottom-[0px] left-[0px] w-[100%] h-[278px] text-center text-xl text-black font-montserrat">
      <div className="absolute top-[0px] left-[0px] bg-powderblue w-[100%] flex flex-col py-[33px] px-36 box-border items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-[500px]">
          <div className="relative w-[432px] h-[142.5px]">
            <div className="absolute top-[0px] left-[0px] font-semibold">
              KKP Budi Indratno
            </div>
            <div className="absolute top-[46.5px] left-[0px] text-left inline-block w-[432px]">
              <p className="m-0">Siap melayani klien baik badan maupun</p>
              <p className="m-0">{`perseorangan dalam bidang Accounting `}</p>
              <p className="m-0">{`Service, Auditing, Tax Planning, Konsultasi `}</p>
              <p className="m-0">dan Pemeriksaan Pajak.</p>
            </div>
          </div>
          <div className="relative w-[346px] h-[151px] text-left">
            <div className="absolute top-[0px] left-[0px] font-semibold text-center">
              Contact Us
            </div>
            <div className="absolute top-[38px] left-[0px] w-[346px] h-6">
              <div className="absolute top-[0px] left-[39px]">
                kkp.budiindratno1@gmail.com
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                alt=""
                src="/icroundemail.svg"
              />
            </div>
            <div className="absolute top-[79px] left-[0px] w-[345px] h-[72px]">
              <div className="absolute top-[0px] left-[40px]">
                <p className="m-0">{`Jl. Encep Kartawiria Gg. SMK `}</p>
                <p className="m-0">{`PGRI 2 No. D 04 RT. 02/RW. 18, `}</p>
                <p className="m-0">Kota Cimahi, Jawa Barat</p>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                alt=""
                src="/icroundhome.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[218px] left-[0px] w-[100%] h-[60px] text-base-white">
        <div className="absolute top-[0px] left-[0px] bg-steelblue w-[100%] h-[60px]" />
        <div className="absolute top-[18px] left-[40%]">
          <span className="font-montserrat">Copyright @ 2023</span>
          <span className="font-semibold">
            {` `}
            <span className="[text-decoration:underline]">
              KKP Budi Indratno
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
