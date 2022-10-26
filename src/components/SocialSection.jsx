import React from "react";
import "./socialSection.scss";
import { SlackIconSvg, GithubIconSvg } from "../assets/Icons";

export const SocialSection = () => {
  return (
    <div className="socialContainer">
      <div className="socialItems">
        <SlackIconSvg />
        <GithubIconSvg />
      </div>
    </div>
  );
};
