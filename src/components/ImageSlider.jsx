import React from 'react';
import Slider from 'react-slick';
import { IMAGE_URLS } from '../constants/Images';
import Header from './Header';
import { Link } from 'react-router-dom';
import { CONTACT_CARD_LIST } from '../constants/Contactcard';
import ContactcardList from './ContactcardList';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };

  return (
    <div className="mx-1">
      <Header />
      <div className="absolute z-10 px-4 sm:px-8 py-2 bg-gradient-to-b from-black w-full text-white">
        <div className="md:ml-20 lg:w-3/5 xl:w-2/5">
          <p className="font-light py-3">GET LUXURY AND COMFORT</p>
          <h1 className="text-xl md:text-3xl font-sans py-2">
            Welcome to the haven where Luxury Meets Affordability in the realm
            of hotel bookings. Indulge in the epitome of comfort and elegance
            without compromise.
          </h1>
          <div className="mt-5">
            <Link to="/services">
              <button className="bg-pink-950 p-3 md:p-4 px-4 md:px-6 rounded-xl hover:bg-pink-900">
                Book An Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {IMAGE_URLS.map((image_url) => (
          <div key={image_url}>
            <img
              src={image_url}
              alt="hotel_images"
              className="w-full h-96 object-cover"
            />
          </div>
        ))}
      </Slider>
      {/*contact section begins */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="text-2xl px-4 sm:px-5 md:px-0">
            <p className="text-yellow-400 font-bold text-3xl">Our Contact Us</p>
            <h1 className="text-blue-950 font-medium py-3 text-4xl">
              Easy to Contact Us
            </h1>
            <p className="w-full md:w-3/4">
              We are always ready to help by providing the best services for
              you. We believe a good place to live can make your life better.
            </p>
          </div>
          <div className="flex flex-wrap px-4 sm:px-5 md:px-0">
            {CONTACT_CARD_LIST.map((contactitem) => (
              <ContactcardList
                key={contactitem.type}
                contactitem={contactitem}
              />
            ))}
          </div>
        </div>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/198712789.jpg?k=658707a617c723a4cae28edc137087bb7074d5cc19b03230e6139d3f3fe20846&o=&hp=1"
          alt="resort_image"
          className="w-full md:w-1/2 h-auto rounded-tl-full md:rounded-tl-none md:rounded-l-full"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
