import React, { useState, useEffect } from 'react';

interface MobileWrapperProps {
  children: React.ReactNode;
  mobileChildren: React.ReactNode;
}

export const MobileWrapper = ({
  children,
  mobileChildren,
}: MobileWrapperProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? mobileChildren : children;
};
