import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';

import { Layout } from './layout';

// const AboutUs = lazy(() => import('../pages/AboutUs'));
// const Rehau = lazy(() => import('../pages/Rehau'));
// const Contact = lazy(() => import('../pages/Contact'));
// const Products = lazy(() => import('../pages/Products'));
// const Showroom = lazy(() => import('../pages/Showroom'));
// const Factory = lazy(() => import('../pages/Factory'));
// const Synego = lazy(() => import('../pages/Products/Synego'));
// const Pvc = lazy(() => import('../pages/Products/Pvc'));
// const Alumin = lazy(() => import('../pages/Products/Alumin'));
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
        element: (
          // <Suspense fallback={<Loader />}>
          <AboutUs />
          // </Suspense>
        ),
      },
      {
        path: '/rehau',
        element: (
          //<Suspense fallback={<Loader />}>
          <Rehau />
          //</Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          //<Suspense fallback={<Loader />}>
          <Contact />
          //</Suspense>
        ),
      },
      {
        path: '/products',
        element: (
          //<Suspense fallback={<Loader />}>
          <Products />
          //</Suspense>
        ),
      },
      {
        path: '/products/pvc',
        element: (
          //<Suspense fallback={<Loader />}>
          <Pvc />
          //</Suspense>
        ),
      },
      {
        path: '/products/alumin',
        element: (
          //<Suspense fallback={<Loader />}>
          <Alumin />
          //</Suspense>
        ),
      },
      { path: '/projects', element: <Projects /> },
      {
        path: '/projects/showroom',
        element: (
          //<Suspense fallback={<Loader />}>
          <Showroom />
          //</Suspense>
        ),
      },
      {
        path: '/projects/factory',
        element: (
          //<Suspense fallback={<Loader />}>
          <Factory />
          //</Suspense>
        ),
      },
      {
        path: '/products/pvc/synego',
        element: (
          //<Suspense fallback={<Loader />}>
          <Synego />
          //</Suspense>
        ),
      },
    ],
  },
]);

export default router;
