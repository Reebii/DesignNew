import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ChartFull = () => {
  const navigate = useNavigate();

  const onChartFullContainerClick = useCallback(() => {
    navigate("/android-large-9");
  }, [navigate]);

  return (
    <div
      className="absolute top-[172.5px] left-[16px] w-[343px] h-[90px] flex flex-col items-start justify-start cursor-pointer text-left text-smi-2 text-black font-montserrat"
      onClick={onChartFullContainerClick}
    >
      <div className="w-[343px] flex flex-col items-start justify-start">
        <div className="w-[328.8px] relative h-[90.3px]">
          <img
            className="absolute top-[0.5px] left-[0.9px] w-[327.8px] h-[70.2px]"
            alt=""
            src="/back-lines.svg"
          />
          <div className="absolute top-[3.1px] left-[0px] text-sm-2">
            900CAL
          </div>
          <div className="absolute top-[75.3px] left-[2px] inline-block w-10">
            12:00
          </div>
          <div className="absolute top-[75.3px] left-[83.9px] inline-block w-[41px]">
            6:00
          </div>
          <div className="absolute top-[75.3px] left-[166.8px] inline-block w-[38px]">
            12:00
          </div>
          <div className="absolute top-[75.3px] left-[249.7px] inline-block w-[35.1px]">
            6:00
          </div>
          <div className="absolute top-[1px] left-[152.7px] rounded-t-[1.53px] rounded-b-none bg-limegreen-200 box-border w-[2.8px] h-[70.2px] border-[0.4px] border-solid border-limegreen-100" />
          <div className="absolute top-[11.2px] left-[152.7px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[3.1px] h-[60.1px]" />
          <div className="absolute top-[40.7px] left-[156.5px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[30.5px]" />
          <div className="absolute top-[62.1px] left-[166.7px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[9.2px]" />
          <div className="absolute top-[53.9px] left-[190.9px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[17.3px]" />
          <div className="absolute top-[36.6px] left-[194.6px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[34.6px]" />
          <div className="absolute top-[61.1px] left-[198.4px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[10.2px]" />
          <div className="absolute top-[64.1px] left-[202.1px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[7.1px]" />
          <div className="absolute top-[62.1px] left-[217.9px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[9.2px]" />
          <div className="absolute top-[62.1px] left-[234.7px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[9.2px]" />
          <div className="absolute top-[45.8px] left-[255.2px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[25.4px]" />
          <div className="absolute top-[63.1px] left-[258.9px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[8.1px]" />
          <div className="absolute top-[37.7px] left-[262.6px] rounded-t-[1.53px] rounded-b-none bg-red w-[2.8px] h-[33.6px]" />
          <div className="absolute top-[0px] left-[266.4px] rounded-t-[1.53px] rounded-b-none bg-red w-[2.8px] h-[71.2px]" />
          <div className="absolute top-[29.5px] left-[270.1px] rounded-t-[1.53px] rounded-b-none bg-red w-[2.8px] h-[41.7px]" />
          <div className="absolute top-[41.7px] left-[273.8px] rounded-t-[1.53px] rounded-b-none bg-red w-[2.8px] h-[29.5px]" />
          <div className="absolute top-[47.8px] left-[262.6px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[3.1px] h-[23.4px]" />
          <div className="absolute top-[22.4px] left-[266.7px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-0.5 h-[48.9px]" />
          <div className="absolute top-[42.7px] left-[269.7px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[3.1px] h-[28.5px]" />
          <div className="absolute top-[50.9px] left-[273.8px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[3.1px] h-[20.4px]" />
          <div className="absolute top-[61.1px] left-[293.4px] rounded-t-[1.53px] rounded-b-none bg-cornflowerblue-600 w-[2.8px] h-[10.2px]" />
        </div>
      </div>
    </div>
  );
};

export default ChartFull;
