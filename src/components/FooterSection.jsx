import React from "react";
import "./footerSection.scss";
import I4G from "../assets/I4G.png";
import zuri_internship from "../assets/zuri_internship.png";

export const FooterSection = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="zuriLogo">
          <img src={zuri_internship} alt="logo" />
        </div>
        <div className="footerText">
          <h4>HNG Internship 9 Frontend Task</h4>
        </div>
        <div className="I4Glogo">
          <img src={I4G} alt="logo" />
        </div>
      </div>
    </div>
  );
};
