import React from "react";
import profilePics from "../../src/assets/profilePics.svg";
import { ShareIconSvg } from "../assets/Icons";
import "./profileSection.scss";

export const ProfileSection = () => {
  return (
    <div className="profileContainer">
      <div className="profileItems">
        <img src={profilePics} alt="profile" id="profile_img" />
        <h3>Annette Black</h3>
      </div>
      <div className="avatarShare">
        <ShareIconSvg />
      </div>
    </div>
  );
};
