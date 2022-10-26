import React from "react";
import "./main.scss";
import LinkSection from "./LinkSection";
import { ProfileSection } from "./ProfileSection";

export const Main = () => {
  return (
    <div className="MainContainer">
      <ProfileSection />
      <LinkSection />
    </div>
  );
};
