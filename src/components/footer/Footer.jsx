import React from "react";
import { facebook, twitter, instagram, linkedin } from "../../assets";

function Footer() {
  return (
    <footer className="h-64 bg-red pt-16">
      <div className="w-10/12 mx-auto">
        <div className="flex gap-x-4">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="mt-4 md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            JANE ESPER
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 ESPER. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
