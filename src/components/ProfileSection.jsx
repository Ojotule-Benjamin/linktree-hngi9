import React from "react";
import ojotule1 from "../assets/ojotule1.png";
import { ShareIconSvg, MobileShareIcon } from "../assets/Icons";
import "./profileSection.scss";

export const ProfileSection = () => {
  return (
    <div className="profileContainer">
      <div className="profileItems">
        <img src={ojotule1} alt="profile" id="profile_img" />
        <h3>Ojotule Benjamin Ajodo</h3>
        <p id="slack">Split</p>
      </div>
      <div className="avatarShare">
        <ShareIconSvg />
      </div>

      <div className="mobileShareBtn">
        <MobileShareIcon />
      </div>
    </div>
  );
};
