import { useCallback } from "react";
import Property1Default from "../components/Property1Default";
import { useNavigate } from "react-router-dom";

const AndroidLarge1 = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/android-large-5");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/android-large-6");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-3xs bg-gray-100 h-[800px] overflow-hidden text-left text-xs text-gray-100 font-montserrat">
      <div className="absolute top-[68px] left-[16px] text-xl font-semibold font-roboto text-black">
        Create an account
      </div>
      <div className="absolute top-[135px] left-[16px] rounded-xl bg-gray-50 w-[343px] h-[50px]" />
      <div className="absolute top-[209px] left-[16px] rounded-xl bg-gray-50 w-[343px] h-[50px]" />
      <div className="absolute top-[283px] left-[16px] rounded-xl bg-gray-50 w-[343px] h-[50px]" />
      <div className="absolute top-[357px] left-[16px] rounded-xl bg-gray-50 w-[343px] h-[50px]" />
      <div className="absolute top-[431px] left-[46px] leading-[177.9%] font-medium text-cornflowerblue-200">
        <span className="text-gray-100">{`By proceeding, I agree to all `}</span>
        <span className="[text-decoration:underline]">{`T&C`}</span>
        <span className="text-crimson">{` `}</span>
        <span className="text-gray-100 whitespace-pre-wrap">{`and  `}</span>
        <span className="[text-decoration:underline]">Privacy Policy</span>
      </div>
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="431px"
        property1DefaultLeft="16px"
        rectangleDivBorder="1px solid #808080"
      />
      <div className="absolute top-[153px] left-[36px] font-semibold">
        First Name
      </div>
      <div className="absolute top-[227px] left-[36px] font-semibold">{`Last Name `}</div>
      <div className="absolute top-[301px] left-[36px] font-semibold">
        Email
      </div>
      <div className="absolute top-[375px] left-[36px] font-semibold">
        Password
      </div>
      <div
        className="absolute top-[756px] left-[calc(50%_-_97.5px)] font-medium cursor-pointer text-black"
        onClick={onAlreadyHaveAnClick}
      >
        <span>{`Already have an account? `}</span>
        <span className="[text-decoration:underline] text-cornflowerblue-400">
          Login
        </span>
      </div>
      <div className="absolute top-[654.8px] left-[15.8px] box-border w-[155.5px] h-[0.5px] border-t-[0.5px] border-solid border-gray-100" />
      <div className="absolute top-[654.8px] left-[201.8px] box-border w-[157.5px] h-[0.5px] border-t-[0.5px] border-solid border-gray-100" />
      <div className="absolute top-[646px] left-[calc(50%_-_6.5px)] font-medium text-black">
        Or
      </div>
      <div className="absolute top-[686px] left-[134px] rounded-lg box-border w-11 h-11 border-[1px] border-solid border-gray-100" />
      <div className="absolute top-[686px] left-[196px] rounded-lg box-border w-11 h-11 border-[1px] border-solid border-gray-100" />
      <img
        className="absolute top-[699px] left-[147px] w-[18px] h-[18px] overflow-hidden"
        alt=""
        src="/flatcoloriconsgoogle.svg"
      />
      <img
        className="absolute h-[2.13%] w-[2.37%] top-[87.38%] right-[40.56%] bottom-[10.5%] left-[57.07%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div
        className="absolute top-[574px] left-[16px] rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] w-[343px] h-[50px] cursor-pointer"
        onClick={onRectangle6Click}
      />
      <div className="absolute top-[589px] left-[calc(50%_-_76.5px)] text-base font-semibold text-white text-center">
        Create an Account
      </div>
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

export default AndroidLarge1;
