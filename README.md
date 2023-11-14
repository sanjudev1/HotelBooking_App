# React + Vite

# Hight Level Booking App Architecture

    # Home Page
    # About Page
    # Our Services
    # Contact

# Select UI Design of Booking App

    - After Final Selection

# Basic fautures of Booking App

       - Forms
       - Giving services to the  Available Rooms
       - Navigation for specific visit Page
       - Display Popular Room Services in the Home Page using Coursel
       - Only Succesfull Form Submission Modal interaction

# Pacakges required to implement this App

     - react-slick for Coursel (# docs  https://react-slick.neostack.com/docs/example/simple-slider)
     - react-hook-form for Form Validations (# docs  https://react-hook-form.com/get-started#Quickstart)
                                           [# Justification :formik is heavy bundle size than react-hook-form]

     - react-router-dom for navigation (# docs https://reactrouter.com/en/main/routers/create-browser-router)
     - font-awesome-icons
     - Tailwind Css
     - react-phone-number-input  (# https://catamphetamine.gitlab.io/react-phone-number-input/)

# Step by Step Implementation

- Setup React App (used vite scaffold) [#vite setup faster than basic react-app]
- Tailwind configuration (refer # https://tailwindcss.com/docs/guides/create-react-app)

# MY first Apprach is desktop device then i after go for remaining devices

- Home Page

  - Header (Navbar Items like Home,about,services,contact)
  - collection of Hotels Images
  - Maintain in constant folder
  - Image Slidder
    - React Slick (package)
  - bug fixed for react slick arow icons
  - Routing (react-router-dom )
  - font awesome icons setup

- contact us (form validations ) [# react-hook-form]
  - email,name,age,
  - phone number
  - fixes some issues
- About Us
  - font-awesome icons are used
- Our Services - Collection of Hotel Category Images are required - Add Diamond Icon to the App

# Implement responsive website
