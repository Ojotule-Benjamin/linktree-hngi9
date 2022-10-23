import React from "react";
import profilePics from "../../src/assets/profilePics.svg";
import { ShareIconSvg } from "../assets/Icons";
import "./profileSection.scss";

export const ProfileSection = () => {
  return (
    <div className="profileContainer">
      <div className="shareIconContainer">
        <img src={profilePics} alt="profile" id="profile_img" />
        <ShareIconSvg />
      </div>
      <h3>Annette Black</h3>
    </div>
  );
};
