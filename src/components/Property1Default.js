import { useMemo } from "react";

const Property1Default = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  rectangleDivBorder,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  return (
    <div className="w-[22px] h-[22px]" style={property1DefaultStyle}>
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded box-border border-[1px] border-solid border-nd-text-color"
        style={rectangleDivStyle}
      />
      <img
        className="absolute h-3/6 w-[72.73%] top-[22.73%] right-[13.64%] bottom-[27.27%] left-[13.64%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector9.svg"
      />
    </div>
  );
};

export default Property1Default;
