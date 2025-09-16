import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MobileNav from './components/MobileNav';
import { useUIStore } from './store/useUIStore';

export default function App() {
  const location = useLocation();
  const { mobileNavOpen } = useUIStore();
  
  useEffect(() => {
    if (mobileNavOpen) {
      useUIStore.getState().closeMobileNav();
    }
  }, [location.pathname, mobileNavOpen]);
  
  return (
    <>
      <Outlet />
      <MobileNav />
    </>
  );
}