import React from "react";
import { UserData } from "../data/UserData";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { FooterLink } = UserData;

  return (
    <div className="mb-2 flex items-center justify-center gap-2">
      <div className="font-poppins text-center text-sm lg:text-base">
        © Copyright <b>{currentYear}</b> Designed & Built by
      </div>
      <div
        className="cursor-pointer text-sm lg:text-base font-bold tracking-wider"
        onClick={() => {
          window.open(FooterLink);
        }}
      >
        Atharva Parwal
      </div>
    </div>
  );
}

export default Footer;
