import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useUIStore } from '../store/useUIStore';

export default function MobileNav() {
  const { mobileNavOpen, closeMobileNav } = useUIStore();
  
  // Close mobile nav when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMobileNav();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeMobileNav]);
  
  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileNavOpen]);
  
  if (!mobileNavOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeMobileNav}
      />
      
      {/* Mobile Navigation Menu */}
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button onClick={closeMobileNav} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-lg font-medium ${isActive ? 'text-saddle-tan' : 'text-charcoal'}`
              }
              onClick={closeMobileNav}
            >
              Home
            </NavLink>
            <NavLink 
              to="/shop" 
              className={({ isActive }) => 
                `text-lg font-medium ${isActive ? 'text-saddle-tan' : 'text-charcoal'}`
              }
              onClick={closeMobileNav}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/custom" 
              className={({ isActive }) => 
                `text-lg font-medium ${isActive ? 'text-saddle-tan' : 'text-charcoal'}`
              }
              onClick={closeMobileNav}
            >
              Custom Work
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-lg font-medium ${isActive ? 'text-saddle-tan' : 'text-charcoal'}`
              }
              onClick={closeMobileNav}
            >
              About
            </NavLink>
            <NavLink 
              to="/locations" 
              className={({ isActive }) => 
                `text-lg font-medium ${isActive ? 'text-saddle-tan' : 'text-charcoal'}`
              }
              onClick={closeMobileNav}
            >
              Locations
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-lg font-medium ${isActive ? 'text-saddle-tan' : 'text-charcoal'}`
              }
              onClick={closeMobileNav}
            >
              Contact
            </NavLink>
            {/* <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `text-lg font-medium ${isActive ? 'text-saddle-tan' : 'text-charcoal'}`
              }
              onClick={closeMobileNav}
            >
              Blog
            </NavLink> */}
            <NavLink 
              to="/cart" 
              className={({ isActive }) => 
                `text-lg font-medium ${isActive ? 'text-saddle-tan' : 'text-charcoal'}`
              }
              onClick={closeMobileNav}
            >
              Cart
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}