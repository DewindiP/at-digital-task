import React from "react";

const FooterLinks = () => {
  return (
    <div className="flex justify-center items-center whitespace-nowrap gap-2 sm:gap-1 text-xs sm:text-sm md:text-base text-white w-fit mx-auto">
      <a href="#" className="hover:underline">
        Privacy Policy
      </a>
      <span>|</span>
      <a href="#" className="hover:underline">
        Terms & Conditions
      </a>
    </div>
  );
};

export default FooterLinks;
