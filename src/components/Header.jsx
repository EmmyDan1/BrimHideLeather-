import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { useUIStore } from "../store/useUIStore";
import MobileNav from "./MobileNav";

export default function Header({ transparent = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const { mobileNavOpen, toggleMobileNav } = useUIStore();

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine header classes based on transparent prop and scroll state
  const headerClasses =
    transparent && !isScrolled
      ? "bg-transparent text-bone"
      : "bg-white text-charcoal shadow-sm";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerClasses}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/favicon.svg" 
              alt="Brimhide Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-2xl font-serif font-bold">Brimhide</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `font-medium hover:text-saddle-tan ${
                  isActive ? "text-saddle-tan" : ""
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/custom"
              className={({ isActive }) =>
                `font-medium hover:text-saddle-tan ${
                  isActive ? "text-saddle-tan" : ""
                }`
              }
            >
              Custom Work
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium hover:text-saddle-tan ${
                  isActive ? "text-saddle-tan" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/locations"
              className={({ isActive }) =>
                `font-medium hover:text-saddle-tan ${
                  isActive ? "text-saddle-tan" : ""
                }`
              }
            >
              Locations
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium hover:text-saddle-tan ${
                  isActive ? "text-saddle-tan" : ""
                }`
              }
            >
              Contact
            </NavLink>
            {/* <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-medium hover:text-saddle-tan ${
                  isActive ? "text-saddle-tan" : ""
                }`
              }
            >
              Blog
            </NavLink> */}
          </nav>

          {/* Cart and Mobile Menu Buttons */}
          <div className="flex items-center">
            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 mr-2"
              aria-label="Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-deep-brown rounded-full">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileNav}
              className="p-2 md:hidden"
              aria-label="Menu"
            >
              {mobileNavOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {mobileNavOpen && <MobileNav />}
          </div>
        </div>
      </div>
    </header>
  );
}
