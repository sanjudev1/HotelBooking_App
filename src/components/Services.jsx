import React from 'react';
import { DIAMOND_ICON } from '../constants/Contactcard';
import { ALL_TYPEOF_ROOMS } from '../constants/Images';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div>
      <div className="px-5 flex flex-wrap py-[3%]">
        <div className="flex justify-between">
          <div>
            <div className="flex py-8  text-amber-900 mt-[10%]">
              <h1 className="text-xl font-bold px-1">OUR CHOICE ------</h1>
              {DIAMOND_ICON}
            </div>
            <h1 className="text-3xl font-medium -mt-3 text-amber-900">
              The best room just for you!
            </h1>
          </div>
          <p className="text-2xl w-[40%] py-3 mt-[3%] text-amber-900 font-medium font-sans">
            Loren ipsum dlor sit amet, consecteur adipiscing elit Enium, risus
            dictum sed sit.Suspendisse congue est pellentesque nec.Sed tincidunt
            aliquan morbi diam faucibus soldales
          </p>
        </div>
        {/*here index is not recomended (preffer uuid) */}
        <div className="flex flex-wrap mt-[1%]">
          {ALL_TYPEOF_ROOMS.map((bedroom, index) => (
            <div key={index} className="m-3">
              <p className="text-amber-900 font-semibold bg-gray-100 px-4 py-6 absolute z-50">
                {bedroom.prices}
              </p>
              <p className="text-gray-50 font-semibold px-[10%]  py-[20%] absolute z-30 font-serif text-2xl">
                {bedroom.category}
              </p>
              <img
                src={bedroom.img}
                alt={bedroom.category}
                className="min-w-[700px] max-w-[700px] min-h-[500px] max-h-[500px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        {/* Features offer section*/}
        <div className="px-4">
          <div className="px-5">
            <div className="flex py-8  text-amber-900 mt-[3%]">
              <h1 className="text-xl font-bold px-1">FEATURED OFFER ------</h1>
              {DIAMOND_ICON}
            </div>

            <h1 className="text-3xl font-medium -mt-3">Economy Luxe Room</h1>
            <p className="text-xl w-[70%] py-5 text-amber-900 font-medium font-sans">
              Loren ipsum dlor sit amet, consecteur adipiscing elit Enium, risus
              dictum sed sit.Suspendisse congue est pellentesque nec.Auctor
              lacus,sed amet velit leo,felis eget in prion.Arcu enim dictum
              venenatis convallis tortar.Malesuada vestibulum a sed libero
              sapien ,telius.
            </p>

            <div className="flex text-xl text-semibold mt-3">
              <div>
                <h1>
                  25 <strong>%</strong>{' '}
                </h1>
                <p>DISCOUNT</p>
                <p>STAY 6 MONTHS OR MORE</p>
              </div>
              <div className="h-18 border-r-2 border-amber-500 mx-4 inline-block"></div>
              <div>
                <h1>
                  25 <strong>%</strong>{' '}
                </h1>
                <p>DISCOUNT</p>
                <p>STAY 6 MONTHS OR MORE</p>
              </div>
            </div>
            <div className="py-5 flex mt-2">
              <Link to="/contact">
                <button className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-4 px-6 rounded">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-[3%]">
          <img
            src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-f216fe6/www.decorilla.com/online-decorating/wp-content/uploads/2021/03/Modern-rustic-master-bedroom-ideas-create-a-personal-retreat-by-Nate-Berkus.jpeg"
            alt="offerzone"
            className="w-[90%]"
          />
        </div>
      </div>

      {/* features offer section ends*/}
    </div>
  );
};

export default Services;
