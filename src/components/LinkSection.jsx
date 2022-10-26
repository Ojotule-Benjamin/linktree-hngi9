import React from "react";
import "./linkSection.scss";
import { Links } from "../Links";

export const linkSection = () => {
  return (
    <div className="linkContainer">
      {Links.map((d, key) => (
        <div className="linkItems" key={key}>
          <a href={d.url} target="_blank" rel="noreferrer">
            <button id={d.id}>{d.name}</button>
          </a>
        </div>
      ))}
    </div>
  );
};
export default linkSection;
