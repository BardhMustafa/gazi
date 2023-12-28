import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Rehau from '../pages/Rehau';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import Projects from '../pages/Projects';
import { Layout } from './layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Error 404</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/rehau', element: <Rehau /> },
      { path: '/contact', element: <Contact /> },
      { path: '/products', element: <Products /> },
      { path: '/projects', element: <Projects /> },
    ],
  },
]);

export default router;
