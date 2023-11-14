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
    <div className="mx-1 ">
      <Header />
      <div className="absolute z-10 px-8 py-2 bg-gradient-to-b from-black  w-full text-white">
        <div className="justify-center py-12 ml-[23%] ">
          <p className="pl-60  font-light py-3">GET LUXURY AND COMFORT</p>
          <h1 className=" text-xl w-3/5 font-sans ml-[5%] py-2">
            Welcome to the haven where Luxury Meets Affordability in the realm
            of hotel bookings. Indulge in the epitome of comfort and elegance
            without compromise.
          </h1>
          {/* <button className="bg-slate-950 opacity-80 p-4 rounded-sm mt-2">
            Explore Now
          </button> */}
          <div className="ml-[18%] mt-5">
            <Link to="/services">
              <button className="bg-pink-950  p-4 px-6 rounded-xl mt-2 hover:bg-pink-900">
                Book An Appoinment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {IMAGE_URLS.map((image_url) => (
          <div key={image_url}>
            <img src={image_url} alt="hotel_images" className="w-screen h-96" />
          </div>
        ))}
      </Slider>
      {/*contact section begins */}
      <div className="flex">
        <div>
          <div className="text-2xl px-5">
            <p className="text-yellow-400 font-bold text-3xl">Our Contact Us</p>
            <h1 className="text-blue-950 font-medium py-3 text-4xl">
              Easy to contact us
            </h1>
            <p className="w-[50%]">
              We always ready to help by providing the best services for you.We
              believe to good place to live can make you life better
            </p>
          </div>
          <div className="flex w-[50%] flex-wrap">
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
          className="w-[800px] absolute z-50 ml-[50%] rounded-tl-full"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
