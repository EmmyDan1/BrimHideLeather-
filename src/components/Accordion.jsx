import { useState } from 'react';

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <div className="border-t border-gray-200">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="flex justify-between items-center w-full py-4 px-2 text-left font-medium focus:outline-none"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-serif">{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
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
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="px-2 pb-2">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}