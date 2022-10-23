import React from "react";
import "./buttonSection.scss";
import { SlackIconSvg, GithubIconSvg } from "../assets/Icons";

export const ButtonSection = () => {
  return (
    <div className="linkSection">
      <div className="buttonMain">
        <a href="https://www.w3schools.com" target="_blank" rel="noreferrer">
          <button className="btn">Twitter</button>
        </a>
      </div>

      <div className="buttonSocialsLinks">
        <SlackIconSvg />
        <GithubIconSvg />
      </div>
    </div>
  );
};
