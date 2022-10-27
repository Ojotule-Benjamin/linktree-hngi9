import React from "react";
import "./socialSection.scss";
import { SlackIconSvg, GithubIconSvg } from "../assets/Icons";

export const SocialSection = () => {
  return (
    <div className="socialContainer">
      <div className="socialItems">
        <a
          id="slack"
          href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U048BCB1N6Q"
          target={"_blank"}
          rel="noreferrer"
        >
          <SlackIconSvg />
        </a>

        <a
          id="slack"
          href="https://github.com/Ojotule-Benjamin"
          target={"_blank"}
          rel="noreferrer"
        >
          <GithubIconSvg />
        </a>
      </div>
    </div>
  );
};
