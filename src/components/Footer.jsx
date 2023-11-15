import React from 'react';
import { Link } from 'react-router-dom';
import { DIAMOND_ICON } from '../constants/Contactcard';
import { FAQS_LIST } from '../constants/Faqs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faTwitter,
  faFacebook,
  faPinterest,
  faGithub,
  faWhatsapp,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

library.add(
  faTwitter,
  faFacebook,
  faPinterest,
  faGithub,
  faWhatsapp,
  faInstagram,
  faHouse,
  faUser
);

const Footer = () => {
  return (
    <div className="mb-10 mt-20 px-4 sm:px-8 lg:px-12 xl:px-20">
      <div className="flex py-6 sm:py-8 text-amber-900">
        <h1 className="text-lg sm:text-xl font-bold px-1">FAQS ------</h1>
        {DIAMOND_ICON}
      </div>
      <h1 className="text-2xl sm:text-3xl font-medium -mt-3">
        Frequently Asked Questions
      </h1>
      <p className="text-base sm:text-lg w-full sm:w-[70%] py-3 text-amber-900 font-medium font-sans">
        Loren ipsum dlor sit amet, consecteur adipiscing elit Enium, risus
        dictum sed sit.Suspendisse congue est pellentesque nec.Auctor lacus,sed
        amet velit leo,felis eget in prion.Arcu enim dictum venenatis convallis
        tortar.Malesuada vestibulum a sed libero sapien ,telius.
      </p>
      <div className="px-2 sm:px-0">
        {FAQS_LIST.map((question, index) => (
          <div key={index} className="mb-4">
            <h1 className="text-lg sm:text-xl font-semibold">
              {question}
              <strong className="px-2 sm:px-5"> +</strong>
            </h1>
            <hr className="my-2 border-t-2 border-amber-900 w-1/2 sm:w-[50%]" />
          </div>
        ))}
        <div className="py-5 flex flex-col sm:flex-row items-center">
          <p className="text-amber-900 text-xl font-bold py-4 px-6 sm:mr-6">
            Have more questions?
          </p>
          <Link to="/contact">
            <button className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-4 px-6 sm:px-8 rounded">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-amber-800 flex flex-col sm:flex-row text-white justify-between text-lg px-4 sm:px-8 lg:px-12 xl:px-20 py-6">
        <div className="font-serif text-2xl sm:text-3xl py-2 sm:py-5 px-4 sm:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl py-2 sm:py-5">
            Diamond Luxury
          </h1>
          <div className="text-xl sm:text-2xl flex flex-wrap">
            <FontAwesomeIcon className="p-3" icon={['fas', 'house']} />
            <FontAwesomeIcon className="p-3" icon={['fab', 'twitter']} />
            <FontAwesomeIcon className="p-3" icon={['fab', 'facebook']} />
            <FontAwesomeIcon className="p-3" icon={['fab', 'pinterest']} />
            <FontAwesomeIcon className="p-3" icon={['fab', 'github']} />
            <FontAwesomeIcon className="p-3" icon={['fab', 'whatsapp']} />
            <FontAwesomeIcon className="p-3" icon={['fab', 'instagram']} />
            <FontAwesomeIcon className="p-3" icon={['far', 'user']} />
          </div>
          <p className="px-4 sm:px-8">meerzkeman@gmail.com</p>
        </div>
        <div className="flex flex-col sm:flex-row py-4 sm:py-5 sm:mb-2">
          <div className="px-4 sm:px-8 mb-4 sm:mb-0">
            <h1 className="text-xl sm:text-2xl font-bold">LEARN MORE</h1>
            <p>Success stories</p>
            <p>Why Us?</p>
            <p>How it works</p>
            <p>FAQs</p>
          </div>
          <div className="px-4 sm:px-8">
            <h1 className="text-xl sm:text-2xl font-bold">RESOURCES</h1>
            <p>Help center</p>
            <p>Blog</p>
            <p>Career</p>
            <p>Press center</p>
            <p>About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
