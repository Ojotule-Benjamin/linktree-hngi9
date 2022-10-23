import React from "react";
import "./main.scss";
import { ButtonSection } from "./ButtonSection";
import { ProfileSection } from "./ProfileSection";
import FooterSection from "./FooterSection";

export const Main = () => {
  return (
    <div className="MainContainer">
      <ProfileSection />
      <ButtonSection />
    </div>
  );
};
