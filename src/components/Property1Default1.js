import { useMemo } from "react";

const Property1Default1 = ({
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  rectangleDivBorderRadius,
  rectangleDivBackgroundColor,
  rectangleDivBorder,
  ellipseDivHeight,
  ellipseDivWidth,
  ellipseDivTop,
  ellipseDivRight,
  ellipseDivBottom,
  ellipseDivLeft,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
      backgroundColor: rectangleDivBackgroundColor,
      border: rectangleDivBorder,
    };
  }, [
    rectangleDivBorderRadius,
    rectangleDivBackgroundColor,
    rectangleDivBorder,
  ]);

  const ellipseDivStyle = useMemo(() => {
    return {
      height: ellipseDivHeight,
      width: ellipseDivWidth,
      top: ellipseDivTop,
      right: ellipseDivRight,
      bottom: ellipseDivBottom,
      left: ellipseDivLeft,
    };
  }, [
    ellipseDivHeight,
    ellipseDivWidth,
    ellipseDivTop,
    ellipseDivRight,
    ellipseDivBottom,
    ellipseDivLeft,
  ]);

  return (
    <div className="w-14 h-7" style={property1Default1Style}>
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-cornflowerblue-800 box-border border-[1px] border-solid border-darkslateblue"
        style={rectangleDiv1Style}
      />
      <div
        className="absolute h-[78.57%] w-[39.29%] top-[10.71%] right-[53.57%] bottom-[10.71%] left-[7.14%] rounded-[50%] bg-white"
        style={ellipseDivStyle}
      />
    </div>
  );
};

export default Property1Default1;
