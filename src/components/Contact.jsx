import React from 'react';
import HotelBookingForm from './HotelBookingForm';

const Contact = () => {
  return (
    <div className="bg-cover h-screen relative">
      <img
        src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="offer_image"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="z-10 relative">
        <HotelBookingForm />
      </div>
    </div>
  );
};

export default Contact;
