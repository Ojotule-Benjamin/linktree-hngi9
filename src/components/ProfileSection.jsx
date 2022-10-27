import React from "react";
import profilePics from "../../src/assets/profilePics.svg";
import { ShareIconSvg, MobileShareIcon } from "../assets/Icons";
import "./profileSection.scss";

export const ProfileSection = () => {
  return (
    <div className="profileContainer">
      <div className="profileItems">
        <img src={profilePics} alt="profile" id="profile_img" />
        <h3>Annette Black</h3>
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
