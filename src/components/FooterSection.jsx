import React from "react";
import "./footerSection.scss";
import I4G from "../assets/I4G.png";
import { ZuriInternshipSvg } from "../assets/Icons";

export const FooterSection = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <ZuriInternshipSvg />
        <div className="zuriLogo">
          <img src={I4G} alt="logo" />
        </div>
        <div className="">
          <h5>HNG Internship 9 Frontend Task</h5>
        </div>
        <img src={I4G} alt="logo" />
      </div>
    </div>
  );
};
