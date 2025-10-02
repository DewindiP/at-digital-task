import React from "react";

const FooterMiddle = () => {
  return (
    <div className="md:basis-1/2 lg:basis-auto">
      <h4 className="font-semibold mb-3 text-sm sm:text-base md:text-lg text-justify">
        Our Technologies
      </h4>
      <ul className="space-y-2 text-xs sm:text-sm md:text-base text-white text-justify">
        <li>ReactJS</li>
        <li>Gatsby</li>
        <li>NextJS</li>
        <li>NodeJS</li>
      </ul>
    </div>
  );
};

export default FooterMiddle;
