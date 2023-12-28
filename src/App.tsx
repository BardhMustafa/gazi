import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { DrawerProvider } from './store/DrawerContext';

const App = () => {
  return (
    <DrawerProvider>
      <RouterProvider router={router} />
    </DrawerProvider>
  );
};

export default App;
