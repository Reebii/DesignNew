import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AndroidLarge = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  const onSkipTextClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-3xs bg-gray-100 h-[800px] overflow-hidden text-left text-base text-black font-montserrat">
      <img
        className="absolute top-[696px] left-[299px] w-[60px] h-[60px] cursor-pointer"
        alt=""
        src="/group-1.svg"
        onClick={onGroupClick}
      />
      <div className="absolute top-[499px] left-[16px] text-xl font-semibold">
        Track Your Goal
      </div>
      <div className="absolute top-[538px] left-[16px] font-medium text-gray-200 inline-block w-[343px]">
        Don’t worry if you have trouble determining your goals, We can help you
        determine your goals and track your goals
      </div>
      <div
        className="absolute top-[44px] left-[323px] [text-decoration:underline] font-medium text-cornflowerblue-100 cursor-pointer"
        onClick={onSkipTextClick}
      >
        Skip
      </div>
      <img
        className="absolute top-[132px] left-[calc(50%_-_141.5px)] w-[282px] h-[282px] object-cover"
        alt=""
        src="/image-13@2x.png"
      />
      <div className="absolute bottom-[-96px] left-[calc(50%_-_1611.5px)] rounded-xl bg-black1 w-[390px] h-[77px]" />
      <img
        className="absolute h-[3.38%] w-[66.93%] top-[104.25%] right-[394.4%] bottom-[-7.62%] left-[-361.33%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-5.svg"
      />
      <div className="absolute top-[0px] left-[0px] w-[375px] h-11 overflow-hidden text-center text-mini text-gray-300">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white hidden" />
        <div className="absolute top-[16px] right-[14.3px] w-[66.7px] h-[11.7px]">
          <div className="absolute top-[0px] right-[0.1px] w-[24.3px] h-[11.3px]">
            <div className="absolute top-[0px] right-[2.3px] rounded-[2.67px] box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-gray-300" />
            <img
              className="absolute top-[3.7px] right-[0px] w-[1.3px] h-1 opacity-[0.4] mix-blend-normal"
              alt=""
              src="/cap.svg"
            />
            <div className="absolute top-[2px] right-[4.3px] rounded-[1.33px] bg-gray-300 w-[18px] h-[7.3px]" />
          </div>
          <img
            className="relative w-[15.3px] h-[11px]"
            alt=""
            src="/wifi.svg"
          />
          <img
            className="relative w-[17px] h-[10.7px]"
            alt=""
            src="/cellular-connection.svg"
          />
        </div>
        <div className="absolute w-[14.4%] top-[calc(50%_-_10px)] left-[3.73%] tracking-[-0.3px] font-semibold inline-block">
          9:41
        </div>
      </div>
    </div>
  );
};

export default AndroidLarge;
