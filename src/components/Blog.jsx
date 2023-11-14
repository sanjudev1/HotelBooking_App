import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the styles for react-phone-number-input

function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg">
        <p className="text-xl font-bold text-green-600 mb-4">Success!</p>
        <p className="text-gray-700">
          Your submission was successful. Our team will reach out to you
          shortly.
        </p>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function HotelBookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSubmit = (data) => {
    console.log(data, 'data');
    // You can perform any necessary actions here, e.g., send data to a server

    // Show the success modal
    setShowSuccessModal(true);

    // Reset the form
    reset({
      firstName: '',
      lastName: '',
      phoneinput: '',
      age: 18,
      room: '1',
    });
  };

  const closeSuccessModal = () => {
    // Close the success modal
    setShowSuccessModal(false);
  };

  return (
    <div className="py-10 absolute z-10 w-full h-full">
      <div className="w-96 mx-auto bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-blue-700">
          Hotel Booking Form
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center"
        >
          <label htmlFor="firstname" className="block mt-4 text-blue-700">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            {...register('firstName', {
              pattern: /^[A-Za-z]+$/i,
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            className={`w-full p-2 border rounded ${
              errors.firstName ? 'border-red-500' : ''
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500">First name is required.</p>
          )}

          <label htmlFor="lastname" className="block mt-4 text-blue-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Last Name"
            {...register('lastName', {
              pattern: /^[A-Za-z]+$/i,
              required: true,
              minLength: 3,
              maxLength: 25,
            })}
            className={`w-full p-2 border rounded ${
              errors.lastName ? 'border-red-500' : ''
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500">Last name is required.</p>
          )}

          <label htmlFor="Age" className="block mt-4 text-blue-700">
            Age
          </label>
          <input
            type="number"
            id="Age"
            {...register('age', { required: true, min: 18, max: 99 })}
            className={`w-16 p-2 border rounded ${
              errors.age ? 'border-red-500' : ''
            }`}
            defaultValue={18}
          />
          {errors.age && (
            <p className="text-red-500">Please enter a valid age.</p>
          )}

          <label htmlFor="room" className="block mt-4 text-blue-700">
            Room Type
          </label>
          <select
            {...register('room')}
            className={`w-full p-2 border rounded ${
              errors.room ? 'border-red-500' : ''
            }`}
          >
            <option value="1">Single Sharing</option>
            <option value="2">Double Sharing</option>
            <option value="3">Three Sharing</option>
            <option value="4">Four Sharing</option>
            <option value="more">More than Four</option>
          </select>

          <label htmlFor="phoneinput" className="block mt-4 text-blue-700">
            Phone Number
          </label>
          <Controller
            name="phoneinput"
            control={control}
            rules={{
              validate: (value) => isValidPhoneNumber(value),
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                value={value}
                onChange={onChange}
                placeholder="Enter phone number"
                className={`w-full p-2 border rounded ${
                  errors.phoneinput ? 'border-red-500' : ''
                }`}
              />
            )}
          />
          {errors['phoneinput'] && (
            <p className="text-red-500">Invalid Phone Number</p>
          )}

          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>

        {showSuccessModal && <SuccessModal onClose={closeSuccessModal} />}
      </div>
    </div>
  );
}

export default HotelBookingForm;
