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
    <div className="mb-[1%] mt-[5%]">
      <div className="flex py-8  text-amber-900">
        <h1 className="text-xl font-bold px-1">FAQS ------</h1>
        {DIAMOND_ICON}
      </div>
      <h1 className="text-3xl font-medium -mt-3">Frequently Asked Questions</h1>
      <p className="text-xl w-[40%] py-3 text-amber-900 font-medium font-sans">
        Loren ipsum dlor sit amet, consecteur adipiscing elit Enium, risus
        dictum sed sit.Suspendisse congue est pellentesque nec.Auctor lacus,sed
        amet velit leo,felis eget in prion.Arcu enim dictum venenatis convallis
        tortar.Malesuada vestibulum a sed libero sapien ,telius.
      </p>
      {/*index is not preffered as a key */}
      <div className="px-[5%]">
        {FAQS_LIST.map((question, index) => (
          <h1 key={index} className="text-xl font-semibold">
            {question}
            <strong className="px-5"> +</strong>
            <hr className="my-3 border-t-2 border-amber-900 w-[50%]" />
          </h1>
        ))}
        <div className="py-5 flex">
          <p className="text-amber-900 text-2xl font-bold py-4 px-6">
            Have more questions?
          </p>
          <Link to="/contact">
            <button className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-4 px-6 rounded">
              Contact Us --
            </button>
          </Link>
        </div>
      </div>
      {/* footer tag starts*/}
      <div className="bg-amber-800 flex text-white justify-between text-xl px-10 ">
        <div className="font-serif text-3xl py-5">
          <h1 className="font-serif text-3xl py-5 px-5">Diamond Luxury</h1>
          <div className="text-2xl col-span-5 ">
            <FontAwesomeIcon className="p-5" icon="fa-solid fa-house" />
            <FontAwesomeIcon className="p-5" icon="fa-brands fa-twitter" />
            <FontAwesomeIcon className="p-5" icon="fa-brands fa-facebook" />
            <FontAwesomeIcon className="p-5" icon="fa-brands fa-pinterest" />
            <FontAwesomeIcon className="p-5" icon="fa-brands fa-github" />
            <FontAwesomeIcon className="p-5" icon="fa-brands fa-whatsapp" />
            <FontAwesomeIcon className="p-5" icon="fa-brands fa-instagram" />
            <FontAwesomeIcon className="p-5" icon="fa-regular fa-user" />
          </div>
          <p className="px-5">meerzkeman@gmail.com</p>
        </div>
        <div className="flex mr-[10%] mb-[2%] py-5">
          <div className="px-10">
            <h1>LEARN MORE</h1>
            <p>Sucess stories</p>
            <p>Why US?</p>
            <p>How it works</p>
            <p>FAQs</p>
          </div>
          <div className="px-5">
            <h1>RESOURCES</h1>
            <p>Help center</p>
            <p>Blog</p>
            <p>Carrer</p>
            <p>Press center</p>
            <p>About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
