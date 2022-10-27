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
        {/* <p id="slack">Ojotule Benjamin Ajodo</p> */}
      </div>
      <div className="avatarShare">
        <a
          href="https://github.com/Ojotule-Benjamin"
          target="_blank"
          rel="noreferrer"
        >
          <ShareIconSvg />
        </a>
      </div>

      <div className="mobileShareBtn">
        <a
          href="https://github.com/Ojotule-Benjamin"
          target="_blank"
          rel="noreferrer"
        >
          <MobileShareIcon />
        </a>
      </div>
    </div>
  );
};
