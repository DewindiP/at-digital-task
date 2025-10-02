import React from "react";
import FooterLeft from "./FooterLeft";
import FooterMiddle from "./FooterMiddle";
import FooterRight from "./FooterRight";
import FooterLinks from "./FooterLinks";

const FooterMain = () => {
  return (
    <footer className="bg-primaryColor text-white px-10 lg:px-20 py-10">
      {/* Footer Top Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:justify-between xl:justify-between">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/3 xl:w-1/3">
          <FooterLeft />
        </div>

        {/* Footer Middle + Footer Right */}
        <div className="flex flex-col md:flex-row gap-5 sm:gap-10 w-full lg:w-2/3 xl:w-2/3 lg:justify-around xl:justify-around">
          <FooterMiddle />
          <FooterRight />
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center mt-6 mb-1">
        <hr className="border-white w-[630px]" />
      </div>

      {/* Bottom Links */}
      <FooterLinks />
    </footer>
  );
};

export default FooterMain;
