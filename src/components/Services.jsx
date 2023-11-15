import React from 'react';
import { DIAMOND_ICON } from '../constants/Contactcard';
import { ALL_TYPEOF_ROOMS } from '../constants/Images';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2">
          <div className="flex py-4 lg:py-8 text-amber-900">
            <h1 className="text-xl font-bold px-1">OUR CHOICE ------</h1>
            {DIAMOND_ICON}
          </div>
          <h1 className="text-2xl lg:text-3xl font-medium -mt-3 text-amber-900">
            The best room just for you!
          </h1>
          <p className="text-base lg:text-lg w-full py-3 mt-3 text-amber-900 font-medium font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, risus
            dictum sed sit. Suspendisse congue est pellentesque nec. Sed
            tincidunt aliquam morbi diam faucibus sollicitudin.
          </p>
        </div>
      </div>

      {/* Image grid for medium and larger devices */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        {ALL_TYPEOF_ROOMS.map((bedroom, index) => (
          <div key={index} className="mb-4">
            <div className="relative aspect-w-16 aspect-h-9">
              <p className="text-amber-900 font-semibold bg-gray-100 px-4 sm:px-4 py-3 absolute z-50">
                {bedroom.prices}
              </p>
              <p className="text-gray-50 font-semibold sm:px-3 py-[20%] absolute z-30 font-serif text-base sm:text-xl">
                {bedroom.category}
              </p>
              <div className="image-container">
                <img
                  src={bedroom.img}
                  alt={bedroom.category}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between lg:mt-8">
        <div className="lg:w-1/2">
          <div className="px-4 sm:px-5">
            <div className="flex py-4 lg:py-8 text-amber-900">
              <h1 className="text-xl font-bold px-1">FEATURED OFFER ------</h1>
              {DIAMOND_ICON}
            </div>

            <h1 className="text-2xl lg:text-3xl font-medium -mt-3">
              Economy Luxe Room
            </h1>
            <p className="text-base lg:text-lg w-full lg:w-full py-3 mt-3 text-amber-900 font-medium font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim,
              risus dictum sed sit. Suspendisse congue est pellentesque nec.
              Auctor lacus, sed amet velit leo, felis eget in proin. Arcu enim
              dictum venenatis convallis tortor. Malesuada vestibulum a sed
              libero sapien, tellus.
            </p>

            <div className="flex text-base lg:text-lg text-semibold mt-3">
              <div className="mr-4">
                <h1>
                  25 <strong>%</strong>{' '}
                </h1>
                <p>DISCOUNT</p>
                <p>STAY 6 MONTHS OR MORE</p>
              </div>
              <div className="h-14 border-r-2 border-amber-500 mx-4 inline-block"></div>
              <div>
                <h1>
                  25 <strong>%</strong>{' '}
                </h1>
                <p>DISCOUNT</p>
                <p>STAY 6 MONTHS OR MORE</p>
              </div>
            </div>
            <div className="py-3 lg:py-5 flex mt-2">
              <Link to="/contact">
                <button className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-2 lg:py-4 px-4 lg:px-6 rounded">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-10 lg:mt-10">
          <img
            src="https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-f216fe6/www.decorilla.com/online-decorating/wp-content/uploads/2021/03/Modern-rustic-master-bedroom-ideas-create-a-personal-retreat-by-Nate-Berkus.jpeg"
            alt="offerzone"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
