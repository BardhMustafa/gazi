import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';

import { Layout } from './layout';

import { ErrorPage } from '../pages/ErrorPage';
import Factory from '../pages/Factory';
import Synego from '../pages/Products/Synego';
import AboutUs from '../pages/AboutUs';
import Rehau from '../pages/Rehau';
import Contact from '../pages/Contact';
import Pvc from '../pages/Products/Pvc';
import Alumin from '../pages/Products/Alumin';
import Showroom from '../pages/Showroom';
import Products from '../pages/Products';
import { Artevo } from '../pages/Products/Artevo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/rehau',
        element: <Rehau />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/pvc',
        element: <Pvc />,
      },
      {
        path: '/products/alumin',
        element: <Alumin />,
      },
      { path: '/projects', element: <Projects /> },
      {
        path: '/projects/showroom',
        element: <Showroom />,
      },
      {
        path: '/projects/factory',
        element: <Factory />,
      },
      {
        path: '/products/pvc/synego',
        element: <Synego />,
      },
      {
        path: '/products/pvc/artevo',
        element: <Artevo />,
      },
    ],
  },
]);

export default router;
