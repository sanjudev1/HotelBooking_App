import React, { useState } from 'react';
import { HEADER_TITLES } from '../constants/Headersection';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="px-4 py-2 bg-gradient-to-r w-full text-rose-500">
      <div className="flex items-center justify-between">
        <a href="/">
          <img
            className="w-16 rounded-full"
            src="/diamond.png"
            alt="Hotel_brand"
          />
        </a>

        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex">
          {HEADER_TITLES.map((title) => (
            <div key={title.value} className="px-2">
              <Link to={title.path}>
                <h1 className="hover:text-blue-500 font-semibold text-xl">
                  {title.value}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2">
          {HEADER_TITLES.map((title) => (
            <div key={title.value} className="px-2 mb-2">
              <Link to={title.path}>
                <h1 className="hover:text-blue-500 font-semibold text-xl">
                  {title.value}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
