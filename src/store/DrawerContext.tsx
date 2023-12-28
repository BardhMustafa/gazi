import { createContext, useContext, useState } from 'react';

interface Drawer {
  drawer: boolean;
  toggleDrawer: (value: boolean) => void;
}

export const DrawerContext = createContext<Drawer>({
  drawer: false,
  toggleDrawer: () => {},
});

interface DrawerProviderProps {
  children: React.ReactNode;
}

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [drawer, toggleDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ drawer, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }

  return context;
};
