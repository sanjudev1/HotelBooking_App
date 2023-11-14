import React from 'react';
import { HEADER_TITLES } from '../constants/Headersection';
import { Link } from 'react-router-dom';
console.log(HEADER_TITLES);
const Header = () => {
  return (
    <div className="absolute z-20 px-8 py-2 bg-gradient-to-b from-black  w-full text-white">
      <a href="/">
        <img
          className="w-[5%] rounded-full absolute z-30"
          src="/diamond.png"
          alt="Hotel_brand"
        />
      </a>

      <div className="flex justify-end px-[5%]">
        {HEADER_TITLES.map((title) => (
          <div key={title.value} className="flex-shrink-0 px-5">
            <Link to={title.path}>
              <h1 className="hover:text-blue-500 font-semibold text-xl">
                {title.value}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
