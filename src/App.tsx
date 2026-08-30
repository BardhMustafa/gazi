import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { DrawerProvider } from './store/DrawerContext';
import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_KEY || 'dqtfurml7',
  },
});

const App = () => {
  return (
    <DrawerProvider>
      <RouterProvider router={router} />
    </DrawerProvider>
  );
};

export default App;
