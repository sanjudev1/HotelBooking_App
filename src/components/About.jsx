import React from 'react';
import { DIAMOND_ICON } from '../constants/Contactcard';
import Footer from './Footer';
const About = () => {
  return (
    <div className="px-5 flex flex-wrap">
      <div>
        <div className="flex py-8  text-amber-900 mt-[5%]">
          <h1 className="text-xl font-bold px-1">ABOUT US ------</h1>
          {DIAMOND_ICON}
        </div>
        <h1 className="text-3xl font-medium -mt-3">At Diamond Luxury Hotels</h1>
        <p className="text-xl w-[40%] py-3 text-amber-900 font-medium font-sans">
          Loren ipsum dlor sit amet, consecteur adipiscing elit Enium, risus
          dictum sed sit.Suspendisse congue est pellentesque nec.Auctor
          lacus,sed amet velit leo,felis eget in prion.Arcu enim dictum
          venenatis convallis tortar.Malesuada vestibulum a sed libero sapien
          ,telius. Loren ipsum dlor sit amet, consecteur adipiscing elit Enium,
          risus dictum sed sit.Suspendisse congue est pellentesque nec.Auctor
          lacus,sed amet velit leo,felis eget in prion.Arcu enim dictum
          venenatis convallis tortar.Malesuada vestibulum a sed libero sapien
          ,telius. Loren ipsum dlor sit amet, consecteur adipiscing elit Enium,
          risus dictum sed sit.Suspendisse congue est pellentesque nec.Auctor
          lacus,sed amet velit leo,felis eget in prion.Arcu enim dictum
          venenatis convallis tortar.Malesuada vestibulum a sed libero sapien
          ,telius.
        </p>
        <div className="py-5 flex">
          <button className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-4 px-6 rounded">
            Read More --
          </button>
        </div>
      </div>

      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/198708638.jpg?k=01a3d3c5b065d86f958c4daa32663286aba5db1f522d47aebdf09a0033ceaf5c&o=&hp=1"
        alt="interior_image"
        className="absolute z-10 w-[30%] ml-[40%] my-[15%]"
      />
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/198708774.jpg?k=3588d5dc10cc8822f02020800e9ed33e0ac858d0d1c4ddfc94c484ed76966f44&o=&hp=1"
        alt="bedroom_image"
        className="absolute z-5 w-[30%] ml-[60%] py-[5%]"
      />

      <Footer />
    </div>
  );
};

export default About;
