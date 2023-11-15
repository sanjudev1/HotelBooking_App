import About from './components/About';
import Header from './components/Header';
import Home from './components/ImageSlider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/HotelBookingForm';

const App = () => {
  const Approuter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'about',
      element: (
        <>
          <Header /> <About />
        </>
      ),
    },
    {
      path: 'services',
      element: (
        <>
          <Header />
          <Services />
        </>
      ),
    },
    {
      path: 'contact',
      element: (
        <>
          <Header />
          <Contact />
        </>
      ),
    },
    {
      path: 'blog',
      element: (
        <>
          <Header />
          <Blog />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={Approuter}></RouterProvider>
    </div>
  );
};

export default App;
