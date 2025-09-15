import { useState, useRef, useEffect } from 'react';

export default function SortMenu({ sortOption, setSortOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  
  const sortOptions = [
    { id: 'newest', name: 'Newest' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
  ];
  
  const currentOption = sortOptions.find(option => option.id === sortOption) || sortOptions[0];
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionClick = (optionId) => {
    setSortOption(optionId);
    setIsOpen(false);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-deep-brown"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="mr-2">Sort by:</span>
        <span className="font-medium">{currentOption.name}</span>
        <svg
          className={`ml-2 h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  option.id === sortOption
                    ? 'bg-gray-100 text-deep-brown font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}