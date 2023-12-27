import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Rehau from '../pages/Rehau';
import ContantUs from '../pages/ContantUs';
import Products from '../pages/Products';
import Projects from '../pages/Projects';


const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about-us',
    Component: AboutUs
  },
  {
    path: '/rehau',
    Component: Rehau
  },
  {
    path:'/contact' ,
    Component: ContantUs
  },
  {
    path:'/products' ,
    Component: Products
  },
  {path:'/projects' , 
    Component: Projects}
]);

export default router;