import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setClosedNavWidth, setOpenNavWidth, setScreenSize } from "../redux/nav";

function useScreenSize() {
  //   const isLaptop = useMediaQuery({ minDeviceWidth: "1800px" });
  const isIpadPro = useMediaQuery({ maxDeviceWidth: "1400px" });
  const isIphoneL = useMediaQuery({ maxDeviceWidth: "900px" });

  const dispatch = useDispatch();

  useEffect(() => {
    let openNavWidth = "307px";
    let closedNavWidth = "60px";
    if (isIphoneL) {
      openNavWidth = "100vw";
      closedNavWidth = "0px";
      dispatch(setScreenSize("MOBILE"));
    } else if (isIpadPro) {
      openNavWidth = "250px";
      closedNavWidth = "60px";
      dispatch(setScreenSize("TABLET"));
    } else {
      openNavWidth = "307px";
      closedNavWidth = "60px";
      dispatch(setScreenSize("DESKTOP"));
    }
    dispatch(setOpenNavWidth(openNavWidth));
    dispatch(setClosedNavWidth(closedNavWidth));
  }, [isIpadPro, isIphoneL]);
}

export default useScreenSize;
