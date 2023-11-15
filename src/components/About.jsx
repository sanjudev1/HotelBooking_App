import React from 'react';
import { DIAMOND_ICON } from '../constants/Contactcard';
import Footer from './Footer';

const About = () => {
  return (
    <div className="px-4 sm:px-8 flex flex-wrap">
      <div className="w-full sm:w-2/3">
        <div className="flex py-4 sm:py-8 text-amber-900 mt-6">
          <h1 className="text-xl font-bold px-1">ABOUT US ------</h1>
          {DIAMOND_ICON}
        </div>
        <h1 className="text-2xl sm:text-3xl font-medium -mt-3">
          At Diamond Luxury Hotels
        </h1>
        <p className="text-base sm:text-lg w-full sm:w-3/4 py-3 text-amber-900 font-medium font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, risus
          dictum sed sit. Suspendisse congue est pellentesque nec. Auctor lacus,
          sed amet velit leo, felis eget in proin. Arcu enim dictum venenatis
          convallis tortor. Malesuada vestibulum a sed libero sapien, tellus.
          Loren ipsum dlor sit amet, consecteur adipiscing elit Enium, risus
          dictum sed sit. Suspendisse congue est pellentesque nec. Auctor lacus,
          sed amet velit leo, felis eget in proin. Arcu enim dictum venenatis
          convallis tortor. Malesuada vestibulum a sed libero sapien, tellus.
          Loren ipsum dlor sit amet, consecteur adipiscing elit Enium, risus
          dictum sed sit. Suspendisse congue est pellentesque nec. Auctor lacus,
          sed amet velit leo, felis eget in proin. Arcu enim dictum venenatis
          convallis tortor. Malesuada vestibulum a sed libero sapien, tellus.
        </p>
        <div className="py-3 flex">
          <button className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-2 px-4 sm:py-4 sm:px-6 rounded">
            Read More
          </button>
        </div>
      </div>

      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/198708638.jpg?k=01a3d3c5b065d86f958c4daa32663286aba5db1f522d47aebdf09a0033ceaf5c&o=&hp=1"
        alt="interior_image"
        className="w-full sm:w-1/3 mt-4 sm:mt-0"
      />
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/198708774.jpg?k=3588d5dc10cc8822f02020800e9ed33e0ac858d0d1c4ddfc94c484ed76966f44&o=&hp=1"
        alt="bedroom_image"
        className="w-full sm:w-1/3 mt-4 sm:mt-0"
      />

      <Footer />
    </div>
  );
};

export default About;
