export default function QuantityInput({
  quantity,
  onIncrease,
  onDecrease,
  onQuantityChange,
  min = 1,
  max = 99,
  className = '',
}) {
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    
    if (isNaN(value)) {
      onQuantityChange(min);
    } else if (value < min) {
      onQuantityChange(min);
    } else if (value > max) {
      onQuantityChange(max);
    } else {
      onQuantityChange(value);
    }
  };
  
  return (
    <div className={`flex items-center border border-gray-300 rounded-md ${className}`}>
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        className="px-3 py-2 text-gray-600 hover:text-deep-brown disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Decrease quantity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
      
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={handleInputChange}
        className="w-12 text-center border-0 focus:outline-none focus:ring-0 p-0"
        aria-label="Quantity"
      />
      
      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        className="px-3 py-2 text-gray-600 hover:text-deep-brown disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Increase quantity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
}