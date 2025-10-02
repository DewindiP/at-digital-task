import React from "react";

const FooterRight = () => {
  return (
    <div className="md:basis-1/2 lg:basis-auto">
      <h4 className="font-semibold mb-3 text-sm sm:text-base md:text-lg text-justify">
        Our Services
      </h4>
      <ul className="space-y-2 text-xs sm:text-sm md:text-base text-white text-justify">
        <li>Social Media Marketing</li>
        <li>Web & Mobile App Development</li>
        <li>Data & Analytics</li>
      </ul>
    </div>
  );
};

export default FooterRight;
