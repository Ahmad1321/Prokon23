const Calendar = ({ onClose }) => {
  return (
    <div className="relative rounded-lg bg-base-white shadow-[2px_16px_19px_rgba(0,_0,_0,_0.09)] overflow-hidden flex flex-col p-6 box-border items-start justify-start gap-[22px] max-w-full max-h-full text-center text-[14px] text-base-gray-80 font-inter">
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-between">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src="/icons.svg"
        />
        <div className="relative leading-[14px]">September 2021</div>
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src="/icons1.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-3xs text-base-gray-40">
        <div className="w-[30px] h-5 flex flex-row items-center justify-center">
          <div className="relative tracking-[1.5px] leading-[12px] uppercase">
            SUN
          </div>
        </div>
        <div className="w-[30px] h-5 flex flex-row items-center justify-center">
          <div className="relative tracking-[1.5px] leading-[12px] uppercase">{`MON `}</div>
        </div>
        <div className="w-[30px] h-5 flex flex-row items-center justify-center">
          <div className="relative tracking-[1.5px] leading-[12px] uppercase">
            TUE
          </div>
        </div>
        <div className="w-[30px] h-5 flex flex-row items-center justify-center">
          <div className="relative tracking-[1.5px] leading-[12px] uppercase">
            WED
          </div>
        </div>
        <div className="w-[30px] h-5 flex flex-row items-center justify-center">
          <div className="relative tracking-[1.5px] leading-[12px] uppercase">
            THU
          </div>
        </div>
        <div className="w-[30px] h-5 flex flex-row items-center justify-center">
          <div className="relative tracking-[1.5px] leading-[12px] uppercase">
            FRI
          </div>
        </div>
        <div className="w-[30px] h-5 flex flex-row items-center justify-center">
          <div className="relative tracking-[1.5px] leading-[12px] uppercase">
            SAT
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              1
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              2
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              3
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              4
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              5
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              6
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              7
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              8
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              9
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              10
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              11
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              12
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              13
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              14
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              15
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              16
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              17
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              18
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-base-white">
            <div className="rounded-[29px] bg-secondary-100 w-[30px] h-[30px] flex flex-col items-center justify-center">
              <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
                19
              </div>
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              20
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              21
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              22
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              23
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              24
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              25
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              26
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              27
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              28
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              29
            </div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px]">30</div>
          </div>
          <div className="w-[30px] h-[30px] flex flex-col items-center justify-center">
            <div className="relative leading-[18px] inline-block w-5 h-[15px] shrink-0">
              31
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
