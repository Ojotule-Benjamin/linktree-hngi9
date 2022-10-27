import React from "react";
import "./socialSection.scss";
import { SlackIconSvg, GithubIconSvg } from "../assets/Icons";

export const SocialSection = () => {
  return (
    <div className="socialContainer">
      <div className="socialItems">
        <a
          // style={{ display: "none" }}
          href="https://github.com/Ojotule-Benjamin"
          target="_blank"
          rel="noreferrer"
          id="slack"
          // hidden={true}
        >
          <SlackIconSvg />
        </a>

        <a
          href="https://github.com/Ojotule-Benjamin"
          target="_blank"
          rel="noreferrer"
          // hidden={true}
        >
          <GithubIconSvg />
        </a>
      </div>
    </div>
  );
};
